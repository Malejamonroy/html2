// Siguiendo la misma metodología de carga, calcular la cantidad de valores >= 0 y la cantidad
// menores que 0.
const read = require('../leer.js');

let cant = Number(read('Ingresa cantidad de valores a procesar: '));

let cantPos = 0;
let cantNeg;

for (let i = 1; i <= cant; i++) {
    num = Number(read('valor: '));
    if (num >= 0)
        cantPos++;
}
cantNeg = cant - cantPos;

console.log(`Ingreso ${cantPos} valores >= 0`);
console.log(`Ingreso ${cantNeg} valores < 0`);
