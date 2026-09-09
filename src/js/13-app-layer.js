/* ═══════════ ATLAS v19 · app layer ═══════════ */
let PROJ={minLon:-70.6819,maxLat:-33.3989,kx:0.834699,scale:24773.4139,pad:70,W:797.9,H:960};
const SEARCH_EXTRA=[{"cat": "PUNTO", "q": "14 de la fama 14 de la fama · m04", "text": "14 de la Fama", "x": 481.5, "y": 196.3, "sec": "calles"}, {"cat": "PUNTO", "q": "corredor huasco corredor huasco · m02", "text": "Corredor Huasco", "x": 470.4, "y": 336.3, "sec": "territorial"}, {"cat": "PUNTO", "q": "demo · migración demografía · m12", "text": "Demo · Migración", "x": 460.8, "y": 394.5, "sec": "migracion"}, {"cat": "PUNTO", "q": "áreas verdes · aromos áreas verdes · aromos · m09", "text": "Áreas Verdes · Aromos", "x": 522.9, "y": 406.9, "sec": "finanzas"}, {"cat": "PUNTO", "q": "sector jar sector jar · m05", "text": "Sector JAR", "x": 348.1, "y": 528.3, "sec": "calles"}, {"cat": "PUNTO", "q": "liceos · mesas liceos · mesas · m03", "text": "Liceos · Mesas", "x": 543.5, "y": 543.2, "sec": "territorial"}, {"cat": "PUNTO", "q": "salud · campus norte salud · m06", "text": "Salud · Campus norte", "x": 660.6, "y": 502.1, "sec": "servicios"}, {"cat": "PUNTO", "q": "daem · educación daem · educación · m11", "text": "DAEM · Educación", "x": 611.8, "y": 518.4, "sec": "finanzas"}, {"cat": "PUNTO", "q": "cámaras · central seg. cámaras · m08", "text": "Cámaras · Central Seg.", "x": 584.9, "y": 592.7, "sec": "seguridad"}, {"cat": "PUNTO", "q": "municipalidad municipalidad · m01", "text": "Municipalidad", "x": 622.0, "y": 651.3, "sec": "finanzas"}, {"cat": "PUNTO", "q": "aseo · tresur/suat aseo · m10", "text": "Aseo · Tresur/Suat", "x": 522.9, "y": 617.5, "sec": "finanzas"}, {"cat": "PUNTO", "q": "edif. inglaterra 1144 edif. inglaterra 1144 · m07", "text": "Edif. Inglaterra 1144", "x": 688.3, "y": 716.6, "sec": "seguridad"}, {"cat": "CALLE", "q": "olivos", "text": "Olivos", "x": 665.2, "y": 673.5, "z": 2.2}, {"cat": "CALLE", "q": "autopista central", "text": "Autopista Central", "x": 125.5, "y": 434.3, "z": 2.2}, {"cat": "CALLE", "q": "avenida independencia", "text": "Avenida Independencia", "x": 569.4, "y": 460.7, "z": 2.2}, {"cat": "CALLE", "q": "avenida hipódromo chile", "text": "Avenida Hipódromo Chile", "x": 436.6, "y": 266.1, "z": 2.2}, {"cat": "CALLE", "q": "avenida domingo santa maría", "text": "Avenida Domingo Santa María", "x": 506.5, "y": 485.6, "z": 2.2}, {"cat": "CALLE", "q": "profesor alberto zañartu", "text": "Profesor Alberto Zañartu", "x": 635.2, "y": 533.6, "z": 2.2}, {"cat": "CALLE", "q": "el guanaco", "text": "El Guanaco", "x": 591.9, "y": 294.2, "z": 2.2}, {"cat": "CALLE", "q": "cotapos", "text": "Cotapos", "x": 555.1, "y": 301.4, "z": 2.6}, {"cat": "CALLE", "q": "los nidos", "text": "Los Nidos", "x": 433.0, "y": 366.3, "z": 2.6}, {"cat": "CALLE", "q": "escanilla", "text": "Escanilla", "x": 482.1, "y": 483.0, "z": 2.6}, {"cat": "CALLE", "q": "josé bisquert", "text": "José Bisquert", "x": 315.8, "y": 341.5, "z": 2.6}, {"cat": "CALLE", "q": "calle venecia", "text": "Calle Venecia", "x": 419.9, "y": 288.5, "z": 2.6}, {"cat": "CALLE", "q": "avenida reina maría", "text": "Avenida Reina María", "x": 202.0, "y": 168.5, "z": 2.2}, {"cat": "CALLE", "q": "calle palermo", "text": "Calle Palermo", "x": 423.0, "y": 307.2, "z": 2.6}, {"cat": "CALLE", "q": "alcalde germán domínguez", "text": "Alcalde Germán Domínguez", "x": 176.0, "y": 537.4, "z": 2.2}, {"cat": "CALLE", "q": "carrión", "text": "Carrión", "x": 411.1, "y": 579.7, "z": 2.6}, {"cat": "CALLE", "q": "coronel agustín lópez de alcázar", "text": "Coronel Agustín López de Alcázar", "x": 562.9, "y": 696.7, "z": 2.6}, {"cat": "CALLE", "q": "teniente bisson", "text": "Teniente Bisson", "x": 457.5, "y": 726.7, "z": 2.6}, {"cat": "CALLE", "q": "maruri", "text": "Maruri", "x": 601.5, "y": 732.6, "z": 2.6}, {"cat": "CALLE", "q": "lastra", "text": "Lastra", "x": 605.9, "y": 807.1, "z": 2.6}, {"cat": "CALLE", "q": "quintana", "text": "Quintana", "x": 540.1, "y": 786.0, "z": 2.6}, {"cat": "CALLE", "q": "presidente aníbal pinto", "text": "Presidente Aníbal Pinto", "x": 575.6, "y": 777.0, "z": 2.6}, {"cat": "CALLE", "q": "barnechea", "text": "Barnechea", "x": 566.4, "y": 780.4, "z": 2.6}, {"cat": "CALLE", "q": "adolfo ibáñez", "text": "Adolfo Ibáñez", "x": 601.5, "y": 791.4, "z": 2.6}, {"cat": "CALLE", "q": "picarte", "text": "Picarte", "x": 629.2, "y": 793.9, "z": 2.6}, {"cat": "CALLE", "q": "nueva 1", "text": "Nueva 1", "x": 176.3, "y": 331.7, "z": 2.2}, {"cat": "CALLE", "q": "las cañas", "text": "Las Cañas", "x": 244.9, "y": 426.3, "z": 2.2}, {"cat": "CALLE", "q": "nueva 3", "text": "Nueva 3", "x": 165.5, "y": 354.4, "z": 2.6}, {"cat": "CALLE", "q": "nueva 4", "text": "Nueva 4", "x": 192.0, "y": 364.9, "z": 2.6}, {"cat": "CALLE", "q": "longitudinal 6", "text": "Longitudinal 6", "x": 260.6, "y": 490.5, "z": 2.6}, {"cat": "CALLE", "q": "el molino", "text": "El Molino", "x": 408.2, "y": 550.6, "z": 2.6}, {"cat": "CALLE", "q": "soberanía", "text": "Soberanía", "x": 353.8, "y": 542.5, "z": 2.2}, {"cat": "CALLE", "q": "salomón sack", "text": "Salomón Sack", "x": 338.7, "y": 603.1, "z": 2.2}, {"cat": "CALLE", "q": "la obra", "text": "La Obra", "x": 369.0, "y": 584.4, "z": 2.6}, {"cat": "CALLE", "q": "grumete bustos", "text": "Grumete Bustos", "x": 463.2, "y": 687.7, "z": 2.6}, {"cat": "CALLE", "q": "los ángeles", "text": "Los Ángeles", "x": 402.5, "y": 728.0, "z": 2.6}, {"cat": "CALLE", "q": "baldomero flores", "text": "Baldomero Flores", "x": 437.9, "y": 684.9, "z": 2.2}, {"cat": "CALLE", "q": "uno norte", "text": "Uno Norte", "x": 433.8, "y": 704.4, "z": 2.6}, {"cat": "CALLE", "q": "comandante canales", "text": "Comandante Canales", "x": 438.7, "y": 747.9, "z": 2.6}, {"cat": "CALLE", "q": "longitudinal", "text": "Longitudinal", "x": 370.5, "y": 679.0, "z": 2.6}, {"cat": "CALLE", "q": "rivera", "text": "Rivera", "x": 566.4, "y": 743.9, "z": 2.2}, {"cat": "CALLE", "q": "walter lihn kropp", "text": "Walter Lihn Kropp", "x": 412.4, "y": 596.7, "z": 2.6}, {"cat": "CALLE", "q": "pantaleón vélez silva", "text": "Pantaleón Vélez Silva", "x": 528.8, "y": 131.2, "z": 2.6}, {"cat": "CALLE", "q": "bombero adolfo ossa", "text": "Bombero Adolfo Ossa", "x": 464.4, "y": 99.8, "z": 2.6}, {"cat": "CALLE", "q": "recabarren", "text": "Recabarren", "x": 451.4, "y": 105.9, "z": 2.6}, {"cat": "CALLE", "q": "luis johnson", "text": "Luis Johnson", "x": 440.0, "y": 101.0, "z": 2.6}, {"cat": "CALLE", "q": "rafaél ramírez", "text": "Rafaél Ramírez", "x": 415.0, "y": 101.5, "z": 2.6}, {"cat": "CALLE", "q": "huidobro", "text": "Huidobro", "x": 417.4, "y": 87.9, "z": 2.6}, {"cat": "CALLE", "q": "primavera", "text": "Primavera", "x": 250.0, "y": 110.8, "z": 2.6}, {"cat": "CALLE", "q": "david arellano", "text": "David Arellano", "x": 336.9, "y": 116.0, "z": 2.2}, {"cat": "CALLE", "q": "las estrellas", "text": "Las Estrellas", "x": 225.8, "y": 141.0, "z": 2.6}, {"cat": "CALLE", "q": "las araucarias", "text": "Las Araucarias", "x": 212.7, "y": 196.7, "z": 2.2}, {"cat": "CALLE", "q": "josé berstein", "text": "José Berstein", "x": 193.2, "y": 182.8, "z": 2.6}, {"cat": "CALLE", "q": "costa rica", "text": "Costa Rica", "x": 185.6, "y": 192.9, "z": 2.6}, {"cat": "CALLE", "q": "coronel alvarado", "text": "Coronel Alvarado", "x": 289.0, "y": 207.0, "z": 2.2}, {"cat": "CALLE", "q": "bajos de jiménez", "text": "Bajos de Jiménez", "x": 123.9, "y": 216.3, "z": 2.2}, {"cat": "CALLE", "q": "aurora de chile", "text": "Aurora de Chile", "x": 192.1, "y": 425.8, "z": 2.6}, {"cat": "CALLE", "q": "santiago arcos", "text": "Santiago Arcos", "x": 290.0, "y": 455.3, "z": 2.6}, {"cat": "CALLE", "q": "juliet", "text": "Juliet", "x": 358.9, "y": 383.9, "z": 2.6}, {"cat": "CALLE", "q": "nueva de matte", "text": "Nueva de Matte", "x": 290.5, "y": 315.2, "z": 2.2}, {"cat": "CALLE", "q": "obispo carlos san martín", "text": "Obispo Carlos San Martín", "x": 281.2, "y": 354.1, "z": 2.6}, {"cat": "CALLE", "q": "alfredo guillermo bravo", "text": "Alfredo Guillermo Bravo", "x": 323.1, "y": 438.7, "z": 2.6}, {"cat": "CALLE", "q": "bruselas", "text": "Bruselas", "x": 289.2, "y": 411.9, "z": 2.6}, {"cat": "CALLE", "q": "capitán bignon", "text": "Capitán Bignon", "x": 396.5, "y": 442.7, "z": 2.6}, {"cat": "CALLE", "q": "avenida chillán", "text": "Avenida Chillán", "x": 307.5, "y": 293.2, "z": 2.6}, {"cat": "CALLE", "q": "grumete pantaleón cortes", "text": "Grumete Pantaleón Cortes", "x": 246.3, "y": 316.5, "z": 2.6}, {"cat": "CALLE", "q": "rosa salas", "text": "Rosa Salas", "x": 193.5, "y": 254.5, "z": 2.6}, {"cat": "CALLE", "q": "carlos toribio robinet", "text": "Carlos Toribio Robinet", "x": 262.0, "y": 342.7, "z": 2.6}, {"cat": "CALLE", "q": "marino de lobera", "text": "Marino de Lobera", "x": 233.9, "y": 307.6, "z": 2.6}, {"cat": "CALLE", "q": "avenida altamirano", "text": "Avenida Altamirano", "x": 314.3, "y": 271.1, "z": 2.6}, {"cat": "CALLE", "q": "las enredaderas", "text": "Las Enredaderas", "x": 307.4, "y": 250.0, "z": 2.6}, {"cat": "CALLE", "q": "los marroquíes", "text": "Los Marroquíes", "x": 318.0, "y": 264.8, "z": 2.6}, {"cat": "CALLE", "q": "isidoro errázuriz", "text": "Isidoro Errázuriz", "x": 295.5, "y": 233.1, "z": 2.2}, {"cat": "CALLE", "q": "autopista costanera norte", "text": "Autopista Costanera Norte", "x": 683.1, "y": 889.4, "z": 2.2}, {"cat": "CALLE", "q": "avenida la paz", "text": "Avenida La Paz", "x": 716.8, "y": 547.8, "z": 2.2}, {"cat": "CALLE", "q": "san josé", "text": "San José", "x": 673.6, "y": 485.0, "z": 2.2}, {"cat": "CALLE", "q": "general prieto", "text": "General Prieto", "x": 569.7, "y": 830.2, "z": 2.2}, {"cat": "CALLE", "q": "avenida jorge hirmas", "text": "Avenida Jorge Hirmas", "x": 177.1, "y": 596.1, "z": 2.2}, {"cat": "CALLE", "q": "artesanos", "text": "Artesanos", "x": 703.7, "y": 872.9, "z": 2.2}, {"cat": "CALLE", "q": "avenida fermín vivaceta", "text": "Avenida Fermín Vivaceta", "x": 319.4, "y": 180.7, "z": 2.2}, {"cat": "CALLE", "q": "santa laura", "text": "Santa Laura", "x": 538.1, "y": 238.7, "z": 2.2}, {"cat": "CALLE", "q": "gamero", "text": "Gamero", "x": 274.2, "y": 643.0, "z": 2.2}, {"cat": "CALLE", "q": "15 norte", "text": "15 Norte", "x": 258.5, "y": 508.2, "z": 2.6}, {"cat": "CALLE", "q": "14 norte", "text": "14 Norte", "x": 219.0, "y": 578.1, "z": 2.6}, {"cat": "CALLE", "q": "13 norte", "text": "13 Norte", "x": 227.6, "y": 584.7, "z": 2.6}, {"cat": "CALLE", "q": "longitudinal 5", "text": "Longitudinal 5", "x": 252.6, "y": 508.9, "z": 2.6}, {"cat": "CALLE", "q": "longitudinal 4", "text": "Longitudinal 4", "x": 240.3, "y": 524.9, "z": 2.6}, {"cat": "CALLE", "q": "longitudinal 3", "text": "Longitudinal 3", "x": 212.3, "y": 561.0, "z": 2.6}, {"cat": "CALLE", "q": "enrique soro", "text": "Enrique Soro", "x": 253.4, "y": 577.7, "z": 2.2}, {"cat": "CALLE", "q": "echeverría", "text": "Echeverría", "x": 683.7, "y": 718.0, "z": 2.2}, {"cat": "CALLE", "q": "bravo de saravia", "text": "Bravo de Saravia", "x": 131.7, "y": 263.5, "z": 2.2}, {"cat": "CALLE", "q": "nueva 5", "text": "Nueva 5", "x": 205.6, "y": 385.6, "z": 2.6}, {"cat": "CALLE", "q": "colón", "text": "Colón", "x": 569.5, "y": 652.3, "z": 2.2}, {"cat": "CALLE", "q": "tres norte", "text": "Tres Norte", "x": 394.7, "y": 730.0, "z": 2.6}, {"cat": "CALLE", "q": "cuatro norte", "text": "Cuatro Norte", "x": 380.9, "y": 735.0, "z": 2.6}, {"cat": "CALLE", "q": "18 norte", "text": "18 Norte", "x": 186.0, "y": 548.3, "z": 2.6}, {"cat": "CALLE", "q": "17 norte", "text": "17 Norte", "x": 194.1, "y": 556.5, "z": 2.6}, {"cat": "CALLE", "q": "16 norte", "text": "16 Norte", "x": 202.2, "y": 564.0, "z": 2.6}, {"cat": "CALLE", "q": "belisario prats", "text": "Belisario Prats", "x": 638.6, "y": 395.5, "z": 2.2}, {"cat": "CALLE", "q": "cronista gongora", "text": "Cronista Gongora", "x": 350.5, "y": 361.6, "z": 2.6}, {"cat": "CALLE", "q": "izquierdo", "text": "Izquierdo", "x": 314.2, "y": 349.2, "z": 2.6}, {"cat": "CALLE", "q": "blanco fombona", "text": "Blanco Fombona", "x": 377.3, "y": 458.5, "z": 2.6}, {"cat": "CALLE", "q": "padre las casas", "text": "Padre Las Casas", "x": 290.6, "y": 430.0, "z": 2.6}, {"cat": "CALLE", "q": "moisés ríos", "text": "Moisés Ríos", "x": 180.4, "y": 470.0, "z": 2.2}, {"cat": "CALLE", "q": "huánuco", "text": "Huánuco", "x": 518.6, "y": 206.4, "z": 2.6}, {"cat": "CALLE", "q": "carlos medina", "text": "Carlos Medina", "x": 338.0, "y": 702.9, "z": 2.2}, {"cat": "CALLE", "q": "sara gajardo", "text": "Sara Gajardo", "x": 301.5, "y": 616.2, "z": 2.6}, {"cat": "CALLE", "q": "cruz", "text": "Cruz", "x": 580.5, "y": 705.9, "z": 2.6}, {"cat": "CALLE", "q": "dos norte", "text": "Dos Norte", "x": 416.4, "y": 697.4, "z": 2.6}, {"cat": "CALLE", "q": "bezanilla", "text": "Bezanilla", "x": 538.2, "y": 535.9, "z": 2.2}, {"cat": "CALLE", "q": "francia", "text": "Francia", "x": 471.6, "y": 381.9, "z": 2.6}, {"cat": "CALLE", "q": "cinco norte", "text": "Cinco Norte", "x": 354.8, "y": 682.0, "z": 2.6}, {"cat": "CALLE", "q": "calle sevilla", "text": "Calle Sevilla", "x": 478.6, "y": 464.9, "z": 2.6}, {"cat": "CALLE", "q": "avenida central", "text": "Avenida Central", "x": 486.6, "y": 436.2, "z": 2.6}, {"cat": "CALLE", "q": "freirina", "text": "Freirina", "x": 435.5, "y": 295.3, "z": 2.6}, {"cat": "CALLE", "q": "calle río jachal", "text": "Calle Río Jachal", "x": 457.7, "y": 417.5, "z": 2.6}, {"cat": "CALLE", "q": "huasco", "text": "Huasco", "x": 470.9, "y": 316.8, "z": 2.6}, {"cat": "CALLE", "q": "antonio jacobo vial", "text": "Antonio Jacobo Vial", "x": 471.6, "y": 448.7, "z": 2.6}, {"cat": "CALLE", "q": "avenida inglaterra", "text": "Avenida Inglaterra", "x": 477.6, "y": 400.7, "z": 2.6}, {"cat": "CALLE", "q": "lafayette", "text": "Lafayette", "x": 656.5, "y": 327.3, "z": 2.6}, {"cat": "CALLE", "q": "general saavedra", "text": "General Saavedra", "x": 560.8, "y": 324.6, "z": 2.6}, {"cat": "CALLE", "q": "enrico fermi", "text": "Enrico Fermi", "x": 623.8, "y": 295.4, "z": 2.6}, {"cat": "CALLE", "q": "marcos macuada", "text": "Marcos Macuada", "x": 313.3, "y": 100.8, "z": 2.6}, {"cat": "CALLE", "q": "doctor carlos lorca tobar", "text": "Doctor Carlos Lorca Tobar", "x": 668.3, "y": 618.3, "z": 2.2}, {"cat": "CALLE", "q": "tacora", "text": "Tacora", "x": 221.6, "y": 132.1, "z": 2.2}, {"cat": "CALLE", "q": "avenida presidente eduardo frei montalva", "text": "Avenida Presidente Eduardo Frei Montalva", "x": 282.0, "y": 717.9, "z": 2.2}, {"cat": "CALLE", "q": "andrés bello", "text": "Andrés Bello", "x": 402.8, "y": 518.6, "z": 2.6}, {"cat": "CALLE", "q": "padre faustino gazzero", "text": "Padre Faustino Gazzero", "x": 323.0, "y": 400.2, "z": 2.6}, {"cat": "CALLE", "q": "el roble", "text": "El Roble", "x": 532.9, "y": 147.0, "z": 2.6}, {"cat": "CALLE", "q": "avenida einstein", "text": "Avenida Einstein", "x": 537.0, "y": 170.3, "z": 2.2}, {"cat": "CALLE", "q": "pablo urzúa", "text": "Pablo Urzúa", "x": 463.6, "y": 129.7, "z": 2.6}, {"cat": "CALLE", "q": "san luis", "text": "San Luis", "x": 513.9, "y": 509.4, "z": 2.6}, {"cat": "CALLE", "q": "pasaje independencia", "text": "Pasaje Independencia", "x": 440.8, "y": 186.9, "z": 2.6}, {"cat": "CALLE", "q": "general bulnes", "text": "General Bulnes", "x": 293.2, "y": 729.6, "z": 2.2}, {"cat": "CALLE", "q": "dávila baeza", "text": "Dávila Baeza", "x": 671.6, "y": 758.1, "z": 2.6}, {"cat": "CALLE", "q": "general borgoño", "text": "General Borgoño", "x": 641.9, "y": 856.6, "z": 2.2}, {"cat": "CALLE", "q": "avenida barón de juras reales", "text": "Avenida Barón de Juras Reales", "x": 191.0, "y": 148.6, "z": 2.2}];
const LAYER_NAMES={todo:'Todas las capas',electoral:'Electoral',seguridad:'Seguridad',servicios:'Servicios',contratos:'Contratos',territorio:'Territorio',demografia:'Demografía',parques:'Parques y plazas',deporte:'Canchas y deporte',edificios:'Edificaciones'};
const LAYER_DOT={electoral:'#bd8b22',seguridad:'#d23a2e',servicios:'#1f8a50',contratos:'#b5862a',territorio:'#566b63',demografia:'#2f9d67',parques:'#3FA06B',deporte:'#1f8a50',edificios:'#a8915c'};

