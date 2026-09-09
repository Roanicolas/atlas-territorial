/* ═══════════ PASO L: 24 MÓDULOS EN TODAS LAS COMUNAS ═══════════ */
const MOD_LABELS={cover:'Portada',resumen:'Resumen Ejecutivo',debate:'Modo Debate',demo:'Demografía',seguridad:'Seguridad',finanzas:'Finanzas y Contratos',gastos:'Finanzas en detalle · SINIM',migracion:'Migración',elecciones:'Elecciones 2024',universo:'Universo Electoral',simulador:'Simulador de Votos',adversarios:'Adversarios',noelectos:'No Electos',pavp:'PAVP / Becerra',territorial:'Territorio',discapacidad:'Discapacidad',calles:'Calles Críticas',servicios:'Servicios Muni.',perfil:'Perfil Candidato',psicologia:'Mentalidad Cangrejo',ruta:'Hoja de Ruta',legal:'Requisitos Legales',auditoria:'Auditoría de Datos',fuentes:'Fuentes'};
const MOD_AUTO=['cover','demo','seguridad','migracion','elecciones','universo','territorial','finanzas','fuentes','legal','gastos','ficha'];
const MOD_ORDER=[['Apertura',['cover','resumen','debate']],['La Comuna',['demo','seguridad','finanzas','gastos','migracion','territorial']],['Electoral',['elecciones','universo','simulador','adversarios','noelectos','pavp']],['Propuestas',['discapacidad','calles','servicios']],['Estrategia',['perfil','psicologia','ruta','legal']],['Referencias',['auditoria','fuentes']]];
const MOD_SCOPE={resumen:'Síntesis narrativa de la campaña: 3 KPIs de contexto, mensaje central, foco territorial, oportunidad electoral y 5 hallazgos priorizados.',debate:'Preguntas-tipo de campaña con posición sugerida, evidencia comunal y 3 ángulos de respuesta (agresivo · empático · técnico).',simulador:'Modelo de votos por mesa/local con supuestos ajustables: piso duro, techo posible, elasticidad por segmento y coste marginal por voto.',adversarios:'Perfil de contrincantes: trayectoria, resultados históricos, redes de apoyo, vulnerabilidades públicas.',noelectos:'Análisis de votos no electos (concejales y alcaldes derrotados): base movilizable y sus canales.',pavp:'Programa de Ayuda a Vecinos en Problemas (o equivalente local): mapeo de beneficiarios y actores clave.',discapacidad:'Diagnóstico y propuesta: registro RSH de personas con discapacidad, oferta municipal actual y brechas.',calles:'Levantamiento territorial de calles críticas: seguridad, luminarias, veredas, denuncias y transitabilidad.',servicios:'Servicios municipales: cobertura, tiempo de respuesta, satisfacción y auditoría de contratos vigentes.',perfil:'Perfil ideal del candidato/a: fit con el electorado local, atributos, riesgos, líneas narrativas.',psicologia:'Actitud electoral local (\'Mentalidad Cangrejo\' u otra): sesgos, resistencias, palancas de movilización.',ruta:'Hoja de ruta operacional 24 meses: hitos, entregables, presupuesto por fase.',auditoria:'Metodología, versionado, fuentes primarias, controles de calidad y bitácora de cambios del dossier.'};

// dosList relleno por comuna con badges
function buildDosList(){
  const cur=CUR; const isIndep=cur==='13108';
  const html=MOD_ORDER.map(([cat,secs])=>('<div class="dos-cat">'+cat+'</div>'+
    secs.map(sec=>{
      const isAuto=MOD_AUTO.indexOf(sec)>=0;
      const badge=isIndep?'':('<span class="dos-badge '+(isAuto?'dos-auto':'dos-pen')+'">'+(isAuto?'auto':'por levantar')+'</span>');
      const ix=(sec==='gastos')?'24':(sec==='ficha')?'★':'';
      return '<button class="dos-item" onclick="openPanel(\''+sec+'\')"><span class="ix">'+ix+'</span><span class="dt">'+MOD_LABELS[sec]+'</span>'+badge+'<svg viewBox="0 0 16 16" width="14" height="14"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';
    }).join(''))).join('');
  const list=document.getElementById('dosList'); if(isIndep)return; if(list)list.innerHTML=(isIndep?'':'<button class="dos-item" onclick="openPanel(\'ficha\')"><span class="ix">★</span><span class="dt">Ficha comunal · INE / Servel / BCN</span><svg viewBox="0 0 16 16" width="14" height="14"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></button>')+html;
  const emp=document.getElementById('dosEmpty'); if(emp)emp.style.display='none';
  const dl=document.getElementById('dosList'); if(dl)dl.style.display='';
}

