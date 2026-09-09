/* ════════ NAVEGACIÓN ════════ */
function activateSection(sec){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  const el=document.getElementById('sec-'+sec); if(el) el.classList.add('active');
  renderChartsIn('sec-'+sec);
  if(sec==='simulador') initSim();
}
/* ── MAPA COMO INTERFAZ: abrir/cerrar dossier ── */
const PANEL_TITLES={gastos:'Finanzas en detalle · SINIM',ficha:'Ficha comunal · datos oficiales',cover:'Portada',resumen:'Resumen ejecutivo',debate:'Modo debate',demo:'Demografía',seguridad:'Seguridad',finanzas:'Finanzas y contratos',migracion:'Migración',elecciones:'Elecciones 2024',universo:'Universo electoral',simulador:'Simulador de votos',adversarios:'Adversarios',noelectos:'No electos',pavp:'PAVP / Becerra',territorial:'Mapa territorial',discapacidad:'Discapacidad',calles:'Calles críticas',servicios:'Servicios municipales',perfil:'Perfil candidato',psicologia:'Mentalidad cangrejo',ruta:'Hoja de ruta',legal:'Requisitos legales',auditoria:'Auditoría de datos',fuentes:'Fuentes'};
function openPanel(sec){
  activateSection(sec);
  const t=document.getElementById('panelTitle'); if(t) t.textContent=PANEL_TITLES[sec]||'Dossier';
  document.body.classList.add('panel-open');
  const m=document.querySelector('.main'); if(m) m.scrollTop=0;
  closeArchivo();
}
function closePanel(){ document.body.classList.remove('panel-open'); }
function toggleArchivo(){ document.getElementById('archivo').classList.toggle('open'); }
function closeArchivo(){ document.getElementById('archivo').classList.remove('open'); }
let curLayer='todo';
const LAYER_TINT={electoral:'rgba(232,174,60,.5)',seguridad:'rgba(255,90,77,.5)',servicios:'rgba(63,211,126,.45)',contratos:'rgba(242,206,132,.5)',territorio:'rgba(159,172,169,.4)',demografia:'rgba(127,227,172,.45)',parques:'rgba(63,211,126,.45)',deporte:'rgba(127,227,172,.42)',edificios:'rgba(180,165,120,.30)'};
function setLayer(l){
  curLayer=l;
  document.querySelectorAll('.lchip').forEach(c=>c.classList.toggle('active',c.dataset.layer===l));
  document.querySelectorAll('.mk').forEach(m=>{
    const ml=m.getAttribute('data-layer');
    const match = (l==='todo')||(ml===l);
    m.classList.toggle('dim', !match);
    m.classList.toggle('hot', l!=='todo' && match);
  });
  const parks=document.getElementById('parks'), canchas=document.getElementById('canchas');
  if(parks){ parks.classList.toggle('emph', l==='parques'); parks.classList.toggle('dimL', l!=='todo' && l!=='parques'); }
  if(canchas){ canchas.classList.toggle('emph', l==='deporte'); canchas.classList.toggle('dimL', l!=='todo' && l!=='deporte'); }
  const mg=document.getElementById('mapg'); if(mg) mg.classList.toggle('emph-bldg', l==='edificios');
  const tint=document.getElementById('mapTint');
  if(l==='todo'){ tint.classList.remove('on'); }
  else { tint.style.setProperty('--tint',LAYER_TINT[l]||'transparent'); tint.classList.add('on'); }
}

