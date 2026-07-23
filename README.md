# Atlas Territorial

**Plataforma de inteligencia territorial para campañas municipales en Chile.** Un solo archivo HTML, portable, con datos oficiales de 6 comunas de la Región Metropolitana y un CRM de terreno para brigadistas.

<p align="center">
  <img alt="single-file" src="https://img.shields.io/badge/single--file-2.0%20MB-blue">
  <img alt="comunas" src="https://img.shields.io/badge/comunas-6-green">
  <img alt="modulos" src="https://img.shields.io/badge/módulos-24-orange">
  <img alt="licencia" src="https://img.shields.io/badge/licencia-MIT-lightgrey">
</p>

## Cómo abrirlo

Descarga y abre `index.html` en cualquier navegador moderno (Chrome, Firefox, Safari, Edge). **No requiere servidor, no requiere internet** — todo funciona offline salvo los enlaces a fuentes externas.

Alternativamente, publícalo con **GitHub Pages**: en el repositorio, ir a *Settings → Pages → Source: main branch* y quedará servido en `https://<usuario>.github.io/<repo>/`.

## Qué hace

- **Mapa cartográfico real de 6 comunas** (Independencia, Recoleta, Conchalí, Santiago, Quinta Normal, Renca) con límites, avenidas y calles rotuladas, parques y sedes municipales — todo desde OpenStreetMap.
- **Ficha oficial por comuna** con datos INE Censo 2024, Servel Padrón Definitivo oct-2024, CASEN 2022, SINIM y CEAD.
- **Módulo Finanzas en detalle · SINIM** con las tablas 6.1/6.2/6.3 completas por comuna (ingresos, distribución, gastos 2022–2024).
- **CRM territorial de contactos** por comuna: pines geolocalizados con nombre, teléfono, nota, seguimiento y exportación a CSV con lat/lon reales.
- **Dossier de 23 módulos completos para Independencia** (comuna ancla): resumen, debate, simulador de votos, adversarios, calles críticas, casos con impacto fiscal, etc.
- Para las otras 5 comunas: los mismos 24 módulos, con **10 auto-llenables** desde datos oficiales y **14 placeholders** con alcance del levantamiento marcado como "por levantar".

## Base de datos

Toda la data vive en `data/`. Ver [`data/README.md`](data/README.md) para el detalle por archivo. Las fuentes primarias son:

- **INE Censo 2024** — [censo2024.ine.gob.cl](https://censo2024.ine.gob.cl/resultados/)
- **Servel** — [servel.cl](https://www.servel.cl) · resultados oct-2024 provisorio (99,99% mesas)
- **BCN Reportes Comunales 2025** — [`bcn.cl/siit/reportescomunales`](https://www.bcn.cl/siit/reportescomunales)
- **SINIM/SUBDERE** — [datos.sinim.gov.cl](https://datos.sinim.gov.cl)
- **CEAD (Subs. Prevención del Delito)** — [cead.spd.gov.cl](https://cead.spd.gov.cl)
- **OpenStreetMap** — vía Overpass API (© OpenStreetMap contributors)

## Regla del proyecto

**Nada inventado.** Cada cifra tiene fuente enlazada; lo no verificado queda como "pendiente" con la fuente de dónde sacarlo. Los pendientes documentados están en [`docs/datos_comunas_v2.md`](docs/datos_comunas_v2.md).

## Alcance y honestidades

- Los **datos oficiales** (Censo, electoral, seguridad, finanzas SINIM, migración) están cargados para las 6 comunas y son auditables.
- El **dossier investigativo** (casos con impacto fiscal, simulador, adversarios, calles críticas) está completo **solo para Independencia**. Para las otras 5, la plataforma muestra el módulo con etiqueta "por levantar" y descripción del alcance del trabajo.
- Los apoyos en terreno se guardan en el **localStorage del navegador** — es un archivo estático. Para brigadas multi-usuario se requiere backend (Supabase/Firebase).
- Los resultados electorales 2024 son **provisorios**, sujetos a calificación del Tricel.

## Estructura

```
atlas-territorial/
├── index.html                     # La plataforma completa (2.0 MB)
├── README.md                      # Este archivo
├── LICENSE                        # MIT
├── .gitignore
├── data/                          # Base de datos
│   ├── README.md
│   ├── bcn_data.json              # 6 comunas · BCN estructurado
│   ├── datos_comunas.json         # Servel 2024 provisorio
│   ├── datos_comunas_v2.json      # Fusión final (consumida por la app)
│   ├── finanzas_detalle.json      # SINIM 6.1/6.2/6.3 completas
│   └── geografia_por_comuna.json  # Metadatos OSM por comuna
└── docs/
    ├── datos_comunas_v2.md        # Ficha legible con lecturas territoriales
    └── datos_comunas_censo_servel.md
```

## Licencia

Código y estructura bajo **licencia MIT** (ver `LICENSE`).

Los datos incorporados provienen de fuentes públicas con sus propias licencias:
- OpenStreetMap: [ODbL](https://opendatacommons.org/licenses/odbl/) · atribución "© OpenStreetMap contributors" ya presente en la app.
- INE, Servel, BCN, SINIM, CEAD: datos públicos del Estado de Chile.

## Contribuir

Este es un proyecto en evolución. Si detectas errores de cifra, contradicciones con la fuente citada, o quieres aportar el levantamiento investigativo de otra comuna, abre un issue o pull request.

---

**Contacto:** [tu email/handle acá]