// ── Renderers auto por comuna ──
function _kpi(v,l,src){return '<div class="card"><div class="kpi-val">'+v+'</div><div class="kpi-label">'+l+'</div><div class="kpi-src">'+src+'</div></div>';}
function _srcBcn(cod){return '<div class="src">Reporte BCN · <a class="pnl-a" target="_blank" rel="noopener" href="https://www.bcn.cl/siit/reportescomunales/comunas_v.html?idcom='+cod+'">idcom='+cod+' ↗</a></div>';}

function renderCover(cod){var F=FICHAS[cod],b=F.bcn,alc=(F.servel&&F.servel.alcalde)||b.alcalde_bcn;
  return '<div class="cover"><div class="cover-tag">Atlas Territorial · Dossier</div>'+
   '<h1 class="cover-h1">'+F.nombre+' <em>en cifras</em></h1>'+
   '<p class="cover-deck">Consolidado desde INE Censo 2024, Servel Padrón Definitivo oct-2024, CASEN 2022, SINIM y CEAD. Fuentes primarias verificadas.</p>'+
   '<div class="cover-stats">'+
   '<div><div class="cs-lbl">Población</div><div class="cs-val">'+b.censo.p2024+'</div></div>'+
   '<div><div class="cs-lbl">Padrón 2024</div><div class="cs-val">'+b.padron2024.inscritos+'</div></div>'+
   '<div><div class="cs-lbl">Alcalde</div><div class="cs-val">'+alc+'</div></div>'+
   '<div><div class="cs-lbl">Superficie</div><div class="cs-val">'+b.superficie+'</div></div>'+
   '</div></div>';}

function renderDemo(cod){var F=FICHAS[cod],b=F.bcn,c=b.censo,sx=b.sexo,ix=b.indices;
  return '<div class="sec-header"><div class="sec-eyebrow">Módulo 4 · Demografía</div><h1 class="sec-title">'+F.nombre+', <em>quiénes viven aquí</em></h1><p class="sec-deck">Censo INE 2017 vs. 2024. Cifras oficiales publicadas 27-mar-2025.</p></div>'+
   '<div class="grid g3">'+_kpi(c.p2024,'Población 2024','INE Censo')+_kpi(c.var_pct+'%','Variación 2017→2024','INE Censo')+_kpi(F.dens.toLocaleString('es-CL'),'Densidad (hab/km²)*','Cálculo propio')+'</div>'+
   '<div class="card"><div class="card-eyebrow">Composición</div><table><tr><th></th><th>2017</th><th>2024</th></tr>'+
   '<tr><td>Población total</td><td>'+c.p2017+'</td><td style="color:#fff;font-weight:600">'+c.p2024+'</td></tr>'+
   '<tr><td>Hombres 2024</td><td>—</td><td>'+sx.h2024+'</td></tr>'+
   '<tr><td>Mujeres 2024</td><td>—</td><td>'+sx.m2024+'</td></tr>'+
   '<tr><td>Índice de masculinidad</td><td>—</td><td>'+sx.im2024+'</td></tr>'+
   '<tr><td>Índice de dependencia</td><td>—</td><td>'+ix.idd2024+'</td></tr>'+
   '<tr><td>Índice de adultos mayores</td><td>—</td><td>'+ix.iam2024+'</td></tr>'+
   '</table>'+_srcBcn(cod)+'</div>';}

