let CUR='13108';
COMUNAS['13108'].svg=document.getElementById('mapsvg').innerHTML;
if(!localStorage.getItem('atlas.pins.13108')&&localStorage.getItem('indep2028.pins')){try{localStorage.setItem('atlas.pins.13108',localStorage.getItem('indep2028.pins'));}catch(e){}}
function rebuildSearch(){SEARCH_ALL=(CUR==='13108'?searchIndex.map(i=>({cat:i.cat,q:i.q,text:i.text,sec:i.sec})):[]).concat(COMUNAS[CUR].search);}
function buildWsMenu(){const m=document.getElementById('wsMenu');const order=['13108'].concat(Object.keys(COMUNAS).filter(c=>c!=='13108').sort((a,b)=>COMUNAS[a].name.localeCompare(COMUNAS[b].name)));
 m.innerHTML=order.map(c=>{const C=COMUNAS[c];return '<button class="ws-item'+(c===CUR?' cur':'')+'" onclick="switchComuna(\''+c+'\')"><span>'+C.name+'</span><span class="wi-tag'+(C.hasDossier?' on':'')+'">'+(C.hasDossier?'dossier':'solo mapa')+'</span></button>';}).join('');}
function toggleWs(e){if(e)e.stopPropagation();const m=document.getElementById('wsMenu');const open=!m.classList.contains('open');if(open)buildWsMenu();m.classList.toggle('open',open);}
function closeWs(){document.getElementById('wsMenu').classList.remove('open');}
document.addEventListener('click',e=>{if(!e.target.closest('.ab-wswrap'))closeWs();});
function switchComuna(cod){
  if(!COMUNAS[cod])return; closeWs(); if(cod===CUR)return;
  CUR=cod; const C=COMUNAS[cod];
  PROJ={minLon:C.proj.minLon,maxLat:C.proj.maxLat,kx:C.proj.kx,scale:C.proj.scale,pad:C.proj.pad,W:C.proj.W,H:C.proj.H};
  const svg=document.getElementById('mapsvg');
  svg.setAttribute('viewBox','0 0 '+C.W+' '+C.H);
  svg.innerHTML=C.svg;
  mX=0;mY=0;mScale=1;applyMap();
  PINS_KEY='atlas.pins.'+cod; loadPins();
  rebuildSearch();
  document.getElementById('chipName').textContent=C.name;
  document.getElementById('chipSub').textContent=C.chipSub;
  const wn=document.getElementById('wsName'); if(wn)wn.textContent=C.name;
  document.getElementById('capasKpi').innerHTML=C.kpi;
  const ed=document.querySelector('.lchip[data-layer="edificios"]'); if(ed)ed.classList.toggle('disabled',!C.hasBldg);
  document.getElementById('dosEmpty').style.display=C.hasDossier?'none':'block';
  document.getElementById('dosList').style.display=C.hasDossier?'':'none';
  if(document.body.classList.contains('terr-add'))toggleTerrMode();
  if(document.body.classList.contains('panel-open'))closePanel();
  setLayer('todo'); closePinMenu(); if(typeof closePinEditor==='function')closePinEditor();
  showToast(C.name+' · mapa cargado','#2952E3');
}
const __setLayerB=setLayer;
setLayer=function(l){ if(l==='edificios'&&!COMUNAS[CUR].hasBldg){showToast('Sin datos de edificaciones para esta comuna','#D97706');return;} __setLayerB(l); };


