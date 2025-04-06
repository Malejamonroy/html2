// Imprimir por pantalla la suma de los n primeros números naturales, ingresando n por
// teclado.

const read = require('../leer.js');

let n = Number(read('Ingresa n: '));
let suma = 0;

for (let i = 1; i <= n; i++) {
    suma += i;
}

console.log(suma);
console.log(n * (n + 1) / 2);
