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
for (const z of tz_list) {
	var zone = document.createElement("option")
	zone.value = z
	zone.innerText = z
	tz_select.append(zone)
}
const offsets_to_zones = new Map()
for (const tz of tz_list) {
	var tz_offset = getUtcOffset(tz)
	if (offsets_to_zones.get(tz_offset)) { offsets_to_zones.get(tz_offset).push(tz) }
	else { offsets_to_zones.set(tz_offset, [tz]) }
}

const local_datetime = new Date();
const local_offset = local_datetime.getTimezoneOffset()
const local_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

//set 'current' element to this value
document.getElementById('current').value = new Date(local_datetime.getTime() - (local_offset * 60000)).toISOString().slice(0,-1)
document.getElementById('desired').value = new Date(local_datetime.getTime() - ((local_offset-1020) * 60000)).toISOString().slice(0,-1)
document.getElementById('timezones').value = local_timezone

//on submit 
document.getElementById('submit').onclick = function() {
	var curr_time = new Date(document.getElementById('current').value)
	var curr_timezone = document.getElementById('timezones').value
	var wanted_time = new Date(document.getElementById('desired').value)
	
	const curr_offset = getUtcOffset(curr_timezone)

	//calc desired time offset from curr time - desired time
	const desired_offset = curr_offset + Math.round((wanted_time.getTime() - curr_time.getTime()) / 60000)
	
	//get timezone from offset of desired time
	var closest = Number.MAX_VALUE
	var matching_zones = []
	for (const offset of offsets_to_zones.keys()) {
		var offset_difference = Math.abs(desired_offset - offset)
		if (offset_difference < closest) {
			closest = offset_difference
			matching_zones = offsets_to_zones.get(offset)
		}
	}

	const results = document.getElementById('result')

	curr_time.setTime(curr_time.getTime() - ((local_offset - (curr_offset*-1))*60000))
	var s = "<h2>Answer:</h2><p>It would be " + (curr_time).toLocaleString([],{timeZone: matching_zones[0]}) + " in:</p>"
	if ((curr_time).toLocaleString([],{timeZone: matching_zones[0]}) != wanted_time.toLocaleString()) {
		s = "<h2>Answer:</h2><p>The closest it would get would be " + (curr_time).toLocaleString([],{timeZone: matching_zones[0]}) + " in:</p>"
	}

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

	for (const key of Object.keys(out).sort()) {
		s += '<h3>' + key + '</h3>'
		if(out[key].length) {
			s += '<ul><li>' + out[key].join('</li><li>')+'</li></ul>'
		}
		s += '\n'
	}
	results.innerHTML = s
}

