# Base de datos — Atlas Territorial

Ver también [`docs/datos_comunas_v2.md`](../docs/datos_comunas_v2.md) para la lectura humana de estos datos con tablas y correcciones al dossier.

## Archivos

| Archivo | Contenido | Fuente |
|---|---|---|
| `bcn_data.json` | Extracción estructurada de los reportes BCN Comunales 2025 para las 6 comunas: Censo INE 2017/2024 (población, sexo, IM, extranjeros, dependencia, adultos mayores), CASEN 2022 (pobreza por ingresos y multidimensional), RSH mar-2025 (extranjeros, originarios, hacinamiento, sin serv. básicos), CEAD 2022-2024 (violentos + VIF), Servel Padrón Definitivo oct-2024 (mesas, inscritos, votantes, participación, electores extranjeros), SINIM 2022-2024 (ingreso total, relación FCM). | [BCN Reportes Comunales](https://www.bcn.cl/siit/reportescomunales) `?idcom=13108\|13127\|13104\|13101\|13126\|13128` |
| `finanzas_detalle.json` | Tablas SINIM 6.1 (13 filas: ingresos por fuente), 6.2 (3 filas: distribución %), 6.3 (14 filas: gastos por área) — 2022-2024 completas por comuna. | SINIM/SUBDERE vía BCN |
| `datos_comunas.json` | Resultados Elecciones Municipales oct-2024: alcalde electo, partido, porcentaje, votos válidos, habilitados, segundo lugar. **Provisorio al 99,99% mesas, sujeto a calificación del Tricel.** | Servel vía Meganoticias, Pauta, DF, EnCancha |
| `datos_comunas_v2.json` | **Fusión final** BCN + Servel + densidades (cálculo propio pob/superficie). Este es el archivo que la app consume en runtime. | Consolidado |
| `geografia_por_comuna.json` | Metadatos geográficos por comuna: proyección, viewBox, índice de calles rotuladas, KPIs (calles, áreas verdes, canchas). Los SVGs completos están dentro de `index.html`. | Overpass API · © OpenStreetMap contributors |

## Reproducibilidad

Todas las fuentes son públicas y re-descargables. Ejemplo para regenerar `bcn_data.json` de una comuna:

```bash
curl -s "https://www.bcn.cl/siit/reportescomunales/comunas_v.html?idcom=13108" -o bcn_13108.html
python3 parse_bcn.py bcn_13108.html  # parser en el pipeline
```

## Códigos comunales

| Código | Comuna |
|---|---|
| 13101 | Santiago |
| 13104 | Conchalí |
| 13108 | Independencia (comuna ancla del dossier) |
| 13126 | Quinta Normal |
| 13127 | Recoleta |
| 13128 | Renca |
