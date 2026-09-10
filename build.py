import os

SRC = "src"
OUT_DIR = "dist"
OUT = os.path.join(OUT_DIR, "index.html")

def read(path):
    with open(os.path.join(SRC, path), encoding="utf-8") as f:
        return f.read()

module_names = [
 "01-ficha","02-gastos","03-cover","04-resumen","05-debate","06-demografia",
 "07-seguridad","08-finanzas","09-migracion","10-elecciones","11-universo-electoral",
 "12-simulador-votos","13-adversarios","14-no-electos","15-pavp","16-territorio",
 "17-discapacidad","18-calles-criticas","19-servicios-municipales","20-perfil-candidato",
 "21-mentalidad-cangrejo","22-hoja-de-ruta","23-legal","24-auditoria-datos","25-fuentes"
]

js_order = [
 "01-paleta-chart-defaults","02-definicion-charts","03-debate-cards","04-count-up",
 "05-toggle-dona-barra","06-simulador-votos","07-debate-modo-practica","08-navegacion",
 "09-debate-mode","10-scroll-up","11-busqueda","12-init","13-app-layer",
]

os.makedirs(OUT_DIR, exist_ok=True)

parts = []
parts.append(read("parts/00-head.html"))
parts.append("<style>\n")
parts.append(read("styles.css"))
parts.append("</style>\n</head>\n<body>\n")
parts.append(read("parts/10-shell-before-a.html"))
parts.append(read("data/mapa-independencia-svg.html"))
parts.append(read("parts/10-shell-before-b.html"))
for name in module_names:
    parts.append(read(f"modules/{name}.html"))
parts.append(read("parts/90-shell-after.html"))
parts.append("<script>\n")
for name in js_order:
    parts.append(read(f"js/{name}.js"))
parts.append(read("js/14a-multicomuna-header.js"))
parts.append(read("data/comunas-generado.js"))
parts.append(read("js/14b-multicomuna.js"))
parts.append(read("js/15-ficha-comunal.js"))
parts.append(read("js/16-terreno-pro.js"))
parts.append(read("js/17-modulos-todas-comunas.js"))
parts.append(read("js/18-filtro-kpi-mapa.js"))
parts.append("</script>\n</body>\n</html>\n")

with open(OUT, "w", encoding="utf-8") as f:
    f.write("".join(parts))

print("Build completo:", OUT)