function showToast(msg,color){const t=document.createElement('div');t.className='toast';t.innerHTML='<span class="d" style="background:'+(color||'#16A34A')+'"></span>'+msg;document.getElementById('toasts').appendChild(t);setTimeout(()=>{t.classList.add('out');setTimeout(()=>t.remove(),260);},2300);}

/* tools / navigation */
let curTool=null;
function openTool(t){
  if(t===curTool) t=null;
  curTool=t;
  document.body.classList.toggle('tool-open', !!t && window.innerWidth>1100);
  document.querySelectorAll('.tool').forEach(p=>p.classList.toggle('open', p.id==='tool-'+t));
  const map={null:'map',capas:'capas',apoyos:'apoyos',dossier:'dossier'};
  ['map','capas','apoyos','dossier'].forEach(k=>{
    const r=document.getElementById('rb-'+k), b=document.getElementById('tb-'+k);
    const on=(map[t]||'map')===k;
    if(r)r.classList.toggle('active',on); if(b)b.classList.toggle('active',on);
  });
  if(t===null) closePanel();
}

/* eased camera */
let __animId=null;
function animateMap(tx,ty,ts,ms){
  if(__animId)cancelAnimationFrame(__animId);
  const fx=mX,fy=mY,fs=mScale,t0=performance.now();
  const ease=p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;
  function step(now){const p=Math.min(1,(now-t0)/ms),e=ease(p);
    mX=fx+(tx-fx)*e; mY=fy+(ty-fy)*e; mScale=fs+(ts-fs)*e; applyMap();
    if(p<1)__animId=requestAnimationFrame(step); else __animId=null;}
  __animId=requestAnimationFrame(step);
}
function flyTo(x,y,s,ms){s=Math.min(3,Math.max(0.6,s||2.2));animateMap(PROJ.W/2-x*s,PROJ.H/2-y*s,s,ms||520);}
mapZoom=function(f){const ns=Math.min(3,Math.max(0.6,mScale*f));const cx=PROJ.W/2,cy=PROJ.H/2;
  animateMap(cx-(cx-mX)*(ns/mScale),cy-(cy-mY)*(ns/mScale),ns,220);};
