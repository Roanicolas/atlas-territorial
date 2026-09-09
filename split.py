import json, os

SRC = "index.html"
OUT = "src"

with open(SRC, encoding="utf-8") as f:
    L = f.readlines()  # 1-indexed via L[n-1]

def chunk(a, b):
    """lines a..b inclusive, 1-indexed"""
    return "".join(L[a-1:b])

def write(path, content):
    full = os.path.join(OUT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(content)

# ---- HTML shell + head + css ----
write("parts/00-head.html", chunk(1, 10))
write("styles.css", chunk(12, 481))
write("parts/10-shell-before-a.html", chunk(485, 616))
write("data/mapa-independencia-svg.html", chunk(617, 2602))
write("parts/10-shell-before-b.html", chunk(2603, 2676))
write("parts/90-shell-after.html", chunk(3898, 3903))

# ---- 25 module sections ----
module_starts = [2677,2678,2679,2717,2750,2771,2812,2849,2882,2913,2940,2969,
                 3007,3081,3192,3214,3277,3351,3419,3476,3540,3599,3703,3772,3835]
module_names = [
 "01-ficha","02-gastos","03-cover","04-resumen","05-debate","06-demografia",
 "07-seguridad","08-finanzas","09-migracion","10-elecciones","11-universo-electoral",
 "12-simulador-votos","13-adversarios","14-no-electos","15-pavp","16-territorio",
 "17-discapacidad","18-calles-criticas","19-servicios-municipales","20-perfil-candidato",
 "21-mentalidad-cangrejo","22-hoja-de-ruta","23-legal","24-auditoria-datos","25-fuentes"
]
ends = [s - 1 for s in module_starts[1:]] + [3897]
for name, a, b in zip(module_names, module_starts, ends):
    write(f"modules/{name}.html", chunk(a, b))

# ---- JS sections ----
write("js/00-script-open-marker.txt", "")  # not used, placeholder removed below
js_starts = [3905,3932,4075,4099,4109,4135,4197,4226,4352,4361,4364,4396,4421,4571,4608,4673,4794]
js_names = [
 "01-paleta-chart-defaults","02-definicion-charts","03-debate-cards","04-count-up",
 "05-toggle-dona-barra","06-simulador-votos","07-debate-modo-practica","08-navegacion",
 "09-debate-mode","10-scroll-up","11-busqueda","12-init","13-app-layer",
 "14a-multicomuna-header", # special: only line 4571, comunas is line 4572, rest is 14b
 "15-ficha-comunal","16-terreno-pro","17-modulos-todas-comunas"
]
js_ends = [s - 1 for s in js_starts[1:]] + [4965]

# handle section 14 specially (index 13 in zero-based list)
for idx, (name, a, b) in enumerate(zip(js_names, js_starts, js_ends)):
    if name == "14a-multicomuna-header":
        write(f"js/{name}.js", chunk(a, a))          # line 4571 only
        write("data/comunas-generado.js", chunk(a+1, a+1))  # line 4572
        write("js/14b-multicomuna.js", chunk(a+2, b))       # lines 4573..4607
    else:
        write(f"js/{name}.js", chunk(a, b))

os.remove(os.path.join(OUT, "js/00-script-open-marker.txt"))
print("Split completo.")
