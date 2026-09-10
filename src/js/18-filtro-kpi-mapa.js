/* ═══════════ FILTRO KPI DEL MAPA (sexo · grupo etario) ═══════════ */
// Grupo etario: única desagregación real disponible es la de Independencia
// (Censo 2024, ya usada en el módulo Demografía / chEtaria). Las otras 5
// comunas solo tienen sexo desagregado en FICHAS[cod].bcn.sexo — por eso
// la pestaña "Grupo etario" queda deshabilitada fuera de Independencia,
// en vez de estimar un cruce que no está en la fuente.
const ETARIA_13108 = [
  {l:'0–14', v:18360}, {l:'15–29', v:25700}, {l:'30–44', v:31600},
  {l:'45–64', v:26900}, {l:'65+', v:14735},
];

let mkpDim = 'sexo';      // 'sexo' | 'etario'
let mkpSel = null;        // índice del chip activo, null = "Todos"
let mkpChartObj = null;

function toggleKpiPanel(){
  const p=document.getElementById('mkpPanel'), b=document.getElementById('mkpBtn');
  const open=!p.classList.contains('open');
  p.classList.toggle('open',open); b.classList.toggle('active',open);
  if(open) refreshKpiPanel();
}

function setKpiDim(dim){
  if(dim==='etario' && CUR!=='13108') return; // deshabilitado, sin dato real
  mkpDim=dim; mkpSel=null;
  document.getElementById('mkpTabSexo').classList.toggle('on', dim==='sexo');
  document.getElementById('mkpTabEtario').classList.toggle('on', dim==='etario');
  renderKpiChips(); renderKpiResultado();
}

function renderKpiChips(){
  const cont=document.getElementById('mkpChips');
  const labels = mkpDim==='sexo' ? ['Todos','Mujeres','Hombres'] : ['Todos'].concat(ETARIA_13108.map(e=>e.l));
  cont.innerHTML = labels.map((l,i)=>
    '<button class="mkp-chip'+((mkpSel===null&&i===0)||mkpSel===i-1?' on':'')+'" onclick="setKpiSel('+(i-1)+')">'+l+'</button>'
  ).join('');
}

function setKpiSel(idx){
  mkpSel = idx<0 ? null : idx;
  renderKpiChips(); renderKpiResultado();
}

function renderKpiResultado(){
  const F=FICHAS[CUR]; if(!F) return;
  const etarioDisponible = CUR==='13108';
  document.getElementById('mkpTabEtario').disabled = !etarioDisponible;
  const totalPob = parseInt((F.bcn.censo.p2024||'0').replace(/\./g,''),10);
  let val, sub, chartData;

  if(mkpDim==='sexo'){
    const h=parseInt(F.bcn.sexo.h2024.replace(/\./g,''),10);
    const m=parseInt(F.bcn.sexo.m2024.replace(/\./g,''),10);
    if(mkpSel===null){ val=fmt(totalPob); sub='Población total · '+F.nombre; }
    else if(mkpSel===0){ val=fmt(m); sub='Mujeres · '+(totalPob?(m/totalPob*100).toFixed(1):'—')+'% del total'; }
    else { val=fmt(h); sub='Hombres · '+(totalPob?(h/totalPob*100).toFixed(1):'—')+'% del total'; }
    chartData={type:'doughnut',labels:['Mujeres','Hombres'],data:[m,h],
      colors:[mkpSel===1?'#CBD4E1':C_KPI.gold, mkpSel===0?'#CBD4E1':C_KPI.n3]};
  } else {
    const tot = ETARIA_13108.reduce((a,e)=>a+e.v,0);
    if(mkpSel===null){ val=fmt(tot); sub='Población estimada · '+F.nombre; }
    else { const e=ETARIA_13108[mkpSel]; val=fmt(e.v); sub=e.l+' años · '+(e.v/tot*100).toFixed(1)+'% del total'; }
    chartData={type:'bar',labels:ETARIA_13108.map(e=>e.l),data:ETARIA_13108.map(e=>e.v),
      colors:ETARIA_13108.map((e,i)=> mkpSel===null||mkpSel===i ? C_KPI.gold : '#E3E8F0')};
  }

  document.getElementById('mkpVal').textContent = val;
  document.getElementById('mkpSub').textContent = sub;
  document.getElementById('mkpNote').textContent = mkpDim==='sexo'
    ? 'Fuente: BCN Reporte Comunal 2024 (Censo INE).'
    : (etarioDisponible ? 'Fuente: Censo 2024 INE, estimación por tramo.' : 'Grupo etario: dato aún no levantado para esta comuna — disponible en Independencia.');

  drawKpiChart(chartData);
}

const C_KPI = {gold:'#E8AE3C', n3:'#8593AB', brand:'#2952E3'};

function drawKpiChart(cfg){
  if(mkpChartObj){ mkpChartObj.destroy(); mkpChartObj=null; }
  const ctx=document.getElementById('mkpChart'); if(!ctx) return;
  if(cfg.type==='doughnut'){
    mkpChartObj = new Chart(ctx,{type:'doughnut',data:{labels:cfg.labels,
      datasets:[{data:cfg.data,backgroundColor:cfg.colors,borderWidth:2,borderColor:'#fff'}]},
      options:{responsive:true,maintainAspectRatio:false,cutout:'62%',
        plugins:{legend:{display:true,position:'bottom',labels:{color:'#3E4C66',boxWidth:9,boxHeight:9,font:{size:10}}},
          tooltip:{callbacks:{label:c=>c.label+': '+fmt(c.raw)}}}}});
  } else {
    mkpChartObj = new Chart(ctx,{type:'bar',data:{labels:cfg.labels,
      datasets:[{data:cfg.data,backgroundColor:cfg.colors,borderRadius:4,maxBarThickness:22}]},
      options:{responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>fmt(c.raw)+' hab.'}}},
        scales:{x:{grid:{display:false},ticks:{color:'#8593AB',font:{size:9}}},
          y:{display:false,grid:{display:false}}}}});
  }
}

function refreshKpiPanel(){
  if(CUR!=='13108' && mkpDim==='etario'){ mkpDim='sexo'; mkpSel=null;
    document.getElementById('mkpTabSexo').classList.add('on');
    document.getElementById('mkpTabEtario').classList.remove('on');
  }
  renderKpiChips(); renderKpiResultado();
}

// Se engancha a switchComuna (ya definida arriba) sin modificarla: al
// cambiar de comuna, si el panel está abierto, se refresca solo.
const __switchComunaKpiHook = switchComuna;
switchComuna = function(cod){
  __switchComunaKpiHook(cod);
  if(document.getElementById('mkpPanel').classList.contains('open')) refreshKpiPanel();
};