mapReset=function(){animateMap(0,0,1,340);};

/* HUD: coords, zoom %, scalebar */
const __applyMap=applyMap;
applyMap=function(){__applyMap();updateHUD();};
function updateHUD(){
  const z=document.getElementById('zoomPct'); if(z)z.textContent=Math.round(mScale*100)+'%';
  document.body.classList.toggle('z2',mScale>=1.5); document.body.classList.toggle('z3',mScale>=2.2);
  const svg=document.getElementById('mapsvg'); if(!svg)return;
  const r=svg.getBoundingClientRect(); if(!r.width)return;
  const pxPerUnit=r.width/PROJ.W*mScale, mPerPx=(111320/PROJ.scale)/pxPerUnit;
  const nice=[100,200,250,500,1000,2000,5000];
  let best=nice[0];
  for(const n of nice){const px=n/mPerPx;if(px>=56&&px<=150){best=n;break;} if(px<56)best=n;}
  const px=Math.round(best/mPerPx);
  const line=document.querySelector('#scaleBar .sbLine'), txt=document.getElementById('scaleTxt');
  if(line){line.style.width=Math.min(170,px)+'px';}
  if(txt){txt.textContent=best>=1000?(best/1000)+' km':best+' m';}
}
(function(){const svg=document.getElementById('mapsvg');if(!svg)return;
  svg.addEventListener('pointermove',e=>{
    const r=svg.getBoundingClientRect();
    const vx=(e.clientX-r.left)/r.width*PROJ.W, vy=(e.clientY-r.top)/r.height*PROJ.H;
    const mx=(vx-mX)/mScale, my=(vy-mY)/mScale;
    const lon=PROJ.minLon+(mx-PROJ.pad)/(PROJ.kx*PROJ.scale);
    const lat=PROJ.maxLat-(my-PROJ.pad)/PROJ.scale;
    const el=document.getElementById('coordsRead');
    if(el)el.textContent=lat.toFixed(4)+', '+lon.toFixed(4);
  });
  svg.addEventListener('dblclick',e=>{e.preventDefault();
    const r=svg.getBoundingClientRect();
    const vx=(e.clientX-r.left)/r.width*PROJ.W, vy=(e.clientY-r.top)/r.height*PROJ.H;
    const ns=Math.min(3,mScale*1.6);
    animateMap(vx-(vx-mX)*(ns/mScale), vy-(vy-mY)*(ns/mScale), ns, 300);
  });
  window.addEventListener('resize',updateHUD);
})();

