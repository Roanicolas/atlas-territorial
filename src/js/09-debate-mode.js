/* ════════ DEBATE MODE ════════ */
function toggleDebate(){
  document.body.classList.toggle('debate-mode');
  const btn=document.getElementById('debateToggle');
  btn.classList.toggle('active');
  if(document.body.classList.contains('debate-mode')){btn.innerHTML='⚔ Salir';openPanel('debate');}
  else{btn.innerHTML='⚔ Debate';}
}

