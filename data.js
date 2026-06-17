// ============================================================
// data.js — Códigos y configuraciones de Tecnología de Siembra
// Agronorte — Actualizar este archivo cuando cambien los códigos
// ============================================================

const DATA = {

  // ----------------------------------------------------------
  // KIT DE LANZA SEEDSTAR
  // Común a todas las configuraciones con monitoreo
  // ----------------------------------------------------------
  kitLanza: [
    { code: "BPF11284", desc: "Kit de Lanza SeedStar — arnés principal", qty: 1 },
    { code: "AA70072",  desc: "Módulo SeedStar XP",                       qty: 1 },
    { code: "AA70073",  desc: "Arnés extensión",                           qty: 1 },
    { code: "AA70074",  desc: "Conector ISO",                              qty: 1 },
    { code: "AA102798", desc: "Soporte lanza",                             qty: 1 },
    { code: "AT157547", desc: "Cable conexión",                            qty: 1 },
    { code: "A71505",   desc: "Adaptador sensor",                          qty: 1 },
  ],

  // ----------------------------------------------------------
  // SENSORES DE MONITOREO — Tractor con conector ISO
  // Clave: "16@52", "18@52", "20@52", "22@52", "24@52", "+24 hasta 30@52"
  // ----------------------------------------------------------
  sensoresMonitoreo: {
    "16@52": [
      { code: "AJ61138", desc: "Sensor siembra 16-52 tipo A", qty: 1 },
      { code: "AJ61136", desc: "Sensor siembra 16-52 tipo B", qty: 1 },
      { code: "AJ61135", desc: "Sensor siembra 16-52 tipo C", qty: 1 },
      { code: "AA61909", desc: "Sensor de semilla doble",     qty: 16 },
    ],
    "18@52": [
      { code: "AJ61142", desc: "Sensor siembra 18-52 tipo A", qty: 1 },
      { code: "AJ61140", desc: "Sensor siembra 18-52 tipo B", qty: 1 },
      { code: "AA61909", desc: "Sensor de semilla doble",     qty: 18 },
    ],
    "20@52": [
      { code: "AA72059", desc: "Sensor siembra 20-52", qty: 1 },
      { code: "AA61909", desc: "Sensor de semilla doble", qty: 20 },
    ],
    "22@52": [
      { code: "AA72059", desc: "Sensor siembra 22-52", qty: 1 },
      { code: "AA61909", desc: "Sensor de semilla doble", qty: 22 },
    ],
    "24@52": [
      { code: "AA72059", desc: "Sensor siembra 24-52", qty: 1 },
      { code: "AA61909", desc: "Sensor de semilla doble", qty: 24 },
    ],
    "+24 hasta 30@52": [
      { code: "AA71519", desc: "Sensor siembra +24 hasta 30@52", qty: 1 },
      { code: "AA61909", desc: "Sensor de semilla doble",        qty: 30 },
    ],
  },

  // ----------------------------------------------------------
  // SENSORES DE MONITOREO — Con Row Command (rama diferente)
  // ----------------------------------------------------------
  sensoresRC: {
    "16@52": [
      { code: "AA72053", desc: "Sensor monitoreo RC 16-52", qty: 1 },
      { code: "AA61909", desc: "Sensor de semilla doble",   qty: 16 },
    ],
    "18@52": [
      { code: "AA72059", desc: "Sensor monitoreo RC 18-52", qty: 1 },
      { code: "AJ61909", desc: "Sensor de semilla doble",   qty: 18 },
    ],
    "20@52": [
      { code: "AA72059", desc: "Sensor monitoreo RC 20-52", qty: 1 },
      { code: "AA61909", desc: "Sensor de semilla doble",   qty: 20 },
    ],
    "22@52": [
      { code: "AA72059", desc: "Sensor monitoreo RC 22-52", qty: 1 },
      { code: "AA61909", desc: "Sensor de semilla doble",   qty: 22 },
    ],
    "24@52": [
      { code: "AA72059", desc: "Sensor monitoreo RC 24-52", qty: 1 },
      { code: "AA61909", desc: "Sensor de semilla doble",   qty: 24 },
    ],
    "+24 hasta 30@52": [
      { code: "AA72059", desc: "Sensor monitoreo RC +24@52", qty: 1 },
      { code: "AA61909", desc: "Sensor de semilla doble",    qty: 30 },
    ],
  },

  // ----------------------------------------------------------
  // DOSIS VARIABLE — Sensor de movimiento
  // ----------------------------------------------------------
  sensorMovimiento: [
    { code: "5PL44758", desc: "Sensor movimiento principal",  qty: 1 },
    { code: "AA92694",  desc: "Soporte sensor movimiento",    qty: 1 },
    { code: "A61237",   desc: "Cable sensor movimiento",      qty: 2 },
    { code: "5PL45197", desc: "Conector sensor movimiento",   qty: 1 },
  ],

  // ----------------------------------------------------------
  // DOSIS VARIABLE — Mandos hidráulicos (2 módulos base)
  // ----------------------------------------------------------
  mandosHidraulicos: [
    { code: "BA29574", desc: "Módulo hidráulico principal", qty: 1 },
    { code: "BA29800", desc: "Electroválvula",              qty: 1 },
    { code: "BA29573", desc: "Bloque hidráulico",           qty: 1 },
    { code: "A69997",  desc: "Manguera alta presión",       qty: 1 },
    { code: "A69996",  desc: "Manguera retorno",            qty: 1 },
    { code: "14M7274", desc: "Fitting hidráulico",          qty: 2 },
    { code: "A44705",  desc: "Adaptador hidráulico",        qty: 2 },
    { code: "24M7028", desc: "Sello hidráulico",            qty: 2 },
    { code: "19M7408", desc: "Tornillo fijación",           qty: 2 },
  ],

  // ----------------------------------------------------------
  // CORTE POR SECCIONES — Rate Controller 3
  // ----------------------------------------------------------
  rateController: [
    { code: "0331PC",   desc: "Rate Controller 3",    qty: 1 },
    { code: "BPF11284", desc: "Arnés conexión RC",    qty: 1 },
  ],

  // ----------------------------------------------------------
  // Mapa surcos → número entero (para calcular cantidades)
  // ----------------------------------------------------------
  surcosCantidad: {
    "16@52":           16,
    "18@52":           18,
    "20@52":           20,
    "22@52":           22,
    "24@52":           24,
    "+24 hasta 30@52": 30,
  },

  // ----------------------------------------------------------
  // ROW COMMAND — Tipos de mando
  // qty_surcos: true → la cantidad se calcula como 1 por surco
  // ----------------------------------------------------------
  mandos: {
    "Mando a cadena": {
      items: [
        { code: "BA31572", desc: "Mando a cadena", qty_surcos: true },
      ],
    },
    "Mando Pro-Shaft - manchon": {
      items: [
        { code: "BA32756", desc: "Pro-Shaft manchon",  qty: 1 },
        { code: "AA54374", desc: "Eje adaptador",      qty: 1 },
        { code: "AA57580", desc: "Acople manchon",     qty_surcos: true },
      ],
    },
    "Mando Pro-Shaft - Exagonal": {
      items: [
        { code: "AA81649", desc: "Pro-Shaft exagonal", qty: 1 },
        { code: "AA54374", desc: "Eje adaptador",      qty: 1 },
        { code: "AA57580", desc: "Acople exagonal",    qty_surcos: true },
      ],
    },
  },

  // ----------------------------------------------------------
  // ROW COMMAND — Embrague en la barra
  // ----------------------------------------------------------
  embrague: [
    { code: "AA81651", desc: "Embrague en la barra", qty: 1 },
  ],

  // ----------------------------------------------------------
  // ROW COMMAND — Módulos por surcos (automático, no elegible)
  // Regla: 16/18/20@52 → 11-20 módulos | 22/24/+24@52 → 21-30 módulos
  // ----------------------------------------------------------
  modulosPorSurcos: {
    "16@52":            { controlador: "AA76762", descCtrl: "Controlador módulo (11-20)", arnes: 2 },
    "18@52":            { controlador: "AA76762", descCtrl: "Controlador módulo (11-20)", arnes: 2 },
    "20@52":            { controlador: "AA76762", descCtrl: "Controlador módulo (11-20)", arnes: 2 },
    "22@52":            { controlador: "AA70059", descCtrl: "Controlador módulo (21-30)", arnes: 3 },
    "24@52":            { controlador: "AA70059", descCtrl: "Controlador módulo (21-30)", arnes: 3 },
    "+24 hasta 30@52":  { controlador: "AA70059", descCtrl: "Controlador módulo (21-30)", arnes: 3 },
  },

  // ----------------------------------------------------------
  // PRECIOS — costo y precio de venta por código (USD + IVA)
  // Actualizar aquí cuando cambien los precios
  // ----------------------------------------------------------
  precios: {
    "BPF11284": { costo: 526.11,  precio: 668.16,  iva: "21%" },
    "AA70072":  { costo: 612.57,  precio: 777.96,  iva: "21%" },
    "AA70073":  { costo: 195.15,  precio: 247.84,  iva: "21%" },
    "AA70074":  { costo: 102.28,  precio: 129.90,  iva: "21%" },
    "AA102798": { costo: 1720.16, precio: 2184.60, iva: "21%" },
    "AT157547": { costo: 73.00,   precio: 92.71,   iva: "21%" },
    "A71505":   { costo: 52.39,   precio: 66.54,   iva: "21%" },
    "AJ61138":  { costo: 227.01,  precio: 288.30,  iva: "21%" },
    "AJ61136":  { costo: 142.88,  precio: 181.46,  iva: "21%" },
    "AJ61135":  { costo: 358.50,  precio: 455.30,  iva: "21%" },
    "AJ61142":  { costo: 75.06,   precio: 95.33,   iva: "21%" },
    "AJ61140":  { costo: 461.68,  precio: 586.33,  iva: "21%" },
    "AA72059":  { costo: 2789.66, precio: 3542.87, iva: "21%" },
    "AA71519":  { costo: 3746.67, precio: 4758.27, iva: "21%" },
    "AA61909":  { costo: 172.72,  precio: 219.35,  iva: "21%" },
    "AA72053":  { costo: 2256.38, precio: 2865.60, iva: "21%" },
    "AJ61909":  { costo: 172.72,  precio: 219.35,  iva: "21%" },
    "5PL44758": { costo: 29.71,   precio: 37.73,   iva: "21%" },
    "AA92694":  { costo: 333.93,  precio: 424.09,  iva: "21%" },
    "A61237":   { costo: 11.14,   precio: 14.15,   iva: "21%" },
    "5PL45197": { costo: 7.02,    precio: 8.92,    iva: "21%" },
    "BA29574":  { costo: 7689.44, precio: 9765.59, iva: "21%" },
    "BA29800":  { costo: 818.14,  precio: 1039.04, iva: "21%" },
    "BA29573":  { costo: 99.62,   precio: 126.52,  iva: "21%" },
    "A69997":   { costo: 11.70,   precio: 14.86,   iva: "21%" },
    "A69996":   { costo: 13.52,   precio: 17.17,   iva: "21%" },
    "14M7274":  { costo: 0.31,    precio: 0.39,    iva: "21%" },
    "A44705":   { costo: 16.57,   precio: 21.04,   iva: "21%" },
    "24M7028":  { costo: 0.29,    precio: 0.37,    iva: "21%" },
    "19M7408":  { costo: 1.08,    precio: 1.37,    iva: "21%" },
    "0331PC":   { costo: 2952.45, precio: 3645.00, iva: "21%" },
    "BA31572":  { costo: 797.42,  precio: 1012.72, iva: "21%" },
    "BA32756":  { costo: 706.04,  precio: 896.67,  iva: "21%" },
    "AA81649":  { costo: 543.84,  precio: 690.68,  iva: "21%" },
    "AA54374":  { costo: 186.46,  precio: 236.80,  iva: "21%" },
    "AA57580":  { costo: 104.45,  precio: 132.65,  iva: "21%" },
    "AA81651":  { costo: 1801.91, precio: 2288.43, iva: "21%" },
    "AA76762":  { costo: 1110.52, precio: 1410.36, iva: "21%" },
    "AA70059":  { costo: 1062.72, precio: 1349.65, iva: "21%" },
    "AH224250": { costo: 405.77,  precio: 515.33,  iva: "21%" },
    "IAMS":     { costo: 70.00,   precio: 70.00,   iva: "21%" },
  },

};
