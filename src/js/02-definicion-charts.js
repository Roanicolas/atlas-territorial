/* ════════ DEFINICIÓN DE CHARTS (lazy) ════════ */
const charts = {}; // id -> rendered flag
const builders = {

  chResumenCaptura(){ return new Chart(g('chResumenCaptura'),{type:'bar',data:{
    labels:['Becerra PAVP','Abstención','Parada FA','Nulos','Blancos','Pérez','Voto nuevo'],
    datasets:[{label:'Captura proyectada',data:[2987,2558,2328,1857,1552,1173,3401],
      backgroundColor:[C.greenL,C.green,C.greenD,C.gold,C.goldL,C.greenL,C.green],borderRadius:5,maxBarThickness:46}]},
    options:baseBar('horizontal','votos capturados')}); },

  chResumenMeta(){
    const seg=[['Becerra',2987],['Blancos',1552],['Pérez',1173],['Parada',2328],['Abstención',2558],['Nulos',1857],['Voto nuevo',3401]];
    let acc=0; const cum=seg.map(s=>{acc+=s[1];return acc;});
    return new Chart(g('chResumenMeta'),{type:'line',data:{labels:seg.map(s=>s[0]),
      datasets:[{label:'Acumulado',data:cum,borderColor:C.gold,backgroundColor:'rgba(184,134,46,0.12)',
        fill:true,tension:.3,pointBackgroundColor:C.gold,pointRadius:4,pointHoverRadius:6}]},
      options:{responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:false},tooltip:{...tooltipStyle,callbacks:{label:c=>'Acumulado: '+fmt(c.raw)+' votos'}},
          annotation:false},
        scales:{y:{grid:gridStyle,ticks:{callback:v=>fmt(v)},suggestedMax:16500},x:{grid:{display:false}}}}}); },

  chEtaria(){ return new Chart(g('chEtaria'),{type:'bar',data:{
    labels:['0–14','15–29','30–44','45–64','65+'],
    datasets:[{label:'Población estimada',data:[18360,25700,31600,26900,14735],
      backgroundColor:goldRamp,borderRadius:5,maxBarThickness:48}]},
    options:baseBar('vertical','habitantes')}); },

  chVerdes(){ return new Chart(g('chVerdes'),{type:'bar',data:{
    labels:['Independencia','OMS recomienda'],
    datasets:[{label:'m²/hab',data:[1.5,9],backgroundColor:[C.red,C.green],borderRadius:6,maxBarThickness:80}]},
    options:{...baseBar('vertical','m²/hab'),plugins:{legend:{display:false},
      tooltip:{...tooltipStyle,callbacks:{label:c=>c.raw+' m²/hab'}}}}}); },

  chGenero(){ return new Chart(g('chGenero'),{type:'doughnut',data:{
    labels:['Mujeres','Hombres'],datasets:[{data:[60027,56916],
      backgroundColor:[C.gold,C.n3],borderColor:C.ink,borderWidth:3,hoverOffset:6}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'62%',
      plugins:{legend:{position:'bottom'},tooltip:{...tooltipStyle,
        callbacks:{label:c=>c.label+': '+fmt(c.raw)+' ('+(c.raw/116943*100).toFixed(1)+'%)'}}}}}); },

  chMiedo(){ return new Chart(g('chMiedo'),{type:'bar',data:{
    labels:['No usa celular','Cree que aumentó','No sale de noche','Ve drogas'],
    datasets:[{label:'% de vecinos',data:[80.2,73.3,70.5,26.7],
      backgroundColor:redRamp,borderRadius:5,maxBarThickness:30}]},
    options:{...baseBar('horizontal','%'),scales:{x:{grid:gridStyle,max:100,ticks:{callback:v=>v+'%'}},y:{grid:{display:false}}}}}); },

  chDMCS(){
    const d=[['Ñuñoa',40.3],['San Miguel',18.4],['Santiago',11.5],['RM promedio',4],['Macul',-1.2],['Melipilla',-2.9],['INDEPENDENCIA',-4.9]];
    return new Chart(g('chDMCS'),{type:'bar',data:{labels:d.map(x=>x[0]),
      datasets:[{label:'Variación DMCS %',data:d.map(x=>x[1]),
        backgroundColor:d.map(x=>x[0]==='INDEPENDENCIA'?C.green:x[0]==='RM promedio'?C.gold:x[1]<0?C.greenD:C.red),
        borderRadius:4,maxBarThickness:30}]},
      options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:false},tooltip:{...tooltipStyle,callbacks:{label:c=>(c.raw>0?'+':'')+c.raw+'%'}}},
        scales:{x:{grid:gridStyle,ticks:{callback:v=>(v>0?'+':'')+v+'%'}},
          y:{grid:{display:false},ticks:{color:ctx=>ctx.tick.label==='INDEPENDENCIA'?C.greenL:C.paper2}}}}}); },

  chFinanzas(){ return new Chart(g('chFinanzas'),{type:'bar',data:{
    labels:['Ingresos','Gastos','Déficit'],
    datasets:[{label:'Millones CLP',data:[30957,33438,2481],
      backgroundColor:[C.green,C.red,C.gold],borderRadius:6,maxBarThickness:64}]},
    options:{...baseBar('vertical','M CLP'),plugins:{legend:{display:false},
      tooltip:{...tooltipStyle,callbacks:{label:c=>'$'+fmt(c.raw)+'M CLP'}}}}}); },

  chGasto(){ return new Chart(g('chGasto'),{type:'doughnut',data:{
    labels:['Salud','Educación','Aseo y ornato','Seguridad','Otros'],
    datasets:[{data:[52,18,13,6,11],
      backgroundColor:[C.gold,C.goldL,C.goldD,C.n2,C.n3],borderColor:C.ink,borderWidth:3,hoverOffset:6}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'58%',
      plugins:{legend:{position:'right'},tooltip:{...tooltipStyle,callbacks:{label:c=>c.label+': ~'+c.raw+'%'}}}}}); },

  chMigracion(){ return new Chart(g('chMigracion'),{type:'doughnut',data:{
    labels:['Venezuela','Perú','Colombia','Otros'],
    datasets:[{data:[46.7,22.9,15.8,14.6],
      backgroundColor:[C.gold,C.goldL,C.goldD,C.n3],borderColor:C.ink,borderWidth:3,hoverOffset:8}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'60%',
      plugins:{legend:{position:'bottom'},tooltip:{...tooltipStyle,
        callbacks:{label:c=>c.label+': '+c.raw+'% (~'+fmt(Math.round(c.raw/100*51908))+')'}}}}}); },

  chAlcalde(){ return new Chart(g('chAlcalde'),{type:'bar',data:{
    labels:['Iglesias','Parada','Garrido','Pérez','Becerra'],
    datasets:[{label:'Votos',data:[25846,15519,7279,4692,3983],
      backgroundColor:[C.red,C.gold,C.n3,C.n3,C.greenL],borderRadius:5,maxBarThickness:42}]},
    options:{...baseBar('vertical','votos'),plugins:{legend:{display:false},
      tooltip:{...tooltipStyle,callbacks:{label:c=>fmt(c.raw)+' votos ('+(c.raw/57319*100).toFixed(2)+'%)'}}}}}); },

  chConcejo(){ return new Chart(g('chConcejo'),{type:'bar',data:{
    labels:['Pichara','Barco','Breake','Álvarez','Huilipán','Díaz R.','Jara','Cuevas'],
    datasets:[{label:'Votos',data:[3576,2967,2418,2152,1858,1733,1660,1565],
      backgroundColor:[C.gold,C.n3,C.red,C.red,C.gold,C.red,C.n3,C.gold],borderRadius:4,maxBarThickness:30}]},
    options:{...baseBar('horizontal','votos'),plugins:{legend:{display:false},
      tooltip:{...tooltipStyle,callbacks:{label:c=>fmt(c.raw)+' votos',afterLabel:c=>['Pichara FA','Barco IND/RN','Breake REP','Álvarez RN','Huilipán PC','Díaz UDI','Jara IND/ChV','Cuevas PS'][c.dataIndex]}}}}}); },

  chPadron(){ return buildPadron(padronType); },

  chCapturables(){ return new Chart(g('chCapturables'),{type:'bar',data:{
    labels:['Becerra','Blancos','Pérez','Parada FA','Abstención','Nulos','Voto nuevo'],
    datasets:[
      {label:'Total origen 2024',data:[3983,3103,4692,15519,12789,6189,3500],
        backgroundColor:'rgba(155,152,138,0.25)',borderRadius:4,maxBarThickness:30},
      {label:'Captura proyectada',data:[2987,1552,1173,2328,2558,1857,3401],
        backgroundColor:C.greenL,borderRadius:4,maxBarThickness:30}]},
    options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,
      plugins:{legend:{position:'top'},tooltip:{...tooltipStyle,callbacks:{label:c=>c.dataset.label+': '+fmt(c.raw)}}},
      scales:{x:{grid:gridStyle,ticks:{callback:v=>fmt(v)}},y:{grid:{display:false},stacked:false}}}}); },

  chPavp(){ return new Chart(g('chPavp'),{type:'bar',data:{
    labels:['Becerra (alcalde)','Suma 3 concejales PAVP'],
    datasets:[{label:'Votos',data:[3983,2785],backgroundColor:[C.greenL,C.muted2],borderRadius:6,maxBarThickness:90}]},
    options:{...baseBar('vertical','votos'),plugins:{legend:{display:false},
      tooltip:{...tooltipStyle,callbacks:{label:c=>fmt(c.raw)+' votos'}}}}}); },

  chTerritorio(){ return new Chart(g('chTerritorio'),{type:'bar',data:{
    labels:['Eloísa Díaz + Quito (P1)','Sta. Teresita + Bettini (P3)','Balmaceda (P2)','M. R. Prado','Gabriela Mistral (P4)','Camilo Mori'],
    datasets:[{label:'~Votantes',data:[16126,11412,9179,9179,7691,3722],
      backgroundColor:[C.red,C.greenL,C.gold,C.n3,C.n2,C.n3],borderRadius:5,maxBarThickness:34}]},
    options:{...baseBar('horizontal','votantes')}}); },

  chRuta(){ return new Chart(g('chRuta'),{type:'bar',data:{
    labels:['F1 · Vecino presente','F2 · Vecino que hace','F3 · Construye alianzas','F4+5 · Candidato + Campaña'],
    datasets:[{label:'Quincenas',data:[16,12,12,23],
      backgroundColor:[C.greenL,C.green,C.gold,C.red],borderRadius:5,maxBarThickness:40}]},
    options:{...baseBar('horizontal','quincenas'),plugins:{legend:{display:false},
      tooltip:{...tooltipStyle,callbacks:{label:c=>c.raw+' quincenas'}}}}}); }
};

function baseBar(dir,unit){
  const horizontal = dir==='horizontal';
  return {indexAxis:horizontal?'y':'x',responsive:true,maintainAspectRatio:false,
    plugins:{legend:{display:false},tooltip:{...tooltipStyle,callbacks:{label:c=>fmt(c.raw)+(unit?' '+unit:'')}}},
    scales:horizontal
      ?{x:{grid:gridStyle,ticks:{callback:v=>fmt(v)}},y:{grid:{display:false}}}
      :{y:{grid:gridStyle,ticks:{callback:v=>fmt(v)}},x:{grid:{display:false}}}};
}
function g(id){return document.getElementById(id).getContext('2d');}

function renderChartsIn(sectionId){
  const sec=document.getElementById(sectionId); if(!sec) return;
  sec.querySelectorAll('canvas').forEach(cv=>{
    if(!charts[cv.id] && builders[cv.id]){ charts[cv.id] = builders[cv.id](); }
  });
}

