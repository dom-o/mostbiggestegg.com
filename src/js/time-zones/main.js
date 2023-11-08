//get offset of current time using given timezone 
//https://stackoverflow.com/a/64263359
const getUtcOffset = (timeZone) => {
  const timeZoneName = Intl.DateTimeFormat("ia", {
    timeZoneName: "short",
    timeZone,
  })
    .formatToParts()
    .find((i) => i.type === "timeZoneName").value;
  const offset = timeZoneName.slice(3);
  if (!offset) return 0;

  const matchData = offset.match(/([+-])(\d+)(?::(\d+))?/);
  if (!matchData) throw `cannot parse timezone name: ${timeZoneName}`;

  const [, sign, hour, minute] = matchData;
  let result = parseInt(hour) * 60;
  if (sign === "-") result *= -1;
  if (minute) result + parseInt(minute);

  return result;
};

const tz_list = Intl.supportedValuesOf('timeZone')

const tz_select = document.getElementById("timezones")
const results = document.getElementById('result')
const curr_time_select = document.getElementById('current')
const desired_time_select = document.getElementById('desired')
const todays_date = document.getElementById('today')

//populate timezone list in html
for (const z of tz_list) {
	var zone = document.createElement("option")
	zone.value = z
	zone.innerText = z
	tz_select.append(zone)
}

//populate list of time zones for each offset from utc
const offsets_to_zones = new Map()
for (const tz of tz_list) {
	var tz_offset = getUtcOffset(tz)
	if (offsets_to_zones.get(tz_offset)) { offsets_to_zones.get(tz_offset).push(tz) }
	else { offsets_to_zones.set(tz_offset, [tz]) }
}

const local_datetime = new Date();
const local_offset = local_datetime.getTimezoneOffset() //user's local timezone offset

//initialize form fields; set current/timezones to user's local and desired to 6 hours ahead
curr_time_select.valueAsDate = new Date(local_datetime.getTime() - (local_offset * 60000))
desired_time_select.value = new Date(local_datetime.getTime() - ((local_offset-360) * 60000)).toISOString().slice(0,-1)
tz_select.value = Intl.DateTimeFormat().resolvedOptions().timeZone
todays_date.innerText = local_datetime.toDateString()

//on submit
document.getElementById('submit').onclick = function() {
	//this is because valueAsDate for the time element naturally gives back the date in utc, so we have to manually split/parse the raw value string ourselves
	var curr_time = new Date(local_datetime)
	var curr_time_select_components = curr_time_select.value.slice(0,-4).split(':')
	curr_time.setHours(curr_time_select_components[0])
	curr_time.setMinutes(curr_time_select_components[1])
	curr_time.setSeconds(curr_time_select_components[2])
	curr_time.setMilliseconds(curr_time_select.value.slice(-3))

	const curr_offset = getUtcOffset(tz_select.value)
	const wanted_time = new Date(desired_time_select.value)	

	//calc desired time offset as current offset + (time difference between desired time and 'current' time)
	const desired_offset = curr_offset + Math.round((wanted_time.getTime() - curr_time.getTime()) / 60000)
	
	//get list of timezones that have the desired offset (or are as close as possible)
	var closest = Number.MAX_VALUE
	var matching_zones = []
	for (const offset of offsets_to_zones.keys()) {
		var offset_difference = Math.abs(desired_offset - offset)
		if (offset_difference < closest) {
			closest = offset_difference
			matching_zones = offsets_to_zones.get(offset)
		}
	}

	//t is the time closest to the desired time, aka the specified 'current' time translated to one of the timezones with the desired offset.
	//since the 'current' time isn't necessarily the literal current time (user can specify arbitrary timezone and arbitrary datetime), the prev line translates the specified current time to a time in the local timezone, so .tolocalestring(), which translates a local time to a specified arbitrary timezone, will work properly
	curr_time.setTime(curr_time.getTime() - ((local_offset - (curr_offset*-1))*60000))
	const t = (curr_time).toLocaleString([],{timeZone: matching_zones[0]})

	var s = "<h2>Answer:</h2><p>It would be " + t + " in:</p>"
	if (t != wanted_time.toLocaleString()) {
		s = "<h2>Answer:</h2><p>The closest it would get would be " + t + " in:</p>"
	}

	//for every timezone with the right offset, get a list of affected countries (and cities therein)
	const out = {}
	for (const zone of matching_zones) {
		if (zones_to_places[zone]) {
			for (const place of zones_to_places[zone]) {
				if (!out[place['country']]) { out[place['country']] = [] }
				if (place['cities']) {
					out[place['country']] = out[place['country']].concat(place['cities'])
				}
			}
		}
	}

	//insert cities/countries into html
	for (const key of Object.keys(out).sort()) {
		s += '<h3>' + key + '</h3>'
		if(out[key].length) {
			s += '<ul><li>' + out[key].join('</li><li>')+'</li></ul>'
		}
		s += '\n'
	}
	results.innerHTML = s
}