function renderMigracion(cod){var F=FICHAS[cod],b=F.bcn,ex=b.extranjeros_censo,ee=b.electores_extranjeros;
  return '<div class="sec-header"><div class="sec-eyebrow">Módulo 8 · Migración</div><h1 class="sec-title">Nacidos fuera del país en '+F.nombre+'</h1><p class="sec-deck">Censo INE 2024 (nacidos fuera del país) y Servel (electores extranjeros habilitados oct-2024).</p></div>'+
   '<div class="grid g2">'+_kpi(ex.pct+'%','Nacidos fuera del país','INE Censo 2024')+_kpi(ee.pct+'%','Electores extranjeros / padrón','Servel oct-2024')+'</div>'+
   '<div class="card"><div class="card-eyebrow">Cifras absolutas</div>'+
   '<div style="font-size:14px;line-height:1.8;color:var(--pnl-text2)">'+
   '<b style="color:#fff">'+ex.nacidos_fuera+'</b> personas nacidas fuera del país (de '+ex.censada+' censadas)<br>'+
   '<b style="color:#fff">'+ee.n+'</b> electores extranjeros habilitados (de '+b.padron2024.inscritos+' del padrón)</div>'+_srcBcn(cod)+'</div>';}

function renderSeguridad(cod){var F=FICHAS[cod],b=F.bcn,cv=b.cead_violentos,vf=b.cead_vif;
  var parse=t=>parseFloat(String(t).replace(/\./g,'').replace(',','.'));
  var trend=parse(cv.t2024)>parse(cv.t2022)?'↑ al alza':'↓ a la baja';
  var tag=parse(cv.t2024)>parse(cv.t2022)?'tag-r':'tag-g';
  return '<div class="sec-header"><div class="sec-eyebrow">Módulo 5 · Seguridad</div><h1 class="sec-title">Delitos de mayor connotación en '+F.nombre+'</h1><p class="sec-deck">CEAD — Subsecretaría de Prevención del Delito. Tasas por cada 100.000 habitantes.</p></div>'+
   '<div class="grid g2">'+_kpi(cv.t2024+' <span class="tag '+tag+'">'+trend+'</span>','Delitos violentos 2024 (tasa)','CEAD')+_kpi(vf.t2024,'Violencia intrafamiliar 2024 (tasa)','CEAD')+'</div>'+
   '<div class="card"><div class="card-eyebrow">Serie 2022–2024</div><table><tr><th></th><th>2022</th><th>2023</th><th>2024</th></tr>'+
   '<tr><td>Delitos violentos (tasa)</td><td>'+cv.t2022+'</td><td>'+cv.t2023+'</td><td style="color:#fff;font-weight:600">'+cv.t2024+'</td></tr>'+
   '<tr><td>VIF 2024 (tasa)</td><td>—</td><td>—</td><td>'+vf.t2024+'</td></tr>'+
   '</table>'+_srcBcn(cod)+'</div>';}

