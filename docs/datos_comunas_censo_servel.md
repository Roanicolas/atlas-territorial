# Atlas Territorial — Datos oficiales por comuna (INE + Servel)
**Fecha de levantamiento:** 04-jul-2026 · **Regla:** ningún dato inventado; todo con fuente. Lo no verificado va en *Pendientes*.

## Fuentes primarias
- **INE — Censo de Población y Vivienda 2024** (primeros resultados, publicados 27-mar-2025). Portal oficial: censo2024.ine.gob.cl/resultados. Tabla comunal transcrita por BioBioChile (28-03-2025). Población **censada** (no proyección).
- **Servel — Elecciones Municipales 26–27 oct 2024.** Cifras al **99,99% de mesas escrutadas**, **provisorias, sujetas a calificación del Tricel** (los medios citados transcriben datos Servel: Meganoticias, Pauta, Diario Financiero, En Cancha).

## Contexto
Chile censado 2024: **18.480.432** · Región Metropolitana: **7.400.741**.

---

## Independencia (13108) — comuna ancla del dossier
| Dato | Valor | Fuente |
|---|---|---|
| Población censada 2024 | **116.943** (H 56.916 / M 60.027) | INE Censo 2024 |
| ⚑ Nota | **Confirma** la cifra que el dossier tenía como "no confirmada" → actualizar módulo Demografía | — |
| Electoral 2024 | Ya levantado: Iglesias 45,09% · 25.846/57.319 válidos · 231 mesas · 8 locales · padrón ~79.400 | dossier (Servel) |

## Recoleta (13127)
| Dato | Valor | Fuente |
|---|---|---|
| Población censada 2024 | **154.615** (H 76.020 / M 78.595) | INE Censo 2024 |
| Alcalde electo 2024 | **Fares Jadue (PC)** — 35,83% | Servel vía Meganoticias |
| Votos válidos comuna | 92.413 (99,99% mesas) | ídem |
| Habilitados | 137.855 | Servel vía En Cancha |
| Segundo lugar | Mauricio Smok (UDI) ~28,8% | Servel vía DF |

## Conchalí (13104)
| Dato | Valor | Fuente |
|---|---|---|
| Población censada 2024 | **121.587** (H 59.122 / M 62.465) | INE Censo 2024 |
| Alcalde electo 2024 | **René de la Vega (IND)** — 34,34% | Servel vía Meganoticias |
| Votos válidos comuna | 79.829 (99,99% mesas) | ídem |
| Habilitados | *pendiente* | — |

## Santiago (13101)
| Dato | Valor | Fuente |
|---|---|---|
| Población censada 2024 | **438.856** (H 223.237 / M 215.619) | INE Censo 2024 |
| Alcalde electo 2024 | **Mario Desbordes (RN)** — 51,08% | Servel vía Meganoticias |
| Votos válidos comuna | 216.528 (99,99% mesas) | ídem |
| Segundo lugar | Irací Hassler (PC) ~28,4% | Servel vía DF |
| Habilitados | *pendiente* | — |

## Quinta Normal (13126)
| Dato | Valor | Fuente |
|---|---|---|
| Población censada 2024 | **129.351** (H 63.130 / M 66.221) | INE Censo 2024 |
| Alcaldesa electa 2024 | **Karina Delfino (PS)** — 47,53% (33.544 votos) | Servel vía Meganoticias/Pauta |
| Votos válidos comuna | 70.575 (99,99% mesas) | ídem |
| Habilitados | *pendiente* | — |

## Renca (13128)
| Dato | Valor | Fuente |
|---|---|---|
| Población censada 2024 | **143.622** (H 69.985 / M 73.637) | INE Censo 2024 |
| Alcalde electo 2024 | **Claudio Castro (IND)** — 75,72% (66.935 votos) | Servel vía Meganoticias/Pauta |
| Votos válidos comuna | 88.400 (99,99% mesas) | ídem |
| Habilitados | 114.321 | Servel vía En Cancha |

---

## Pendientes (para completar SIN inventar)
1. **Habilitados/padrón** de Conchalí, Santiago y Quinta Normal → BCN Reportes Comunales (bcn.cl/siit/reportescomunales, sección *Participación*: mesas, inscritos, votantes) o elecciones.servel.cl.
2. **Mesas y locales de votación** por comuna (el "231 mesas · 8 locales" de cada una) → mismas fuentes.
3. **% nacidos en el extranjero** por comuna (Censo 2024) → INE indicadores comunales / BCN Reportes 2025.
4. **Concejales electos 2024** por comuna → Servel/Tricel.
5. **Validación Tricel** (sentencias de proclamación) para pasar de "provisorio" a "definitivo".

## Integración al Atlas (siguiente paso técnico)
- `chipSub` por comuna → "Pob. censada 154.615 · Alcalde F. Jadue (PC) 35,8%".
- `capasKpi` → [Población censada] [Votos válidos 2024] [% alcalde].
- Nuevo mini-módulo "Ficha comunal" en el panel Dossier de cada comuna (con estas tablas y sellos de fuente), dejando claro qué es oficial y qué está pendiente.
