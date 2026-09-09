/* ════════ DEBATE · MODO PRÁCTICA ════════ */
let practiceOn=false, fcOrder=[], fcIdx=0, fcRevealed=false;
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function togglePractice(){
  practiceOn=!practiceOn;
  const btn=document.getElementById('practiceBtn');
  document.getElementById('flashcardArea').style.display=practiceOn?'block':'none';
  document.getElementById('debateCards').style.display=practiceOn?'none':'block';
  if(practiceOn){btn.textContent='■ Salir de práctica';btn.classList.add('on');
    fcOrder=shuffle([...Array(debates.length).keys()]);fcIdx=0;fcRevealed=false;renderFlashcard();}
  else{btn.textContent='▶ Modo práctica · tarjetas al azar';btn.classList.remove('on');}
}
function renderFlashcard(){
  const d=debates[fcOrder[fcIdx]];
  document.getElementById('flashcardArea').innerHTML=`
    <div class="flashcard">
      <div class="fc-counter">Tarjeta ${fcIdx+1} de ${debates.length} · al azar</div>
      <div class="fc-attack">${d[0]}</div>
      ${fcRevealed?`<div class="fc-response"><strong style="color:var(--green-l)">Respuesta modelo:</strong> ${d[1]}</div>`:'<div class="fc-counter" style="color:var(--muted)">Piensa tu respuesta… luego revélala</div>'}
      <div class="fc-controls">
        ${fcRevealed?'':'<button class="primary" onclick="revealFlash()">Mostrar respuesta</button>'}
        <button onclick="nextFlash()">Siguiente ataque →</button>
      </div>
    </div>`;
}
function revealFlash(){fcRevealed=true;renderFlashcard();}
function nextFlash(){fcIdx=(fcIdx+1)%debates.length;if(fcIdx===0)fcOrder=shuffle([...Array(debates.length).keys()]);fcRevealed=false;renderFlashcard();}