function renderElecciones(cod){var F=FICHAS[cod],b=F.bcn,S=F.servel;
  var alcHtml='';
  if(S&&S.alcalde){
    var seg=S.segundo?(' · 2º lugar: <b style="color:#fff">'+S.segundo.nombre+'</b> ('+S.segundo.partido+') '+String(S.segundo.pct_prensa).replace('.',',')+'%'):'';
    alcHtml='<div class="card"><div class="card-eyebrow">Resultado alcalde 2024</div><div class="num">'+S.alcalde+' <span class="tag tag-g">'+S.partido+' · '+String(S.pct).replace('.',',')+'%</span></div><div style="margin-top:8px;font-size:13px;color:var(--pnl-text2)">'+Number(S.votos_validos_comuna).toLocaleString('es-CL')+' votos válidos de alcalde'+seg+'</div><div style="margin-top:8px"><span class="tag tag-y">Provisorio · sujeto a Tricel</span></div><div class="src">Servel (99,99% mesas) vía Meganoticias/Pauta/DF</div></div>';
  }else if(cod==='13108'){
    alcHtml='<div class="card"><div class="card-eyebrow">Resultado alcalde 2024</div><div class="num">Agustín Iglesias <span class="tag tag-g">45,09%</span></div><div style="margin-top:8px;font-size:13px;color:var(--pnl-text2)">25.846 de 57.319 votos válidos de alcalde · ver módulos electorales del dossier</div></div>';
  }
  return '<div class="sec-header"><div class="sec-eyebrow">Módulo 9 · Elecciones 2024</div><h1 class="sec-title">Elección municipal en '+F.nombre+'</h1><p class="sec-deck">Servel — Elecciones Municipales 26–27 oct 2024, escrutinio 99,99%, provisorio sujeto a calificación del Tricel.</p></div>'+alcHtml+
   '<div class="card"><div class="card-eyebrow">Padrón y participación</div><table><tr><th></th><th>2024</th></tr>'+
   '<tr><td>Mesas receptoras</td><td style="color:#fff;font-weight:600">'+b.padron2024.mesas+'</td></tr>'+
   '<tr><td>Inscritos</td><td style="color:#fff;font-weight:600">'+b.padron2024.inscritos+'</td></tr>'+
   '<tr><td>Votantes</td><td>'+b.padron2024.votacion+'</td></tr>'+
   '<tr><td>Participación</td><td style="color:#fff;font-weight:600">'+b.padron2024.participacion_pct+'%</td></tr>'+
   '</table>'+_srcBcn(cod)+'</div>';}

function renderUniverso(cod){var F=FICHAS[cod],b=F.bcn,p=b.padron2024,ee=b.electores_extranjeros;
  return '<div class="sec-header"><div class="sec-eyebrow">Módulo 10 · Universo Electoral</div><h1 class="sec-title">Padrón definitivo de '+F.nombre+'</h1><p class="sec-deck">Servel — Padrón Definitivo Elecciones 2024 (oct-2024). Estructura del electorado que decide.</p></div>'+
   '<div class="grid g3">'+_kpi(p.inscritos,'Inscritos','Servel')+_kpi(p.mesas,'Mesas receptoras','Servel')+_kpi(p.participacion_pct+'%','Participación 2024','Servel')+'</div>'+
   '<div class="card"><div class="card-eyebrow">Electores extranjeros</div><div class="num">'+ee.n+' <span class="tag tag-y">'+ee.pct+'% del padrón</span></div><div style="margin-top:8px;font-size:13px;color:var(--pnl-text2)">Peso electoral del voto extranjero sobre el padrón total de '+F.nombre+'.</div>'+_srcBcn(cod)+'</div>';}

function renderTerritorial(cod){var F=FICHAS[cod],b=F.bcn;
  return '<div class="sec-header"><div class="sec-eyebrow">Módulo 15 · Territorio</div><h1 class="sec-title">'+F.nombre+' · datos territoriales</h1><p class="sec-deck">BCN Reporte Comunal 2025 (superficie oficial). Densidad = cálculo propio (población censada / superficie).</p></div>'+
   '<div class="grid g3">'+_kpi(b.superficie,'Superficie','BCN')+_kpi(F.dens.toLocaleString('es-CL'),'Densidad (hab/km²)*','Cálculo propio')+_kpi(b.concejales,'Concejales','BCN')+'</div>'+
   '<div class="card"><div class="card-eyebrow">Ubicación institucional</div><div style="font-size:13px;line-height:1.7;color:var(--pnl-text2)">'+b.distrito+'<br>Alcalde: <b style="color:#fff">'+b.alcalde_bcn+'</b></div>'+_srcBcn(cod)+'</div>';}

