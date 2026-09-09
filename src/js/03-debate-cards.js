/* ════════ DEBATE CARDS ════════ */
const debates=[
  ['"Iglesias bajó la delincuencia un 5%"','Reconozco la baja del 5% — es un dato real. Pero parte de una base donde el 42% de los hogares fue robado y el 80% sigue sin usar el celular en la calle. Una baja del 5% sobre el 42% sigue siendo 40%. Falta una estrategia por calle, por hora, por sector, con datos públicos cada mes.'],
  ['"No tienes experiencia / fallaste en 2021"','Iglesias tenía 29 años cuando ganó — yo tengo 31. La diferencia no es la edad sino la deuda partidaria: él le debe a la UDI, yo no le debo nada a nadie. Sobre 2021: cometí errores administrativos, los reconozco. El municipio tiene $2.481M de déficit con gente "experimentada".'],
  ['"Eres muy joven, 31 años"','Iglesias tenía 29 al ganar. No es la edad — es si entiendes la comuna. La edad mediana de Independencia son 36 años. Los jóvenes son la comuna.'],
  ['"El déficit no es del alcalde actual"','Es cierto, el déficit es estructural. Pero el PLADECO no fue recepcionado por SINIM en 2025 — y eso SÍ es responsabilidad actual. Sin plan comunal vigente no hay rumbo, no hay metas, no hay rendición de cuentas.'],
  ['"¿Qué harás con la migración?"','La política migratoria la decide el gobierno nacional, no el alcalde. Lo que sí puedo hacer es garantizar que las reglas se cumplan para todos por igual — chilenos o extranjeros. Comercio formal, basura ordenada, seguridad para todos.'],
  ['"Tus propuestas son vagas"','Tres concretas: (1) IVADEC itinerante en ferias — hoy hay un solo punto para 116 mil habitantes, con tasa de 0,9%. (2) Extender horario del CCR a tardes y sábados. (3) Plan 100 Esquinas Accesibles el primer año.'],
  ['"Independiente = sin compromiso"','Le respondo a los vecinos que firmaron. No le debo nada a ningún partido — mis adversarios no pueden decir lo mismo. Si llego y no cumplo, no tengo un partido detrás que me proteja.']
];
function buildDebate(){
  document.getElementById('debateCards').innerHTML = debates.map((d,i)=>`
    <div class="debate-card">
      <div class="dc-attack" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block'">
        <div class="dc-attack-ix">${i+1}</div>
        <div><div class="dc-attack-lbl">Ataque esperable · toca para ver respuesta</div><div class="dc-attack-txt">${d[0]}</div></div>
      </div>
      <div class="dc-response" style="display:${i===0?'block':'none'}">
        <div class="dc-response-lbl">Respuesta lista</div>${d[1]}
      </div>
    </div>`).join('');
}
buildDebate();