/* legend hooks into setLayer */
const __setLayer=setLayer;
setLayer=function(l){__setLayer(l);
  const p=document.getElementById('legendPill');
  if(!p)return;
  if(l==='todo'){p.classList.remove('on');}
  else{p.querySelector('.d').style.background=LAYER_DOT[l]||'#94A3B8';p.querySelector('.lg-t').textContent=LAYER_NAMES[l]||l;p.classList.add('on');}
};

/* apoyos wraps */
const __addPin=addPin;
addPin=function(x,y,c){__addPin(x,y,c);showToast('Pin agregado · '+(CATS[c]||CATS.n).label,(CATS[c]||CATS.n).color);};
const __exportPins=exportPins;
exportPins=function(){if(!pins.length){showToast('No hay pines para exportar','#D97706');return;}__exportPins();showToast('Apoyos exportados ('+pins.length+')');};
const __toggleTerr=toggleTerrMode;
toggleTerrMode=function(){__toggleTerr();
  const on=document.body.classList.contains('terr-add');
  const d=document.getElementById('abDot'),t=document.getElementById('abTxt');
  if(d)d.style.background=(CATS[currentCat]||CATS.n).color;
  if(t)t.textContent='Modo añadir · '+(CATS[currentCat]||CATS.n).label+' · toca el mapa para marcar';
  if(on&&window.innerWidth<=720)openTool(null);
};
const __setCat=setCat;
setCat=function(c){__setCat(c);
  const d=document.getElementById('abDot'),t=document.getElementById('abTxt');
  if(d)d.style.background=(CATS[c]||CATS.n).color;
  if(t)t.textContent='Modo añadir · '+(CATS[c]||CATS.n).label+' · toca el mapa para marcar';
};
function changePinCat(i,c){if(!pins[i])return;pins[i].c=c;savePins();redrawPins();updateCounts();closePinMenu();showToast('Pin actualizado · '+(CATS[c]||CATS.n).label,(CATS[c]||CATS.n).color);}
function openPinMenu(i,ev){const p=pins[i];if(!p)return;
  const m=document.getElementById('pinMenu');
  const d=new Date(p.t);
  m.innerHTML='<div class="pm-t">Pin · '+(CATS[p.c]||CATS.n).label+' · '+d.toLocaleDateString('es-CL')+'</div>'+
    '<div class="pm-cats">'+Object.keys(CATS).map(k=>'<button style="background:'+CATS[k].color+'" class="'+(k===p.c?'cur':'')+'" title="'+CATS[k].label+'" onclick="changePinCat('+i+',\''+k+'\')"></button>').join('')+'</div>'+
    '<button class="pm-del" onclick="removePin('+i+');closePinMenu();showToast(\'Pin eliminado\',\'#DC2626\')">Eliminar pin</button>';
  m.style.display='block';
  const x=Math.min(window.innerWidth-210,(ev&&ev.clientX||200)+10), y=Math.min(window.innerHeight-150,(ev&&ev.clientY||200)+10);
  m.style.left=x+'px'; m.style.top=y+'px';
}
function closePinMenu(){document.getElementById('pinMenu').style.display='none';}
document.addEventListener('pointerdown',e=>{if(!e.target.closest('#pinMenu')&&!e.target.closest('.pin'))closePinMenu();});

