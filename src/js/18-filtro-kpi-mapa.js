/* ═══════════ FILTRO KPI DEL MAPA · 6 dimensiones ═══════════ */
// Cada compute(F,sel) usa exclusivamente campos ya presentes en FICHAS
// (BCN/Censo/CASEN/CEAD/SINIM/Servel), sin cruces ni estimaciones nuevas.
const GOLD_KPI='#E8AE3C', GRAY_KPI='#E3E8F0';
const clNum = s => typeof s==='number' ? s : parseFloat(String(s).replace(/\./g,'').replace(',','.'));
const fmtInt = n => Math.round(n).toLocaleString('es-CL');
const fmtPct = n => n.toLocaleString('es-CL',{minimumFractionDigits:1,maximumFractionDigits:1})+'%';
const dchart = (labels,data,hi) => ({type:'doughnut',labels,data,colors:data.map((_,i)=>hi===-1||hi===i?GOLD_KPI:GRAY_KPI)});
const bchart = (labels,data,hi) => ({type:'bar',labels,data,colors:data.map((_,i)=>hi===-1||hi===i?GOLD_KPI:GRAY_KPI)});

const NOTE_CENSO='Fuente: BCN Reporte Comunal 2024 (Censo INE).';

const KPI_DEFS = {
  sexo:{
    label:'Sexo', chips:['Todos','Mujeres','Hombres'],
    compute(F,sel){
      const h=clNum(F.bcn.sexo.h2024), m=clNum(F.bcn.sexo.m2024), tot=h+m;
      if(sel===1) return {value:fmtInt(m), sub:'Mujeres · '+fmtPct(m/tot*100)+' del total', chart:dchart(['Mujeres','Hombres'],[m,h],0), note:NOTE_CENSO};
      if(sel===2) return {value:fmtInt(h), sub:'Hombres · '+fmtPct(h/tot*100)+' del total', chart:dchart(['Mujeres','Hombres'],[m,h],1), note:NOTE_CENSO};
      return {value:fmtInt(tot), sub:'Población total · '+F.nombre, chart:dchart(['Mujeres','Hombres'],[m,h],-1), note:NOTE_CENSO};
    }
  },
  extranjeria:{
    label:'Extranjería', chips:['Todos','Chilenos','Extranjeros'],
    compute(F,sel){
      const ex=F.bcn.extranjeros_censo, tot=clNum(ex.censada), fuera=clNum(ex.nacidos_fuera), cl=tot-fuera, pct=clNum(ex.pct);
      if(sel===1) return {value:fmtInt(cl), sub:'Nacidos en Chile · '+fmtPct(100-pct)+' del total', chart:dchart(['Chile','Extranjero'],[cl,fuera],0), note:'Fuente: Censo 2024 INE (nacidos fuera de Chile).'};
      if(sel===2) return {value:fmtInt(fuera), sub:'Nacidos en el extranjero · '+fmtPct(pct)+' del total', chart:dchart(['Chile','Extranjero'],[cl,fuera],1), note:'Fuente: Censo 2024 INE (nacidos fuera de Chile).'};
      return {value:fmtInt(tot), sub:'Población censada · '+F.nombre, chart:dchart(['Chile','Extranjero'],[cl,fuera],-1), note:'Fuente: Censo 2024 INE (nacidos fuera de Chile).'};
    }
  },
  pobreza:{
    label:'Pobreza', chips:['Por ingresos','Multidimensional'],
    compute(F,sel){
      const d = sel===1 ? F.bcn.pobreza_multi : F.bcn.pobreza_ingresos;
      const lbl = sel===1 ? 'Multidimensional' : 'Por ingresos';
      return {value:fmtPct(clNum(d.c2022)), sub:lbl+' · CASEN 2022 (2017: '+fmtPct(clNum(d.c2017))+')',
        chart:bchart(['2017','2022'],[clNum(d.c2017),clNum(d.c2022)],1),
        note:'Fuente: CASEN 2017 y 2022 (encuesta muestral, no censal).'};
    }
  },
  seguridad:{
    label:'Seguridad (CEAD)', chips:['Delitos violentos','Violencia intrafamiliar'],
    compute(F,sel){
      if(sel===1){
        const v=clNum(F.bcn.cead_vif.t2024);
        return {value:fmtInt(v), sub:'VIF · tasa 2024 (x100 mil hab.)', chart:bchart(['2024'],[v],0),
          note:'Fuente: CEAD. Solo hay tasa 2024 publicada para VIF en el reporte BCN.'};
      }
      const cv=F.bcn.cead_violentos, v22=clNum(cv.t2022), v23=clNum(cv.t2023), v24=clNum(cv.t2024);
      return {value:fmtInt(v24), sub:'Delitos violentos · tasa 2024 (x100 mil hab.)', chart:bchart(['2022','2023','2024'],[v22,v23,v24],2),
        note:'Fuente: CEAD, Subsecretaría de Prevención del Delito.'};
    }
  },
  ingreso:{
    label:'Ingreso municipal', chips:['Total','Propios (IPP)','FCM','Transferencias'],
    compute(F,sel){
      const keys=['total','ipp','fcm','transf'];
      const arr=F.fin[keys[sel]||'total'];
      const v22=clNum(arr[1]), v23=clNum(arr[2]), v24=clNum(arr[3]);
      const lbl=arr[0].replace(/\s*en M\$$/,'');
      return {value:fmtInt(v24)+' M$', sub:lbl+' · 2024', chart:bchart(['2022','2023','2024'],[v22,v23,v24],2),
        note:'Fuente: SINIM 2022–2024, vía BCN Reporte Comunal.'};
    }
  },
  padron:{
    label:'Padrón electoral', chips:['Inscritos','Votaron','Abstención','Ext. habilitados'],
    compute(F,sel){
      const p=F.bcn.padron2024, ee=F.bcn.electores_extranjeros;
      const insc=clNum(p.inscritos), vot=clNum(p.votacion), part=clNum(p.participacion_pct), abst=insc-vot;
      const NOTE='Fuente: Servel, Padrón Electoral 2024.';
      if(sel===1) return {value:fmtInt(vot), sub:fmtPct(part)+' de participación', chart:dchart(['Votaron','Abstención'],[vot,abst],0), note:NOTE};
      if(sel===2) return {value:fmtInt(abst), sub:fmtPct(100-part)+' de abstención', chart:dchart(['Votaron','Abstención'],[vot,abst],1), note:NOTE+' Abstención = inscritos − votos.'};
      if(sel===3){ const n=clNum(ee.n), pct=clNum(ee.pct);
        return {value:fmtInt(n), sub:fmtPct(pct)+' del padrón total', chart:dchart(['Extranjeros','Chilenos'],[n,insc-n],0), note:NOTE}; }
      return {value:fmtInt(insc), sub:'Padrón 2024 · '+F.nombre, chart:dchart(['Votaron','Abstención'],[vot,abst],-1), note:NOTE};
    }
  }
};

