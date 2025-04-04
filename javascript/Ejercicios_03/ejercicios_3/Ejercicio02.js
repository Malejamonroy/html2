// Imprimir la suma de n números ingresados por teclado. La cantidad de números (n) se
// solicita al usuario al principio y se ingresa por teclado.
const read = require('../leer.js');

let cant = Number(read('Ingresa cantidad de valores a procesar: '));
let suma = 0;
let num;

for (let i = 1; i <= cant; i++) {
    num = Number(read('valor: '));
    suma += num;
}

console.log(`La suma es ${suma}`);