/* search palette */
let SEARCH_ALL=searchIndex.map(i=>({cat:i.cat,q:i.q,text:i.text,sec:i.sec})).concat(SEARCH_EXTRA);
function searchData(){
  const q=document.getElementById('searchBox').value.toLowerCase().trim();
  const res=document.getElementById('searchResults');
  if(!q||q.length<2){res.style.display='none';return;}
  const score=i=>((i.cat==='PUNTO')?0:(i.cat==='CALLE')?1:2)-(i.q.startsWith(q)?0.5:0);
  const hits=SEARCH_ALL.filter(i=>i.q.includes(q)||q.split(' ').some(w=>w.length>2&&i.q.includes(w))).sort((a,b)=>score(a)-score(b)).slice(0,9);
  if(!hits.length){res.innerHTML='<div class="sr-item" style="color:var(--text3)">Sin resultados para “'+q+'”</div>';res.style.display='block';return;}
  res.innerHTML=hits.map((h,ix)=>'<div class="sr-item'+(ix===0?' hot':'')+'" onclick=\'goHit('+JSON.stringify(h).replace(/'/g,"&#39;")+')\'><span class="sr-cat">'+h.cat+'</span>'+h.text+'</div>').join('');
  res.style.display='block';
}
function goHit(h){
  document.getElementById('searchResults').style.display='none';
  document.getElementById('searchBox').value='';
  if(h.x!=null){openTool(null);flyTo(h.x,h.y,h.z||2.2);showToast(h.text,'#2952E3');}
  else if(h.sec){openPanel(h.sec);}
}
document.addEventListener('click',e=>{if(!e.target.closest('#searchResults')&&!e.target.closest('#searchBox'))document.getElementById('searchResults').style.display='none';});
document.addEventListener('keydown',e=>{
  if(e.key==='/'&&!e.target.matches('input,textarea')){e.preventDefault();document.getElementById('searchBox').focus();}
  if(e.key==='Escape'){document.getElementById('searchResults').style.display='none';closePinMenu();if(document.body.classList.contains('panel-open'))closePanel();else openTool(null);}
  if(e.key==='Enter'&&document.getElementById('searchResults').style.display==='block'){e.preventDefault();const first=document.querySelector('#searchResults .sr-item.hot');if(first)first.click();return;}
  if(e.target.matches('input,textarea'))return;
  if(e.key==='+'||e.key==='=')mapZoom(1.3);
  if(e.key==='-')mapZoom(0.77);
  if(e.key==='0')mapReset();
  if(e.key==='a'||e.key==='A')toggleTerrMode();
});
updateHUD();


