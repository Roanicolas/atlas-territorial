# Atlas Territorial — Factorización de index.html (v19)

El `index.html` monolítico (2,0 MB, 4968 líneas) queda dividido en un árbol fuente
editable. `build.py` lo reensambla en un solo archivo idéntico byte a byte al
original (verificado por MD5), así que la distribución single-file offline no cambia.

## Estructura

```
src/
├── styles.css                      Hoja de estilos completa (con sus comentarios de sección)
├── parts/
│   ├── 00-head.html                <head>: meta, título, fuentes, Chart.js CDN
│   ├── 10-shell-before-a.html      Shell UI: appbar, rail, tool panels (antes del mapa)
│   ├── 10-shell-before-b.html      Shell UI: controles de mapa, Archivo, topbar, panel-bar
│   └── 90-shell-after.html         Cierres + searchResults + botón subir
├── modules/                        Los 25 bloques del dossier, uno por archivo
│   ├── 01-ficha.html               (placeholder, se llena por JS)
│   ├── 02-gastos.html              Módulo 24 · Finanzas en detalle SINIM
│   ├── 03-cover.html … 25-fuentes.html
├── js/                             Lógica de la app, dividida por los marcadores /* ═══ */ originales
│   ├── 01-paleta-chart-defaults.js
│   ├── 02-definicion-charts.js
│   ├── … 13-app-layer.js
│   ├── 14a-multicomuna-header.js / 14b-multicomuna.js
│   ├── 15-ficha-comunal.js
│   ├── 16-terreno-pro.js           CRM de terreno completo
│   └── 17-modulos-todas-comunas.js Paso L
└── data/                           Bloques GENERADOS por el pipeline — no editar a mano
    ├── comunas-generado.js         const COMUNAS (1,4 MB, geodata + módulos de las 6 comunas)
    └── mapa-independencia-svg.html SVG base del mapa de Independencia (364 KB)
```

## Flujo de trabajo

1. Editar el archivo pequeño que corresponda (un módulo en `modules/`, una función en `js/`, estilos en `styles.css`).
2. Reconstruir: `python3 build.py` → genera `dist/index.html`.
3. Probar `dist/index.html` en el navegador (y correr las baterías Playwright contra él).
4. Publicar: copiar `dist/index.html` a la raíz del repo como `index.html` y hacer push.

`split.py` solo se usó una vez para generar esta estructura desde el v19 original;
se conserva como referencia del corte exacto (números de línea documentados).

## Reglas

- `data/` contiene salidas del pipeline OSM/BCN (transform19.py, pasos A-B). Si hay que
  regenerar geodata, se hace por el pipeline, no editando estos archivos.
- El orden de concatenación en `build.py` es el contrato: no renombrar archivos sin
  actualizar las listas `module_names` y `js_order`.
- Verificación de integridad tras cualquier cambio estructural (no de contenido):
  `python3 build.py && diff index.html dist/index.html`.

## Verificación de origen

Reconstrucción validada el 09-09-2026:
MD5 719d623b3e98d6fb546a77993d061773 idéntico entre el index.html original del repo
y dist/index.html generado por build.py.