let mkpDim='sexo', mkpSel=0, mkpChartObj=null;

function toggleKpiPanel(){
  const p=document.getElementById('mkpPanel'), b=document.getElementById('mkpBtn');
  const open=!p.classList.contains('open');
  p.classList.toggle('open',open); b.classList.toggle('active',open);
  if(open) refreshKpiPanel();
}

function setKpiDim(dim){
  mkpDim=dim; mkpSel=0;
  renderKpiChips(); renderKpiResultado();
}

function renderKpiChips(){
  const chips=KPI_DEFS[mkpDim].chips;
  document.getElementById('mkpChips').innerHTML = chips.map((l,i)=>
    '<button class="mkp-chip'+(i===mkpSel?' on':'')+'" onclick="setKpiSel('+i+')">'+l+'</button>'
  ).join('');
}

function setKpiSel(i){ mkpSel=i; renderKpiChips(); renderKpiResultado(); }

function renderKpiResultado(){
  const F=FICHAS[CUR]; if(!F) return;
  const r = KPI_DEFS[mkpDim].compute(F, mkpSel);
  document.getElementById('mkpVal').textContent = r.value;
  document.getElementById('mkpSub').textContent = r.sub;
  document.getElementById('mkpNote').textContent = r.note;
  drawKpiChart(r.chart);
}

function drawKpiChart(cfg){
  if(mkpChartObj){ mkpChartObj.destroy(); mkpChartObj=null; }
  const ctx=document.getElementById('mkpChart'); if(!ctx) return;
  if(cfg.type==='doughnut'){
    mkpChartObj=new Chart(ctx,{type:'doughnut',data:{labels:cfg.labels,
      datasets:[{data:cfg.data,backgroundColor:cfg.colors,borderWidth:2,borderColor:'#fff'}]},
      options:{responsive:true,maintainAspectRatio:false,cutout:'62%',
        plugins:{legend:{display:true,position:'bottom',labels:{color:'#3E4C66',boxWidth:9,boxHeight:9,font:{size:10}}},
          tooltip:{callbacks:{label:c=>c.label+': '+fmtInt(c.raw)}}}}});
  } else {
    mkpChartObj=new Chart(ctx,{type:'bar',data:{labels:cfg.labels,
      datasets:[{data:cfg.data,backgroundColor:cfg.colors,borderRadius:4,maxBarThickness:34}]},
      options:{responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>fmtInt(c.raw)}}},
        scales:{x:{grid:{display:false},ticks:{color:'#8593AB',font:{size:9.5}}},
          y:{display:false,grid:{display:false}}}}});
  }
}

function refreshKpiPanel(){
  const sel=document.getElementById('mkpSelect'); if(sel) sel.value=mkpDim;
  renderKpiChips(); renderKpiResultado();
}

// Se engancha a switchComuna (ya definida arriba) sin modificarla: al
// cambiar de comuna, si el panel está abierto, se refresca solo —
// conservando la dimensión y el chip activo (las 6 comunas comparten
// exactamente los mismos campos, así que la selección sigue teniendo sentido).
const __switchComunaKpiHook = switchComuna;
switchComuna = function(cod){
  __switchComunaKpiHook(cod);
  if(document.getElementById('mkpPanel').classList.contains('open')) refreshKpiPanel();
};
