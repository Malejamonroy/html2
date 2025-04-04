const read = require('../leer.js');

let ci
let r
let t
let I
let cf
let n

ci = Number(read('Ingrese Capital a invertir: '));
r = Number(read('Ingrese tasa de interes Anual: '));
t = Number(read('Ingrese numero de años: '));
n = Number(read('Ingrese la cantidad de capitalizaciones anuales'))

cf = ci *(1 + r/n)**(n*t)

console.log(`Capital final obtenido: ${cf}`)