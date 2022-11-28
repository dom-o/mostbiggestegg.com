var debug = require('debug')('haps')

const colors = [
  '#0074D9', //#blue
  '#2ECC40', //#green
  '#FFDC00', //#yellow
  '#FF851B', //#orange
  '#FF4136', //#red
  '#B10DC9', //#purple
  '#FFFFFF' //#white
];
const usedColors = {};

class Hap {
  constructor(id,date,text) {
    this.id=id;
    this.date=date;
    this.dateStr=date.toLocaleString("en-US", {month: "long"});
    this.text=text;
  }
}

function bars(e,s) {
  let str = `<div class="event"><div class="bars" style="background: linear-gradient(to right`;
  let j=0, check=false;

  for (const [i,v] of Object.entries(Object.values(s))) {
    if (e && v && e.id == v.id) {
      str+= `, ${usedColors[v.id]} ${14*i}%,${usedColors[v.id]} 100%`;
      check = true;
      break;
    } else {
      str+= `, ${usedColors[v.id]} ${14*i}%,${usedColors[v.id]} ${14*i+14}%`;
      j=14*i+14;
    }
  }
  if (!check) {
    str+= `, #121212 ${j}%, #121212 100%`;
  }
  str+=');"></div>';
  if (e) {
    str+= `<div class="event-info" style="border-top:solid ${usedColors[e.id]}"><h3><time datetime="${e.date}">${e.dateStr}</time></h3><p>${e.text}</p></div>`;
  }
  str+= '</div>';
  return str;
}

function initMakeHaps(options={}) {
  return function makeHaps(files, metalsmith, done) {
    setImmediate(done);

    const destination = options.destination || 'about.md';
    const beginFile='<h1>Haps</h1><div id="timeline">';
    var out ='';
    var years = {};
    for(let i=1994;i<new Date().getFullYear()+1;i++) {
      years[i] = [];
    }
    for (let e of metalsmith._metadata['haps-events']) {
      let end, start = new Date(e.start.getUTCFullYear(), e.start.getUTCMonth(), e.start.getUTCDate());
      if (e.end) { end = new Date(e.end.getUTCFullYear(), e.end.getUTCMonth(), e.end.getUTCDate()); }
      let id=''+start+e.text+end+e.endText

      if (e.punch) {
        let h= new Hap(id,start,e.text);
        h.punch=true;
        years[start.getFullYear()].push(h);
      } else {
        let h= new Hap(id,start,e.text);
        h.insert=true;
        years[start.getFullYear()].push(h);
        if (end) {
          h= new Hap(id,end,e.endText);
          h.remove=true;
          years[end.getFullYear()].push(h);
        }
      }
    }

    var stack={};
    for (const [year, evs] of Object.entries(years)) {
      let str = `<div class="year-container"><h2>${year}</h2><div class="events-container">`;
      if (evs.length) {
        if(evs.length>1) {
          evs.sort((a,b)=>{return a.date-b.date;});
          for (let i=1;i<evs.length;i++) {
            if (evs[i].date.getMonth() == evs[i-1].date.getMonth()) {
              const dateOptions = {month: "short", day: "numeric" };
              evs[i].dateStr=evs[i].date.toLocaleString("en-US", dateOptions);
              evs[i-1].dateStr=evs[i-1].date.toLocaleString("en-US", dateOptions);
            }
          }
        }
        let tmp='';
        for (let e of evs) {
          debug(`Add event "${e.text}".`)
          let color = usedColors[e.id];
          if (e.punch || e.insert) {
            color= colors.shift();
            usedColors[e.id]=color;
            stack[e.id]=e;
          }
          tmp=bars(e, stack)+tmp;
          if (e.punch || e.remove) {
            delete stack[e.id];
            colors.push(color);
          }
        }
        str+= tmp;
      } else {
        str+= bars(null, stack);
      }
      out=str+'</div></div>'+out;
    }
    out = beginFile+out+'</div>';
    files[destination].contents+= Buffer.from(out) //= {
    //   layout: 'haps.njk',
    //   sidebar: true,
    //   ord: 17,
    //   contents: Buffer.from(out)
    // };
    done()
  };
}
module.exports = initMakeHaps;
