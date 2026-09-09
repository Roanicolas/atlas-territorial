/* ════════ COUNT-UP ════════ */
function countUp(el,target,dur=650){
  const start=parseInt(el.dataset.cur||'0',10), t0=performance.now();
  function step(t){const p=Math.min(1,(t-t0)/dur);
    const val=Math.round(start+(target-start)*(1-Math.pow(1-p,3)));
    el.textContent=fmt(val);
    if(p<1)requestAnimationFrame(step); else el.dataset.cur=target;}
  requestAnimationFrame(step);
}

