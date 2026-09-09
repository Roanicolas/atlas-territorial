RESUMEN COMPLETO PARA RETOMAR — Atlas Territorial (23-jul-2026)
Quién soy y preferencias
Soy Roa (Matías Roa). Estudio Derecho 4° año (nocturno) en Universidad Santo Tomás, y tengo formación previa en informática biomédica (Python, pandas, Power BI, ETL, LangChain). Trabajo desde casa en Santiago, Chile.
Preferencias fijas para nuestras conversaciones:
* Español neutro sin voseo ni chilenismos (chat y documentos)
* Sin Wikipedia como fuente — solo primarias/oficiales o especializadas
* Comunicación concisa, directa, iterativa
* No explicaciones extensas salvo que las pida
* Ejecuta sin pedir permiso a cada paso; regla activa "nada inventado"
Qué es Atlas Territorial
Plataforma HTML single-file (2.0 MB) de inteligencia territorial para partidos políticos y campañas municipales en Chile. Se abre en cualquier navegador, funciona offline salvo enlaces externos.
Comuna ancla: Independencia (elección alcalde 29-oct-2028, alcalde ficticio de referencia "Iglesias" para el ejercicio).
Comunas cubiertas (6): Independencia (13108), Recoleta (13127), Conchalí (13104), Santiago (13101), Quinta Normal (13126), Renca (13128) — todas de la RM.
Estado actual v19
Subido a GitHub:
* Repositorio: https://github.com/Roanicolas/atlas-territorial
* Sitio en vivo vía GitHub Pages: https://roanicolas.github.io/atlas-territorial/
* 12 archivos (README, LICENSE MIT con atribuciones OSM/INE/Servel/BCN/SINIM/CEAD, .gitignore, index.html, data/ con 5 JSON + README, docs/ con 2 MD)
Verificación: 139 pruebas Playwright en verde repartidas en 7 baterías (verify19 27, multi_test 13, ficha_test 11, terreno_test 9, gastos_test 18, k_test 29, l_test 32).
Los 24 módulos del dossier
Estructura de 6 categorías: Apertura · La Comuna · Electoral · Propuestas · Estrategia · Referencias.
10 módulos auto-llenables (datos oficiales para las 6 comunas):
1. Portada (cover) — nombre, población, alcalde, superficie
2. Demografía — Censo INE 2017/2024, sexo, IM, dependencia, adultos mayores
3. Migración — nacidos fuera del país (censo) + electores extranjeros (Servel)
4. Seguridad — CEAD violentos 2022-2024 + VIF con tendencia ↑/↓
5. Elecciones 2024 — alcalde electo, %, votos válidos, padrón, participación
6. Universo Electoral — padrón, mesas, participación, voto extranjero
7. Territorio — superficie, densidad, concejales, distrito
8. Finanzas y Contratos — resumen SINIM con link al módulo 24
9. Finanzas en detalle · SINIM (módulo 24) — tablas 6.1/6.2/6.3 completas
10. Legal — marco genérico LOC Municipalidades / Ley 18.700
11. Fuentes — 6 enlaces a fuentes primarias por comuna
12. Ficha comunal (★) — resumen ejecutivo con las 6 secciones
14 módulos investigativos — completos solo en Independencia; en las otras 5 comunas aparecen como placeholder "por levantar" con descripción del alcance del trabajo y link "Ver ejemplo en Independencia →":
* Resumen Ejecutivo, Modo Debate, Simulador de Votos, Adversarios, No Electos, PAVP/Becerra, Discapacidad, Calles Críticas, Servicios Muni., Perfil Candidato, Mentalidad Cangrejo, Hoja de Ruta, Auditoría de Datos
Módulo estrella: Finanzas en detalle · SINIM
Para las 6 comunas: 3 KPIs (ingreso 2024, gasto 2024, per cápita), tablas 6.1/6.2/6.3 completas 2022-2024, enlaces al reporte BCN específico de cada comuna + SINIM + INE.
Casos con impacto fiscal (solo Independencia, verificados con fuentes):
* 26-03-2025: Querella municipal por fraude en aseo (Tresur/Suat) y áreas verdes (Aromos). Perjuicio estimado $2.498 millones (~8,3% del ingreso municipal). Fuente: CIPER Chile.
* 04-07-04-2025: Contraquerella de Tresur SpA contra el alcalde por $1.118.316.197 (facturas dic-2024 a feb-2025). Fuente: CIPER + El Desconcierto.
* 05-09-2025: Informe CGR N.º 38-2025 sobre DAEM. Pagos irregulares por $201.548.920: $80.496.991 autoasignados por exjefa DAEM + ~$121M a directores. 31.885 operaciones con clave de funcionaria con licencia. Fuente: BioBío, T13, FastCheck.
CRM territorial de terreno
Cada pin del mapa es un contacto con: categoría (5 colores), nombre, teléfono, nota libre, checkbox "requiere seguimiento" (estrella dorada visible), calle de referencia auto-detectada, coordenadas lat/lon reales, timestamp creación y última actualización.
Panel Apoyos:
* Filtros sobre el mapa (chips): Todos, A, P, O, C, sin categoría, ★ Seguimiento
* Contadores vivos: total, esta semana, en seguimiento
* Lista buscable por nombre/calle/nota/teléfono, ordenada por actividad reciente
* Tocar fila → vuela al mapa + abre editor
* Botón "Mover" para reubicar contacto (recalcula calle + coordenadas)
* Exportación CSV con BOM UTF-8 y separador ; para Excel español: nombre, teléfono, categoría, seguimiento SI/NO, nota, calle_ref, lat, lon, creado, actualizado
Persistencia: localStorage por comuna (atlas.pins.<codigo>). Los contactos son privados por dispositivo — no hay backend multiusuario todavía.
Base de datos y fuentes primarias
Regla del proyecto: nada inventado; toda cifra con fuente enlazada; lo no verificado queda como "pendiente".
Archivos en data/:
* bcn_data.json (8 KB) — extracción estructurada de los reportes BCN Comunales 2025 por comuna
* datos_comunas.json (5,5 KB) — Servel oct-2024 provisorio (99,99% mesas, sujeto a Tricel)
* datos_comunas_v2.json (12 KB) — fusión que consume la app en runtime
* finanzas_detalle.json (21 KB) — tablas SINIM 6.1/6.2/6.3 completas por comuna
* geografia_por_comuna.json (66 KB) — metadatos OSM (proyección, viewBox, índice de calles)
Fuentes primarias:
* BCN Reportes Comunales 2025: bcn.cl/siit/reportescomunales/comunas_v.html?idcom=13108|13127|13104|13101|13126|13128
* INE Censo 2024: censo2024.ine.gob.cl/resultados/
* Servel: servel.cl y elecciones.servel.cl
* SINIM/SUBDERE: datos.sinim.gov.cl
* CEAD: cead.spd.gov.cl
* CASEN/RSH: observatorio.ministeriodesarrollosocial.gob.cl/encuesta-casen
* OpenStreetMap: vía Overpass API con admin_level=8 + highway + leisure
Cifras clave verificadas
Censo 2024 INE (poblaciones): Santiago 438.856 · Recoleta 154.615 (única a la baja −2,1%) · Renca 143.622 · Quinta Normal 129.351 · Conchalí 121.587 · Independencia 116.943 (+16,6%)
Independencia (correcciones al dossier original):
* Población 116.943 confirmada por Censo INE
* Padrón: 90.972 inscritos (no ~79.400)
* Nacidos fuera del país: 44,4% (51.908 personas)
* Electores extranjeros: 32,6% del padrón (29.647 personas)
* Ingreso municipal 2024: M$30.275.554 (SINIM, no ~$25.000M)
* Participación 2024: 73,2%
* Densidad: 16.706 hab/km²
Alcaldes electos 2024 provisorio (Tricel pendiente):
* Independencia: Iglesias 45,09% · 25.846/57.319 válidos
* Recoleta: Fares Jadue (PC) 35,83% · 92.413 válidos
* Conchalí: René de la Vega (IND) 34,34% · 79.829 válidos
* Santiago: Mario Desbordes (RN) 51,08% · 216.528 válidos (2° Irací Hassler PC 28,4%)
* Quinta Normal: Karina Delfino (PS) 47,53% · 70.575 válidos
* Renca: Claudio Castro (IND) 75,72% · 88.400 válidos
Ingresos municipales 2024 SINIM (M$): Santiago 212.193.218 · Renca 82.713.160 · Conchalí 55.773.594 · Quinta Normal 50.949.515 · Recoleta 45.517.650 · Independencia 30.275.554
Arquitectura técnica
Pipeline de construcción: transform19.py toma v18 y aplica pasos A-L:
* A: Reproyección de 12 marcadores + 4 contextos desde lat/lon reales
* B: Extracción de 23 módulos, 12 marcadores, 137 calles
* C: Stylesheet producto 32 KB (tokens claros marca #2952E3, drawer navy)
* D: Shell (appbar, rail, tools, statusbar, legend, toasts)
* E: JS app-layer (proyección, HUD, búsqueda, teclado)
* F: Design pass (polylines, halos, glow comunal, labels, chip identidad)
* G: Multi-comuna (registry con 6 comunas, switchComuna)
* H: Datos oficiales + Ficha comunal (BCN/INE/Servel/CASEN)
* I: Terreno PRO (CRM contactos con editor, filtros, CSV)
* J: Finanzas detalle Indep (3 casos verificados + 9 fuentes)
* K: renderGastos dinámico multi-comuna
* L: 24 módulos en las 5 comunas (10 auto + 14 placeholders)
Pendientes documentados (no inventar)
1. Concejales electos 2024 por nombre y pacto (Servel/Tricel)
2. Sentencias Tricel definitivas para pasar "provisorio" a "definitivo"
3. Habilitados exactos de Conchalí, Santiago y Quinta Normal
4. Series CEAD desagregadas por tipo de delito
5. Conciliar padrón total (BCN) con "válidos alcalde" (prensa) por comuna
6. Enlaces directos a Transparencia Activa municipal (no incluidos por no verificados)
Roadmap posible (a discutir)
* Backend multiusuario (Supabase/Firebase) para que brigadas sincronicen contactos
* Temas de color por partido político
* Modo mapa oscuro para uso nocturno
* Más comunas via pipeline gen_multi.py + fetch_one.sh Overpass
* Levantamiento investigativo de una segunda comuna al nivel de Independencia
* Relación con parques OSM (O'Higgins, Quinta Normal) como capas contextuales
* Script de refresco automático de la base de datos (curl BCN + parseo + fusión anual)
Contexto de escala
Chile censado 2024: 18.480.432 hab · Región Metropolitana: 7.400.741 · Grupo Atlas (6 comunas): 1.104.974 hab (14,9% RM).
RESUMEN COMPLETO PARA RETOMAR — Atlas Territorial (23-jul-2026)
Quién soy y preferencias
Soy Roa (Matías Roa). Estudio Derecho 4° año (nocturno) en Universidad Santo Tomás, y tengo formación previa en informática biomédica (Python, pandas, Power BI, ETL, LangChain). Trabajo desde casa en Santiago, Chile.
Preferencias fijas para nuestras conversaciones:
* Español neutro sin voseo ni chilenismos (chat y documentos)
* Sin Wikipedia como fuente — solo primarias/oficiales o especializadas
* Comunicación concisa, directa, iterativa
* No explicaciones extensas salvo que las pida
* Ejecuta sin pedir permiso a cada paso; regla activa "nada inventado"
Qué es Atlas Territorial
Plataforma HTML single-file (2.0 MB) de inteligencia territorial para partidos políticos y campañas municipales en Chile. Se abre en cualquier navegador, funciona offline salvo enlaces externos.
Comuna ancla: Independencia (elección alcalde 29-oct-2028, alcalde ficticio de referencia "Iglesias" para el ejercicio).
Comunas cubiertas (6): Independencia (13108), Recoleta (13127), Conchalí (13104), Santiago (13101), Quinta Normal (13126), Renca (13128) — todas de la RM.
Estado actual v19
Subido a GitHub:
* Repositorio: https://github.com/Roanicolas/atlas-territorial
* Sitio en vivo vía GitHub Pages: https://roanicolas.github.io/atlas-territorial/
* 12 archivos (README, LICENSE MIT con atribuciones OSM/INE/Servel/BCN/SINIM/CEAD, .gitignore, index.html, data/ con 5 JSON + README, docs/ con 2 MD)
Verificación: 139 pruebas Playwright en verde repartidas en 7 baterías (verify19 27, multi_test 13, ficha_test 11, terreno_test 9, gastos_test 18, k_test 29, l_test 32).
Los 24 módulos del dossier
Estructura de 6 categorías: Apertura · La Comuna · Electoral · Propuestas · Estrategia · Referencias.
10 módulos auto-llenables (datos oficiales para las 6 comunas):
1. Portada (cover) — nombre, población, alcalde, superficie
2. Demografía — Censo INE 2017/2024, sexo, IM, dependencia, adultos mayores
3. Migración — nacidos fuera del país (censo) + electores extranjeros (Servel)
4. Seguridad — CEAD violentos 2022-2024 + VIF con tendencia ↑/↓
5. Elecciones 2024 — alcalde electo, %, votos válidos, padrón, participación
6. Universo Electoral — padrón, mesas, participación, voto extranjero
7. Territorio — superficie, densidad, concejales, distrito
8. Finanzas y Contratos — resumen SINIM con link al módulo 24
9. Finanzas en detalle · SINIM (módulo 24) — tablas 6.1/6.2/6.3 completas
10. Legal — marco genérico LOC Municipalidades / Ley 18.700
11. Fuentes — 6 enlaces a fuentes primarias por comuna
12. Ficha comunal (★) — resumen ejecutivo con las 6 secciones
14 módulos investigativos — completos solo en Independencia; en las otras 5 comunas aparecen como placeholder "por levantar" con descripción del alcance del trabajo y link "Ver ejemplo en Independencia →":
* Resumen Ejecutivo, Modo Debate, Simulador de Votos, Adversarios, No Electos, PAVP/Becerra, Discapacidad, Calles Críticas, Servicios Muni., Perfil Candidato, Mentalidad Cangrejo, Hoja de Ruta, Auditoría de Datos
Módulo estrella: Finanzas en detalle · SINIM
Para las 6 comunas: 3 KPIs (ingreso 2024, gasto 2024, per cápita), tablas 6.1/6.2/6.3 completas 2022-2024, enlaces al reporte BCN específico de cada comuna + SINIM + INE.
Casos con impacto fiscal (solo Independencia, verificados con fuentes):
* 26-03-2025: Querella municipal por fraude en aseo (Tresur/Suat) y áreas verdes (Aromos). Perjuicio estimado $2.498 millones (~8,3% del ingreso municipal). Fuente: CIPER Chile.
* 04-07-04-2025: Contraquerella de Tresur SpA contra el alcalde por $1.118.316.197 (facturas dic-2024 a feb-2025). Fuente: CIPER + El Desconcierto.
* 05-09-2025: Informe CGR N.º 38-2025 sobre DAEM. Pagos irregulares por $201.548.920: $80.496.991 autoasignados por exjefa DAEM + ~$121M a directores. 31.885 operaciones con clave de funcionaria con licencia. Fuente: BioBío, T13, FastCheck.
CRM territorial de terreno
Cada pin del mapa es un contacto con: categoría (5 colores), nombre, teléfono, nota libre, checkbox "requiere seguimiento" (estrella dorada visible), calle de referencia auto-detectada, coordenadas lat/lon reales, timestamp creación y última actualización.
Panel Apoyos:
* Filtros sobre el mapa (chips): Todos, A, P, O, C, sin categoría, ★ Seguimiento
* Contadores vivos: total, esta semana, en seguimiento
* Lista buscable por nombre/calle/nota/teléfono, ordenada por actividad reciente
* Tocar fila → vuela al mapa + abre editor
* Botón "Mover" para reubicar contacto (recalcula calle + coordenadas)
* Exportación CSV con BOM UTF-8 y separador ; para Excel español: nombre, teléfono, categoría, seguimiento SI/NO, nota, calle_ref, lat, lon, creado, actualizado
Persistencia: localStorage por comuna (atlas.pins.<codigo>). Los contactos son privados por dispositivo — no hay backend multiusuario todavía.
Base de datos y fuentes primarias
Regla del proyecto: nada inventado; toda cifra con fuente enlazada; lo no verificado queda como "pendiente".
Archivos en data/:
* bcn_data.json (8 KB) — extracción estructurada de los reportes BCN Comunales 2025 por comuna
* datos_comunas.json (5,5 KB) — Servel oct-2024 provisorio (99,99% mesas, sujeto a Tricel)
* datos_comunas_v2.json (12 KB) — fusión que consume la app en runtime
* finanzas_detalle.json (21 KB) — tablas SINIM 6.1/6.2/6.3 completas por comuna
* geografia_por_comuna.json (66 KB) — metadatos OSM (proyección, viewBox, índice de calles)
Fuentes primarias:
* BCN Reportes Comunales 2025: bcn.cl/siit/reportescomunales/comunas_v.html?idcom=13108|13127|13104|13101|13126|13128
* INE Censo 2024: censo2024.ine.gob.cl/resultados/
* Servel: servel.cl y elecciones.servel.cl
* SINIM/SUBDERE: datos.sinim.gov.cl
* CEAD: cead.spd.gov.cl
* CASEN/RSH: observatorio.ministeriodesarrollosocial.gob.cl/encuesta-casen
* OpenStreetMap: vía Overpass API con admin_level=8 + highway + leisure
Cifras clave verificadas
Censo 2024 INE (poblaciones): Santiago 438.856 · Recoleta 154.615 (única a la baja −2,1%) · Renca 143.622 · Quinta Normal 129.351 · Conchalí 121.587 · Independencia 116.943 (+16,6%)
Independencia (correcciones al dossier original):
* Población 116.943 confirmada por Censo INE
* Padrón: 90.972 inscritos (no ~79.400)
* Nacidos fuera del país: 44,4% (51.908 personas)
* Electores extranjeros: 32,6% del padrón (29.647 personas)
* Ingreso municipal 2024: M$30.275.554 (SINIM, no ~$25.000M)
* Participación 2024: 73,2%
* Densidad: 16.706 hab/km²
Alcaldes electos 2024 provisorio (Tricel pendiente):
* Independencia: Iglesias 45,09% · 25.846/57.319 válidos
* Recoleta: Fares Jadue (PC) 35,83% · 92.413 válidos
* Conchalí: René de la Vega (IND) 34,34% · 79.829 válidos
* Santiago: Mario Desbordes (RN) 51,08% · 216.528 válidos (2° Irací Hassler PC 28,4%)
* Quinta Normal: Karina Delfino (PS) 47,53% · 70.575 válidos
* Renca: Claudio Castro (IND) 75,72% · 88.400 válidos
Ingresos municipales 2024 SINIM (M$): Santiago 212.193.218 · Renca 82.713.160 · Conchalí 55.773.594 · Quinta Normal 50.949.515 · Recoleta 45.517.650 · Independencia 30.275.554
Arquitectura técnica
Pipeline de construcción: transform19.py toma v18 y aplica pasos A-L:
* A: Reproyección de 12 marcadores + 4 contextos desde lat/lon reales
* B: Extracción de 23 módulos, 12 marcadores, 137 calles
* C: Stylesheet producto 32 KB (tokens claros marca #2952E3, drawer navy)
* D: Shell (appbar, rail, tools, statusbar, legend, toasts)
* E: JS app-layer (proyección, HUD, búsqueda, teclado)
* F: Design pass (polylines, halos, glow comunal, labels, chip identidad)
* G: Multi-comuna (registry con 6 comunas, switchComuna)
* H: Datos oficiales + Ficha comunal (BCN/INE/Servel/CASEN)
* I: Terreno PRO (CRM contactos con editor, filtros, CSV)
* J: Finanzas detalle Indep (3 casos verificados + 9 fuentes)
* K: renderGastos dinámico multi-comuna
* L: 24 módulos en las 5 comunas (10 auto + 14 placeholders)
Pendientes documentados (no inventar)
1. Concejales electos 2024 por nombre y pacto (Servel/Tricel)
2. Sentencias Tricel definitivas para pasar "provisorio" a "definitivo"
3. Habilitados exactos de Conchalí, Santiago y Quinta Normal
4. Series CEAD desagregadas por tipo de delito
5. Conciliar padrón total (BCN) con "válidos alcalde" (prensa) por comuna
6. Enlaces directos a Transparencia Activa municipal (no incluidos por no verificados)
Roadmap posible (a discutir)
* Backend multiusuario (Supabase/Firebase) para que brigadas sincronicen contactos
* Temas de color por partido político
* Modo mapa oscuro para uso nocturno
* Más comunas via pipeline gen_multi.py + fetch_one.sh Overpass
* Levantamiento investigativo de una segunda comuna al nivel de Independencia
* Relación con parques OSM (O'Higgins, Quinta Normal) como capas contextuales
* Script de refresco automático de la base de datos (curl BCN + parseo + fusión anual)
Contexto de escala
Chile censado 2024: 18.480.432 hab · Región Metropolitana: 7.400.741 · Grupo Atlas (6 comunas): 1.104.974 hab (14,9% RM).
RESUMEN COMPLETO PARA RETOMAR — Atlas Territorial (23-jul-2026)
Quién soy y preferencias
Soy Roa (Matías Roa). Estudio Derecho 4° año (nocturno) en Universidad Santo Tomás, y tengo formación previa en informática biomédica (Python, pandas, Power BI, ETL, LangChain). Trabajo desde casa en Santiago, Chile.
Preferencias fijas para nuestras conversaciones:
* Español neutro sin voseo ni chilenismos (chat y documentos)
* Sin Wikipedia como fuente — solo primarias/oficiales o especializadas
* Comunicación concisa, directa, iterativa
* No explicaciones extensas salvo que las pida
* Ejecuta sin pedir permiso a cada paso; regla activa "nada inventado"
Qué es Atlas Territorial
Plataforma HTML single-file (2.0 MB) de inteligencia territorial para partidos políticos y campañas municipales en Chile. Se abre en cualquier navegador, funciona offline salvo enlaces externos.
Comuna ancla: Independencia (elección alcalde 29-oct-2028, alcalde ficticio de referencia "Iglesias" para el ejercicio).
Comunas cubiertas (6): Independencia (13108), Recoleta (13127), Conchalí (13104), Santiago (13101), Quinta Normal (13126), Renca (13128) — todas de la RM.
Estado actual v19
Subido a GitHub:
* Repositorio: https://github.com/Roanicolas/atlas-territorial
* Sitio en vivo vía GitHub Pages: https://roanicolas.github.io/atlas-territorial/
* 12 archivos (README, LICENSE MIT con atribuciones OSM/INE/Servel/BCN/SINIM/CEAD, .gitignore, index.html, data/ con 5 JSON + README, docs/ con 2 MD)
Verificación: 139 pruebas Playwright en verde repartidas en 7 baterías (verify19 27, multi_test 13, ficha_test 11, terreno_test 9, gastos_test 18, k_test 29, l_test 32).
Los 24 módulos del dossier
Estructura de 6 categorías: Apertura · La Comuna · Electoral · Propuestas · Estrategia · Referencias.
10 módulos auto-llenables (datos oficiales para las 6 comunas):
1. Portada (cover) — nombre, población, alcalde, superficie
2. Demografía — Censo INE 2017/2024, sexo, IM, dependencia, adultos mayores
3. Migración — nacidos fuera del país (censo) + electores extranjeros (Servel)
4. Seguridad — CEAD violentos 2022-2024 + VIF con tendencia ↑/↓
5. Elecciones 2024 — alcalde electo, %, votos válidos, padrón, participación
6. Universo Electoral — padrón, mesas, participación, voto extranjero
7. Territorio — superficie, densidad, concejales, distrito
8. Finanzas y Contratos — resumen SINIM con link al módulo 24
9. Finanzas en detalle · SINIM (módulo 24) — tablas 6.1/6.2/6.3 completas
10. Legal — marco genérico LOC Municipalidades / Ley 18.700
11. Fuentes — 6 enlaces a fuentes primarias por comuna
12. Ficha comunal (★) — resumen ejecutivo con las 6 secciones
14 módulos investigativos — completos solo en Independencia; en las otras 5 comunas aparecen como placeholder "por levantar" con descripción del alcance del trabajo y link "Ver ejemplo en Independencia →":
* Resumen Ejecutivo, Modo Debate, Simulador de Votos, Adversarios, No Electos, PAVP/Becerra, Discapacidad, Calles Críticas, Servicios Muni., Perfil Candidato, Mentalidad Cangrejo, Hoja de Ruta, Auditoría de Datos
Módulo estrella: Finanzas en detalle · SINIM
Para las 6 comunas: 3 KPIs (ingreso 2024, gasto 2024, per cápita), tablas 6.1/6.2/6.3 completas 2022-2024, enlaces al reporte BCN específico de cada comuna + SINIM + INE.
Casos con impacto fiscal (solo Independencia, verificados con fuentes):
* 26-03-2025: Querella municipal por fraude en aseo (Tresur/Suat) y áreas verdes (Aromos). Perjuicio estimado $2.498 millones (~8,3% del ingreso municipal). Fuente: CIPER Chile.
* 04-07-04-2025: Contraquerella de Tresur SpA contra el alcalde por $1.118.316.197 (facturas dic-2024 a feb-2025). Fuente: CIPER + El Desconcierto.
* 05-09-2025: Informe CGR N.º 38-2025 sobre DAEM. Pagos irregulares por $201.548.920: $80.496.991 autoasignados por exjefa DAEM + ~$121M a directores. 31.885 operaciones con clave de funcionaria con licencia. Fuente: BioBío, T13, FastCheck.
CRM territorial de terreno
Cada pin del mapa es un contacto con: categoría (5 colores), nombre, teléfono, nota libre, checkbox "requiere seguimiento" (estrella dorada visible), calle de referencia auto-detectada, coordenadas lat/lon reales, timestamp creación y última actualización.
Panel Apoyos:
* Filtros sobre el mapa (chips): Todos, A, P, O, C, sin categoría, ★ Seguimiento
* Contadores vivos: total, esta semana, en seguimiento
* Lista buscable por nombre/calle/nota/teléfono, ordenada por actividad reciente
* Tocar fila → vuela al mapa + abre editor
* Botón "Mover" para reubicar contacto (recalcula calle + coordenadas)
* Exportación CSV con BOM UTF-8 y separador ; para Excel español: nombre, teléfono, categoría, seguimiento SI/NO, nota, calle_ref, lat, lon, creado, actualizado
Persistencia: localStorage por comuna (atlas.pins.<codigo>). Los contactos son privados por dispositivo — no hay backend multiusuario todavía.
Base de datos y fuentes primarias
Regla del proyecto: nada inventado; toda cifra con fuente enlazada; lo no verificado queda como "pendiente".
Archivos en data/:
* bcn_data.json (8 KB) — extracción estructurada de los reportes BCN Comunales 2025 por comuna
* datos_comunas.json (5,5 KB) — Servel oct-2024 provisorio (99,99% mesas, sujeto a Tricel)
* datos_comunas_v2.json (12 KB) — fusión que consume la app en runtime
* finanzas_detalle.json (21 KB) — tablas SINIM 6.1/6.2/6.3 completas por comuna
* geografia_por_comuna.json (66 KB) — metadatos OSM (proyección, viewBox, índice de calles)
Fuentes primarias:
* BCN Reportes Comunales 2025: bcn.cl/siit/reportescomunales/comunas_v.html?idcom=13108|13127|13104|13101|13126|13128
* INE Censo 2024: censo2024.ine.gob.cl/resultados/
* Servel: servel.cl y elecciones.servel.cl
* SINIM/SUBDERE: datos.sinim.gov.cl
* CEAD: cead.spd.gov.cl
* CASEN/RSH: observatorio.ministeriodesarrollosocial.gob.cl/encuesta-casen
* OpenStreetMap: vía Overpass API con admin_level=8 + highway + leisure
Cifras clave verificadas
Censo 2024 INE (poblaciones): Santiago 438.856 · Recoleta 154.615 (única a la baja −2,1%) · Renca 143.622 · Quinta Normal 129.351 · Conchalí 121.587 · Independencia 116.943 (+16,6%)
Independencia (correcciones al dossier original):
* Población 116.943 confirmada por Censo INE
* Padrón: 90.972 inscritos (no ~79.400)
* Nacidos fuera del país: 44,4% (51.908 personas)
* Electores extranjeros: 32,6% del padrón (29.647 personas)
* Ingreso municipal 2024: M$30.275.554 (SINIM, no ~$25.000M)
* Participación 2024: 73,2%
* Densidad: 16.706 hab/km²
Alcaldes electos 2024 provisorio (Tricel pendiente):
* Independencia: Iglesias 45,09% · 25.846/57.319 válidos
* Recoleta: Fares Jadue (PC) 35,83% · 92.413 válidos
* Conchalí: René de la Vega (IND) 34,34% · 79.829 válidos
* Santiago: Mario Desbordes (RN) 51,08% · 216.528 válidos (2° Irací Hassler PC 28,4%)
* Quinta Normal: Karina Delfino (PS) 47,53% · 70.575 válidos
* Renca: Claudio Castro (IND) 75,72% · 88.400 válidos
Ingresos municipales 2024 SINIM (M$): Santiago 212.193.218 · Renca 82.713.160 · Conchalí 55.773.594 · Quinta Normal 50.949.515 · Recoleta 45.517.650 · Independencia 30.275.554
Arquitectura técnica
Pipeline de construcción: transform19.py toma v18 y aplica pasos A-L:
* A: Reproyección de 12 marcadores + 4 contextos desde lat/lon reales
* B: Extracción de 23 módulos, 12 marcadores, 137 calles
* C: Stylesheet producto 32 KB (tokens claros marca #2952E3, drawer navy)
* D: Shell (appbar, rail, tools, statusbar, legend, toasts)
* E: JS app-layer (proyección, HUD, búsqueda, teclado)
* F: Design pass (polylines, halos, glow comunal, labels, chip identidad)
* G: Multi-comuna (registry con 6 comunas, switchComuna)
* H: Datos oficiales + Ficha comunal (BCN/INE/Servel/CASEN)
* I: Terreno PRO (CRM contactos con editor, filtros, CSV)
* J: Finanzas detalle Indep (3 casos verificados + 9 fuentes)
* K: renderGastos dinámico multi-comuna
* L: 24 módulos en las 5 comunas (10 auto + 14 placeholders)
Pendientes documentados (no inventar)
1. Concejales electos 2024 por nombre y pacto (Servel/Tricel)
2. Sentencias Tricel definitivas para pasar "provisorio" a "definitivo"
3. Habilitados exactos de Conchalí, Santiago y Quinta Normal
4. Series CEAD desagregadas por tipo de delito
5. Conciliar padrón total (BCN) con "válidos alcalde" (prensa) por comuna
6. Enlaces directos a Transparencia Activa municipal (no incluidos por no verificados)
Roadmap posible (a discutir)
* Backend multiusuario (Supabase/Firebase) para que brigadas sincronicen contactos
* Temas de color por partido político
* Modo mapa oscuro para uso nocturno
* Más comunas via pipeline gen_multi.py + fetch_one.sh Overpass
* Levantamiento investigativo de una segunda comuna al nivel de Independencia
* Relación con parques OSM (O'Higgins, Quinta Normal) como capas contextuales
* Script de refresco automático de la base de datos (curl BCN + parseo + fusión anual)
Contexto de escala
Chile censado 2024: 18.480.432 hab · Región Metropolitana: 7.400.741 · Grupo Atlas (6 comunas): 1.104.974 hab (14,9% RM).
RESUMEN COMPLETO PARA RETOMAR — Atlas Territorial (23-jul-2026)
Quién soy y preferencias
Soy Roa (Matías Roa). Estudio Derecho 4° año (nocturno) en Universidad Santo Tomás, y tengo formación previa en informática biomédica (Python, pandas, Power BI, ETL, LangChain). Trabajo desde casa en Santiago, Chile.
Preferencias fijas para nuestras conversaciones:
* Español neutro sin voseo ni chilenismos (chat y documentos)
* Sin Wikipedia como fuente — solo primarias/oficiales o especializadas
* Comunicación concisa, directa, iterativa
* No explicaciones extensas salvo que las pida
* Ejecuta sin pedir permiso a cada paso; regla activa "nada inventado"
Qué es Atlas Territorial
Plataforma HTML single-file (2.0 MB) de inteligencia territorial para partidos políticos y campañas municipales en Chile. Se abre en cualquier navegador, funciona offline salvo enlaces externos.
Comuna ancla: Independencia (elección alcalde 29-oct-2028, alcalde ficticio de referencia "Iglesias" para el ejercicio).
Comunas cubiertas (6): Independencia (13108), Recoleta (13127), Conchalí (13104), Santiago (13101), Quinta Normal (13126), Renca (13128) — todas de la RM.
Estado actual v19
Subido a GitHub:
* Repositorio: https://github.com/Roanicolas/atlas-territorial
* Sitio en vivo vía GitHub Pages: https://roanicolas.github.io/atlas-territorial/
* 12 archivos (README, LICENSE MIT con atribuciones OSM/INE/Servel/BCN/SINIM/CEAD, .gitignore, index.html, data/ con 5 JSON + README, docs/ con 2 MD)
Verificación: 139 pruebas Playwright en verde repartidas en 7 baterías (verify19 27, multi_test 13, ficha_test 11, terreno_test 9, gastos_test 18, k_test 29, l_test 32).
Los 24 módulos del dossier
Estructura de 6 categorías: Apertura · La Comuna · Electoral · Propuestas · Estrategia · Referencias.
10 módulos auto-llenables (datos oficiales para las 6 comunas):
1. Portada (cover) — nombre, población, alcalde, superficie
2. Demografía — Censo INE 2017/2024, sexo, IM, dependencia, adultos mayores
3. Migración — nacidos fuera del país (censo) + electores extranjeros (Servel)
4. Seguridad — CEAD violentos 2022-2024 + VIF con tendencia ↑/↓
5. Elecciones 2024 — alcalde electo, %, votos válidos, padrón, participación
6. Universo Electoral — padrón, mesas, participación, voto extranjero
7. Territorio — superficie, densidad, concejales, distrito
8. Finanzas y Contratos — resumen SINIM con link al módulo 24
9. Finanzas en detalle · SINIM (módulo 24) — tablas 6.1/6.2/6.3 completas
10. Legal — marco genérico LOC Municipalidades / Ley 18.700
11. Fuentes — 6 enlaces a fuentes primarias por comuna
12. Ficha comunal (★) — resumen ejecutivo con las 6 secciones
14 módulos investigativos — completos solo en Independencia; en las otras 5 comunas aparecen como placeholder "por levantar" con descripción del alcance del trabajo y link "Ver ejemplo en Independencia →":
* Resumen Ejecutivo, Modo Debate, Simulador de Votos, Adversarios, No Electos, PAVP/Becerra, Discapacidad, Calles Críticas, Servicios Muni., Perfil Candidato, Mentalidad Cangrejo, Hoja de Ruta, Auditoría de Datos
Módulo estrella: Finanzas en detalle · SINIM
Para las 6 comunas: 3 KPIs (ingreso 2024, gasto 2024, per cápita), tablas 6.1/6.2/6.3 completas 2022-2024, enlaces al reporte BCN específico de cada comuna + SINIM + INE.
Casos con impacto fiscal (solo Independencia, verificados con fuentes):
* 26-03-2025: Querella municipal por fraude en aseo (Tresur/Suat) y áreas verdes (Aromos). Perjuicio estimado $2.498 millones (~8,3% del ingreso municipal). Fuente: CIPER Chile.
* 04-07-04-2025: Contraquerella de Tresur SpA contra el alcalde por $1.118.316.197 (facturas dic-2024 a feb-2025). Fuente: CIPER + El Desconcierto.
* 05-09-2025: Informe CGR N.º 38-2025 sobre DAEM. Pagos irregulares por $201.548.920: $80.496.991 autoasignados por exjefa DAEM + ~$121M a directores. 31.885 operaciones con clave de funcionaria con licencia. Fuente: BioBío, T13, FastCheck.
CRM territorial de terreno
Cada pin del mapa es un contacto con: categoría (5 colores), nombre, teléfono, nota libre, checkbox "requiere seguimiento" (estrella dorada visible), calle de referencia auto-detectada, coordenadas lat/lon reales, timestamp creación y última actualización.
Panel Apoyos:
* Filtros sobre el mapa (chips): Todos, A, P, O, C, sin categoría, ★ Seguimiento
* Contadores vivos: total, esta semana, en seguimiento
* Lista buscable por nombre/calle/nota/teléfono, ordenada por actividad reciente
* Tocar fila → vuela al mapa + abre editor
* Botón "Mover" para reubicar contacto (recalcula calle + coordenadas)
* Exportación CSV con BOM UTF-8 y separador ; para Excel español: nombre, teléfono, categoría, seguimiento SI/NO, nota, calle_ref, lat, lon, creado, actualizado
Persistencia: localStorage por comuna (atlas.pins.<codigo>). Los contactos son privados por dispositivo — no hay backend multiusuario todavía.
Base de datos y fuentes primarias
Regla del proyecto: nada inventado; toda cifra con fuente enlazada; lo no verificado queda como "pendiente".
Archivos en data/:
* bcn_data.json (8 KB) — extracción estructurada de los reportes BCN Comunales 2025 por comuna
* datos_comunas.json (5,5 KB) — Servel oct-2024 provisorio (99,99% mesas, sujeto a Tricel)
* datos_comunas_v2.json (12 KB) — fusión que consume la app en runtime
* finanzas_detalle.json (21 KB) — tablas SINIM 6.1/6.2/6.3 completas por comuna
* geografia_por_comuna.json (66 KB) — metadatos OSM (proyección, viewBox, índice de calles)
Fuentes primarias:
* BCN Reportes Comunales 2025: bcn.cl/siit/reportescomunales/comunas_v.html?idcom=13108|13127|13104|13101|13126|13128
* INE Censo 2024: censo2024.ine.gob.cl/resultados/
* Servel: servel.cl y elecciones.servel.cl
* SINIM/SUBDERE: datos.sinim.gov.cl
* CEAD: cead.spd.gov.cl
* CASEN/RSH: observatorio.ministeriodesarrollosocial.gob.cl/encuesta-casen
* OpenStreetMap: vía Overpass API con admin_level=8 + highway + leisure
Cifras clave verificadas
Censo 2024 INE (poblaciones): Santiago 438.856 · Recoleta 154.615 (única a la baja −2,1%) · Renca 143.622 · Quinta Normal 129.351 · Conchalí 121.587 · Independencia 116.943 (+16,6%)
Independencia (correcciones al dossier original):
* Población 116.943 confirmada por Censo INE
* Padrón: 90.972 inscritos (no ~79.400)
* Nacidos fuera del país: 44,4% (51.908 personas)
* Electores extranjeros: 32,6% del padrón (29.647 personas)
* Ingreso municipal 2024: M$30.275.554 (SINIM, no ~$25.000M)
* Participación 2024: 73,2%
* Densidad: 16.706 hab/km²
Alcaldes electos 2024 provisorio (Tricel pendiente):
* Independencia: Iglesias 45,09% · 25.846/57.319 válidos
* Recoleta: Fares Jadue (PC) 35,83% · 92.413 válidos
* Conchalí: René de la Vega (IND) 34,34% · 79.829 válidos
* Santiago: Mario Desbordes (RN) 51,08% · 216.528 válidos (2° Irací Hassler PC 28,4%)
* Quinta Normal: Karina Delfino (PS) 47,53% · 70.575 válidos
* Renca: Claudio Castro (IND) 75,72% · 88.400 válidos
Ingresos municipales 2024 SINIM (M$): Santiago 212.193.218 · Renca 82.713.160 · Conchalí 55.773.594 · Quinta Normal 50.949.515 · Recoleta 45.517.650 · Independencia 30.275.554
Arquitectura técnica
Pipeline de construcción: transform19.py toma v18 y aplica pasos A-L:
* A: Reproyección de 12 marcadores + 4 contextos desde lat/lon reales
* B: Extracción de 23 módulos, 12 marcadores, 137 calles
* C: Stylesheet producto 32 KB (tokens claros marca #2952E3, drawer navy)
* D: Shell (appbar, rail, tools, statusbar, legend, toasts)
* E: JS app-layer (proyección, HUD, búsqueda, teclado)
* F: Design pass (polylines, halos, glow comunal, labels, chip identidad)
* G: Multi-comuna (registry con 6 comunas, switchComuna)
* H: Datos oficiales + Ficha comunal (BCN/INE/Servel/CASEN)
* I: Terreno PRO (CRM contactos con editor, filtros, CSV)
* J: Finanzas detalle Indep (3 casos verificados + 9 fuentes)
* K: renderGastos dinámico multi-comuna
* L: 24 módulos en las 5 comunas (10 auto + 14 placeholders)
Pendientes documentados (no inventar)
1. Concejales electos 2024 por nombre y pacto (Servel/Tricel)
2. Sentencias Tricel definitivas para pasar "provisorio" a "definitivo"
3. Habilitados exactos de Conchalí, Santiago y Quinta Normal
4. Series CEAD desagregadas por tipo de delito
5. Conciliar padrón total (BCN) con "válidos alcalde" (prensa) por comuna
6. Enlaces directos a Transparencia Activa municipal (no incluidos por no verificados)
Roadmap posible (a discutir)
* Backend multiusuario (Supabase/Firebase) para que brigadas sincronicen contactos
* Temas de color por partido político
* Modo mapa oscuro para uso nocturno
* Más comunas via pipeline gen_multi.py + fetch_one.sh Overpass
* Levantamiento investigativo de una segunda comuna al nivel de Independencia
* Relación con parques OSM (O'Higgins, Quinta Normal) como capas contextuales
* Script de refresco automático de la base de datos (curl BCN + parseo + fusión anual)
Contexto de escala
Chile censado 2024: 18.480.432 hab · Región Metropolitana: 7.400.741 · Grupo Atlas (6 comunas): 1.104.974 hab (14,9% RM).

