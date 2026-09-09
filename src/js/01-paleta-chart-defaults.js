/* ════════ PALETA / CHART DEFAULTS ════════ */
/* PALETA DE 3 ACENTOS — gold · rojo · verde — + rampa neutra (grises cálidos) */
const C = {ink:'#06090B',paper:'#CDD6D3',paper2:'#B4BFBC',rule:'#223030',
  muted:'#586765',muted2:'#7E8C89',
  n1:'#3A4644',n2:'#586765',n3:'#7E8C89',n4:'#9FACA9',
  red:'#FF5A4D',redL:'#FF8B82',redD:'#5C1A16',
  green:'#3FD37E',greenL:'#7FE3AC',greenD:'#123D2B',
  gold:'#E8AE3C',goldL:'#F2CE84',goldD:'#6E5018'};
const goldRamp=['#6E5018','#A07823','#E8AE3C','#EEC25F','#F2CE84'];
const redRamp=['#FF5A4D','#FF6E62','#FF8077','#FF8B82'];
Chart.defaults.font.family = "'IBM Plex Mono', monospace";
Chart.defaults.font.size = 11;
Chart.defaults.color = C.muted2;
Chart.defaults.plugins.legend.labels.color = C.paper2;
Chart.defaults.plugins.legend.labels.boxWidth = 12;
Chart.defaults.plugins.legend.labels.boxHeight = 12;
Chart.defaults.plugins.legend.labels.padding = 14;

const tooltipStyle = {
  backgroundColor:'#080B12', borderColor:C.rule, borderWidth:1,
  titleColor:C.paper, bodyColor:C.paper2, padding:11, cornerRadius:8,
  titleFont:{family:"'JetBrains Mono', monospace", size:11},
  bodyFont:{family:"'Inter', sans-serif", size:12}, displayColors:true
};
const gridStyle = {color:'rgba(42,47,64,0.55)', drawBorder:false};
const fmt = n => n.toLocaleString('es-CL');