function renderFinanzasGen(cod){var F=FICHAS[cod],b=F.bcn,si=b.sinim_ingresos_M,fc=b.fcm_relacion_pct;
  var parse=t=>parseFloat(String(t).replace(/\./g,'').replace(',','.'));
  var rol=parse(fc.a2024)>100?'aportante neto':'receptor neto';
  return '<div class="sec-header"><div class="sec-eyebrow">Módulo 6 · Finanzas y Contratos</div><h1 class="sec-title">Salud financiera de '+F.nombre+'</h1><p class="sec-deck">SINIM/SUBDERE vía BCN. Para el detalle peso a peso, ver módulo 24 (Finanzas en detalle · SINIM).</p></div>'+
   '<div class="grid g3">'+_kpi(si.a2024,'Ingreso total 2024 (M$)','SINIM')+_kpi(fc.a2024+'%','Relación aporte/recepción FCM','SINIM')+_kpi(rol,'Rol frente al FCM 2024','Cálculo propio')+'</div>'+
   '<div class="card"><div class="card-eyebrow">Serie 2022–2024 (M$)</div><table><tr><th></th><th>2022</th><th>2023</th><th>2024</th></tr>'+
   '<tr><td>Ingreso total percibido</td><td>'+si.a2022+'</td><td>'+si.a2023+'</td><td style="color:#fff;font-weight:600">'+si.a2024+'</td></tr>'+
   '</table><div style="margin-top:10px"><a class="pnl-a" href="javascript:void 0" onclick="openPanel(\'gastos\')">Ver detalle SINIM completo (6.1 ingresos · 6.2 distribución · 6.3 gastos) →</a></div>'+_srcBcn(cod)+'</div>';}

function renderLegal(cod){var F=FICHAS[cod];
  return '<div class="sec-header"><div class="sec-eyebrow">Módulo 22 · Requisitos Legales</div><h1 class="sec-title">Candidatura a alcalde de '+F.nombre+'</h1><p class="sec-deck">Marco legal general (LOC Municipalidades y Ley 18.700). Aplica igual para las 345 comunas de Chile.</p></div>'+
   '<div class="card"><div class="card-eyebrow">Requisitos (LOC art. 73 y Ley 18.695)</div>'+
   '<div style="font-size:13px;line-height:1.85;color:var(--pnl-text2)">'+
   '• Ser ciudadano con derecho a sufragio<br>'+
   '• Saber leer y escribir<br>'+
   '• Tener residencia en la Región respectiva por al menos los últimos dos años anteriores a la elección<br>'+
   '• Situación militar al día<br>'+
   '• No estar afecto a inhabilidades del art. 74 de la LOC (funcionarios municipales, contratistas, deudores de la Municipalidad, etc.)</div></div>'+
   '<div class="card"><div class="card-eyebrow">Plazos electorales tipo</div>'+
   '<div style="font-size:13px;line-height:1.7;color:var(--pnl-text2)">Inscripción de candidaturas: 120 días antes de la elección. Cierre de campaña: 3 días antes. Franja: define Servel/CNTV. Rendición electoral: 30 días después.</div>'+
   '<div class="src">Ley 18.695 LOC de Municipalidades · Ley 18.700 · Servel</div></div>';}

function renderFuentesGen(cod){var F=FICHAS[cod];
  var LKS=[['bcn.cl','Reporte Comunal BCN 2025 · '+F.nombre,'https://www.bcn.cl/siit/reportescomunales/comunas_v.html?idcom='+cod],
   ['ine.gob.cl','INE · Censo 2024 resultados','https://censo2024.ine.gob.cl/resultados/'],
   ['servel.cl','Servel · Elecciones y padrón','https://www.servel.cl'],
   ['sinim.gov.cl','SINIM · Finanzas municipales','https://datos.sinim.gov.cl'],
   ['cead.spd.gov.cl','CEAD · Estadísticas delictuales','https://cead.spd.gov.cl'],
   ['casen.ministeriodesarrollosocial.gob.cl','CASEN · Ministerio de Desarrollo Social','https://observatorio.ministeriodesarrollosocial.gob.cl/encuesta-casen']];
  return '<div class="sec-header"><div class="sec-eyebrow">Módulo 24 · Fuentes</div><h1 class="sec-title">Fuentes primarias utilizadas</h1><p class="sec-deck">Todas las cifras del dossier provienen de fuentes oficiales enlazadas.</p></div>'+
   '<div class="card"><div class="fte-list">'+LKS.map(l=>'<div class="fte"><span class="fd">'+l[0]+'</span><span>'+l[1]+' · <a class="pnl-a" target="_blank" rel="noopener" href="'+l[2]+'">abrir ↗</a></span></div>').join('')+'</div></div>';}

