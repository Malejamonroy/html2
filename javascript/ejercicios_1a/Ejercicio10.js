const read = require('../leer.js');

let a
let b
let h

a = Number(read('Ingrese numero: '));
b = Number(read('Ingrese numero: '));

h = Math.sqrt(a**2 + b**2)

console.log(`El valor de la hipotenusa es: ${h}` );