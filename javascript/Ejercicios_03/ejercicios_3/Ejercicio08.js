// Dado un número entero n positivo, imprimir su factorial.
// 0! = 1 1! = 1 2! = 2x1 = 2 3! = 3x2x1 = 6 4! = 4x3x2x1 = 24 5! = 120
const read = require('../leer.js');

let num = Number(read('Ingrese valor: '));
let fact = 1;

for (let i = 1; i <= num; i++) {
    fact *= i;
}

console.log(`${num}! = ${fact}`);
