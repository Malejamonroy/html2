const read = require('../leer.js');

let ci
let r
let t
let I

ci = Number(read('Ingrese Capital a invertir: '));
r = Number(read('Ingrese tasa de interes Anual: '));
t = Number(read('Ingrese numero de años: '));

I= ci * r * t

console.log('Imtereses a Retirar' + I);