// Placeholder rico para módulos investigativos
function renderPending(cod,sec){var F=FICHAS[cod],lab=MOD_LABELS[sec]||sec,scope=MOD_SCOPE[sec]||'Contenido de investigación específico por comuna.';
  return '<div class="sec-header"><div class="sec-eyebrow">Módulo · '+lab+'</div><h1 class="sec-title">'+lab+' de '+F.nombre+' <em>por levantar</em></h1><p class="sec-deck">Este módulo requiere trabajo de investigación específico y no puede alimentarse automáticamente desde fuentes oficiales.</p></div>'+
   '<div class="card note note-gold"><span class="note-icon">◐</span><div><b style="color:#fff;display:block;margin-bottom:6px">Alcance del levantamiento</b>'+scope+'</div></div>'+
   '<div class="card"><div class="card-eyebrow">Nota metodológica</div><div style="font-size:13px;line-height:1.6;color:var(--pnl-text2)">El estándar de calidad de este módulo se puede revisar abriéndolo en Independencia. Cada cifra investigativa debe llevar fuente primaria verificada.<br><br><a class="pnl-a" href="javascript:void 0" onclick="switchComuna(\'13108\');setTimeout(function(){openPanel(\''+sec+'\');},700)">Ver ejemplo en Independencia →</a></div></div>';}

// Dispatcher: renderer por sección o pending
function renderAuto(cod,sec){
  if(sec==='cover')return renderCover(cod);
  if(sec==='demo')return renderDemo(cod);
  if(sec==='migracion')return renderMigracion(cod);
  if(sec==='seguridad')return renderSeguridad(cod);
  if(sec==='elecciones')return renderElecciones(cod);
  if(sec==='universo')return renderUniverso(cod);
  if(sec==='territorial')return renderTerritorial(cod);
  if(sec==='finanzas')return renderFinanzasGen(cod);
  if(sec==='legal')return renderLegal(cod);
  if(sec==='fuentes')return renderFuentesGen(cod);
  return renderPending(cod,sec);
}

// Asegurar que existan divs de sección para todos los módulos (para que el activate funcione)
(function(){var wrap=document.querySelector('.main .wrap')||document.querySelector('.main');if(!wrap)return;
  const ALL=['cover','resumen','debate','demo','seguridad','finanzas','gastos','migracion','elecciones','universo','simulador','adversarios','noelectos','pavp','territorial','discapacidad','calles','servicios','perfil','psicologia','ruta','legal','auditoria','fuentes','ficha'];
  ALL.forEach(sec=>{if(!document.getElementById('sec-'+sec)){var d=document.createElement('div');d.className='section';d.id='sec-'+sec;wrap.appendChild(d);}});
})();

// Titles map: garantizar que openPanel abra cualquier módulo
Object.keys(MOD_LABELS).forEach(k=>{if(!PANEL_TITLES[k])PANEL_TITLES[k]=MOD_LABELS[k];});

// Guard para hooks específicos de Independencia (initSim busca IDs estáticos)
var __initSim=typeof initSim==='function'?initSim:null;
if(__initSim)initSim=function(){if(CUR==='13108')return __initSim.apply(this,arguments);};

// Wrap openPanel: para no-Indep, renderizar dinámicamente ANTES de activar
var __openPanelL=openPanel;
openPanel=function(sec){
  if(CUR!=='13108' && sec!=='ficha' && sec!=='gastos'){
    var el=document.getElementById('sec-'+sec); if(el)el.innerHTML=renderAuto(CUR,sec);
  }
  __openPanelL(sec);
};

// buildDosList al cambiar comuna
var __switchL=switchComuna;
switchComuna=function(cod){__switchL(cod); if(document.getElementById('dosList'))buildDosList();};
buildDosList();
