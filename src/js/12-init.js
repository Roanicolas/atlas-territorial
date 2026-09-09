/* ════════ INIT ════════ */
renderChartsIn('sec-cover'); // (sin charts, pero deja el patrón)

/* ── APOYOS TERRITORIALES (persistencia localStorage) ── */
const CATS={a:{label:'Apoya',color:'#16A34A'},p:{label:'Posible',color:'#D97706'},o:{label:'Otro candidato',color:'#EA580C'},c:{label:'Oposición',color:'#DC2626'},n:{label:'Sin contactar',color:'#94A3B8'}};
let currentCat='a', pins=[];
var PINS_KEY='atlas.pins.13108';
function loadPins(){try{pins=JSON.parse(localStorage.getItem(PINS_KEY)||'[]');}catch(e){pins=[];} redrawPins(); updateCounts();}
function savePins(){try{localStorage.setItem(PINS_KEY,JSON.stringify(pins));}catch(e){}}
function addPin(x,y,c){pins.push({x:+x.toFixed(1),y:+y.toFixed(1),c,t:Date.now()}); savePins(); redrawPins(); updateCounts();}
function removePin(i){pins.splice(i,1); savePins(); redrawPins(); updateCounts();}
function clearPins(){if(!pins.length)return; if(!confirm('¿Borrar TODOS los pines? ('+pins.length+')'))return; pins=[]; savePins(); redrawPins(); updateCounts();}
function setCat(c){currentCat=c; document.querySelectorAll('.terr-cat').forEach(b=>b.classList.toggle('active',b.dataset.cat===c));}
function toggleTerrMode(){const on=document.body.classList.toggle('terr-add'); const b=document.getElementById('terrAdd'); if(b)b.classList.toggle('active',on);}
function exportPins(){const data={pins:pins,cats:CATS,exported:new Date().toISOString(),comuna:'Independencia'};const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='apoyos_independencia_'+new Date().toISOString().slice(0,10)+'.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),100);}
function redrawPins(){const g=document.getElementById('pinsLayer'); if(!g) return; g.innerHTML=pins.map((p,i)=>{const col=(CATS[p.c]||CATS.n).color; return '<g class="pin" data-cat="'+p.c+'" transform="translate('+p.x+','+p.y+')" onclick="event.stopPropagation();onPinClick('+i+')"><path d="M-7,-2 L0,-9 L7,-2 L7,6 L-7,6 Z" fill="'+col+'" stroke="#0B1428" stroke-width="1"/><rect x="-2" y="1" width="4" height="5" fill="#0B1428" opacity=".6"/></g>';}).join('');}
function updateCounts(){const c={a:0,p:0,o:0,c:0,n:0}; pins.forEach(p=>{if(c[p.c]!=null)c[p.c]++;}); Object.keys(c).forEach(k=>{const el=document.getElementById('cnt-'+k); if(el)el.textContent=c[k];});}
function onPinClick(i,ev){openPinMenu(i, ev||window.event);}
loadPins();






