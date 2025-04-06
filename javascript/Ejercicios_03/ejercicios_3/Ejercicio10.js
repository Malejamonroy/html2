// Dado un número entero n, imprimir su tabla de multiplicar del 1 al 9.
const read = require('../leer.js');

let n = Number(read('Ingrese valor: '));
console.log(`TABLA DEL ${n}`);
for (let i = 0; i <= 9; i++) {
    process.stdout.write(`${n} x ${i} = ${n*i}`);
    console.log();
}