/* ── PAN + ZOOM del mapa ── */
let mScale=1, mX=0, mY=0, dragging=false, moved=false, sx=0, sy=0, ox=0, oy=0;
function applyMap(){ const g=document.getElementById('mapg'); if(g) g.setAttribute('transform',`translate(${mX} ${mY}) scale(${mScale})`); }
function mapZoom(f){
  const ns=Math.min(3,Math.max(0.6,mScale*f));
  const cx=399, cy=480;
  mX = cx - (cx - mX)*(ns/mScale);
  mY = cy - (cy - mY)*(ns/mScale);
  mScale=ns;
  const g=document.getElementById('mapg'); if(g){g.classList.add('zoom-anim'); applyMap(); setTimeout(()=>g.classList.remove('zoom-anim'),300);}
}
function mapReset(){ mScale=1; mX=0; mY=0; const g=document.getElementById('mapg'); if(g){g.classList.add('zoom-anim'); applyMap(); setTimeout(()=>g.classList.remove('zoom-anim'),380);} }
(function initMapInteractions(){
  const svg=document.getElementById('mapsvg'); if(!svg) return;
  const pop=document.getElementById('mapPop');
  function ptInSvg(e){ const r=svg.getBoundingClientRect(); return {vx:(e.clientX-r.left)/r.width*PROJ.W, vy:(e.clientY-r.top)/r.height*PROJ.H, r}; }
  // multi-pointer: 1 dedo = pan; 2 dedos = pinch zoom
  const ptrs=new Map(); let dragStart=null, captured=false;
  let pinching=false, pinchD0=0, pinchS0=1, pinchMX=0, pinchMY=0;
  svg.addEventListener('pointerdown',e=>{
    ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
    moved=false;
    if(ptrs.size===1){ dragging=true; dragStart={x:e.clientX,y:e.clientY,mX:mX,mY:mY}; svg.classList.add('grabbing'); }
    else if(ptrs.size===2){ dragging=false; pinching=true; const a=[...ptrs.values()]; pinchD0=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y); pinchS0=mScale; pinchMX=mX; pinchMY=mY; svg.classList.remove('grabbing'); }
  });
  svg.addEventListener('pointermove',e=>{
    if(!ptrs.has(e.pointerId)) return;
    ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pinching && ptrs.size===2){
      const a=[...ptrs.values()]; const d=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);
      if(pinchD0<10) return;
      const ns=Math.min(3,Math.max(0.6, pinchS0*(d/pinchD0)));
      const cx=(a[0].x+a[1].x)/2, cy=(a[0].y+a[1].y)/2;
      const r=svg.getBoundingClientRect();
      const vx=(cx-r.left)/r.width*PROJ.W, vy=(cy-r.top)/r.height*PROJ.H;
      mX = vx - (vx - pinchMX)*(ns/pinchS0);
      mY = vy - (vy - pinchMY)*(ns/pinchS0);
      mScale=ns; applyMap(); moved=true;
    } else if(dragging && dragStart){
      const dx=e.clientX-dragStart.x, dy=e.clientY-dragStart.y;
      if(!moved && Math.abs(dx)+Math.abs(dy)>4){ moved=true; try{svg.setPointerCapture(e.pointerId);captured=true;}catch(_){} }
      if(moved){ const r=svg.getBoundingClientRect(); mX=dragStart.mX+dx/r.width*PROJ.W; mY=dragStart.mY+dy/r.height*PROJ.H; applyMap(); }
    }
  });
  svg.addEventListener('pointerup',e=>{
    ptrs.delete(e.pointerId);
    if(captured){try{svg.releasePointerCapture(e.pointerId);}catch(_){} captured=false;}
    if(ptrs.size<2) pinching=false;
    if(ptrs.size===0){
      dragging=false; svg.classList.remove('grabbing');
      if(document.body.classList.contains('terr-add')&&!moved&&!e.target.closest('.mk')&&!e.target.closest('.pin')){
        const r=svg.getBoundingClientRect(); const vx=(e.clientX-r.left)/r.width*PROJ.W, vy=(e.clientY-r.top)/r.height*PROJ.H;
        const mx=(vx-mX)/mScale, my=(vy-mY)/mScale; addPin(mx,my,currentCat);
      }
      setTimeout(()=>{moved=false;},50);
    }
  });
  svg.addEventListener('pointercancel',e=>{ ptrs.delete(e.pointerId); if(ptrs.size<2) pinching=false; if(ptrs.size===0){dragging=false; svg.classList.remove('grabbing');} });
  svg.addEventListener('wheel',e=>{
    e.preventDefault();
    const {vx,vy}=ptInSvg(e);
    const f=e.deltaY<0?1.12:0.89;
    const ns=Math.min(3,Math.max(0.6,mScale*f));
    mX = vx - (vx - mX)*(ns/mScale);
    mY = vy - (vy - mY)*(ns/mScale);
    mScale=ns; applyMap();
  },{passive:false});
  // popovers en hover
  document.querySelectorAll('.mk').forEach(mk=>{
    mk.addEventListener('pointerenter',e=>{
      if(dragging) return;
      const tip=mk.getAttribute('data-tip')||''; const parts=tip.split('|');
      pop.innerHTML='<span class="pop-t">'+(parts[0]||'')+'</span>'+(parts[1]||'')+'<span class="pop-go">clic para abrir el dossier →</span>';
      pop.style.display='block';
    });
    mk.addEventListener('pointermove',e=>{
      const host=document.getElementById('mapview').getBoundingClientRect();
      let x=e.clientX-host.left+16, y=e.clientY-host.top+16;
      if(x+310>host.width) x=e.clientX-host.left-310;
      if(y+150>host.height) y=e.clientY-host.top-150;
      pop.style.left=x+'px'; pop.style.top=y+'px';
    });
    mk.addEventListener('pointerleave',()=>{ pop.style.display='none'; });
  });
})();
function mkClick(sec){ if(!sec||!PANEL_TITLES[sec]){return;}  if(moved) return; openPanel(sec); }

