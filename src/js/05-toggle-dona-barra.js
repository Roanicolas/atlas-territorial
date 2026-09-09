/* ════════ TOGGLE DONA / BARRA · PADRÓN ════════ */
let padronType='doughnut';
function buildPadron(type){
  const labels=['Iglesias','Parada','Garrido','Pérez','Becerra','Nulos','Blancos','No votaron'];
  const data=[25846,15519,7279,4692,3983,6189,3103,12789];
  const bg=[C.red,C.redL,C.n3,C.n2,C.greenL,C.gold,C.goldL,C.n1];
  const isD=type==='doughnut';
  return new Chart(g('chPadron'),{type:isD?'doughnut':'bar',
    data:{labels,datasets:[{label:'Votos',data,backgroundColor:bg,borderColor:C.ink,
      borderWidth:isD?2:0,hoverOffset:6,borderRadius:isD?0:4,maxBarThickness:30}]},
    options:isD
      ?{responsive:true,maintainAspectRatio:false,cutout:'55%',
        plugins:{legend:{position:'right',labels:{font:{size:10},padding:8}},
          tooltip:{...tooltipStyle,callbacks:{label:c=>c.label+': '+fmt(c.raw)+' ('+(c.raw/79400*100).toFixed(1)+'% padrón)'}}}}
      :{indexAxis:'y',responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:false},tooltip:{...tooltipStyle,callbacks:{label:c=>fmt(c.raw)+' ('+(c.raw/79400*100).toFixed(1)+'% padrón)'}}},
        scales:{x:{grid:gridStyle,ticks:{callback:v=>fmt(v)}},y:{grid:{display:false}}}}});
}
function togglePadron(type,btn){
  padronType=type;
  btn.parentNode.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  if(charts['chPadron']) charts['chPadron'].destroy();
  charts['chPadron']=buildPadron(type);
}

