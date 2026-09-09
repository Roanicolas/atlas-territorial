/* ════════ SIMULADOR DE VOTOS ════════ */
const SIM_SEG=[
  {key:'becerra',label:'Becerra · PAVP',sub:'ecologista, sin arrastre',total:3983,base:75},
  {key:'blancos',label:'Votos blancos',sub:'protesta convertible',total:3103,base:50},
  {key:'perez',label:'Pérez · izq. ecológica',sub:'captura parcial',total:4692,base:25},
  {key:'parada',label:'Parada · FA',sub:'depende del escenario',total:15519,base:15},
  {key:'abst',label:'Abstención reactivada',sub:'estimación',total:12789,base:20},
  {key:'nulos',label:'Nulos · rechazo',sub:'voto de protesta',total:6189,base:30},
  {key:'nuevo',label:'Voto nuevo 2028',sub:'jóvenes que cumplen 18',total:3500,base:97}
];
const SIM_MAX=20000;
const scenarios={frag:{meta:15500,paradaBase:15},unida:{meta:17500,paradaBase:8}};
let simRates={}, scenario='frag', simBuilt=false;

function initSim(){
  if(!simBuilt){
    document.getElementById('simRows').innerHTML=SIM_SEG.map(s=>`
      <div class="sim-row">
        <div class="sim-row-head">
          <div class="sim-row-label">${s.label}<small>${s.sub} · total ${fmt(s.total)}</small></div>
          <div class="sim-row-out" id="out_${s.key}">—</div>
        </div>
        <input type="range" min="0" max="100" id="sl_${s.key}" oninput="onSlide('${s.key}',this.value)">
      </div>`).join('');
    simBuilt=true; resetSim();
  } else { computeSim(); }
}
function onSlide(key,val){simRates[key]=+val;computeSim();}
function resetSim(){
  SIM_SEG.forEach(s=>{
    let base = s.key==='parada' ? scenarios[scenario].paradaBase : s.base;
    simRates[s.key]=base;
    const sl=document.getElementById('sl_'+s.key); if(sl) sl.value=base;
  });
  computeSim();
}
function setScenario(scn){
  scenario=scn;
  document.querySelectorAll('.scenario-tab').forEach(t=>t.classList.toggle('active',t.dataset.scn===scn));
  simRates['parada']=scenarios[scn].paradaBase;
  const sl=document.getElementById('sl_parada'); if(sl) sl.value=scenarios[scn].paradaBase;
  computeSim();
}
function computeSim(){
  let total=0;
  SIM_SEG.forEach(s=>{
    const r=simRates[s.key]||0, got=Math.round(s.total*r/100); total+=got;
    const o=document.getElementById('out_'+s.key); if(o) o.innerHTML=r+'% &rarr; <b>'+fmt(got)+'</b>';
  });
  const meta=scenarios[scenario].meta;
  const fill=document.getElementById('gaugeFill');
  fill.style.width=Math.min(100,total/SIM_MAX*100)+'%';
  fill.style.background = total>=meta?'var(--green)' : total>=meta*0.88?'var(--gold)' : 'var(--red)';
  const ml=document.getElementById('gaugeMetaLine');
  ml.style.left=(meta/SIM_MAX*100)+'%';
  ml.querySelector('.gauge-meta-lbl').textContent='Meta '+fmt(meta);
  const v=document.getElementById('simVerdict');
  if(total>=meta){v.className='verdict win';v.innerHTML='✓ Alcanzas la meta · '+fmt(total-meta)+' votos de margen';}
  else{v.className='verdict lose';v.innerHTML='✗ Faltan '+fmt(meta-total)+' votos para la meta';}
  countUp(document.getElementById('gaugeTotal'),total);
}

