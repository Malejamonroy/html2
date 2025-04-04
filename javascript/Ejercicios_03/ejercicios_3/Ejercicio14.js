// Escribir un programa que pida al usuario un número entero positivo y muestre por
// pantalla la cuenta atrás desde ese número hasta cero separados por comas.

const read = require('../leer.js');
let num = Number(read('Ingrese valor: '));

for (let i = num; i >= 0; i--) {
    process.stdout.write(`${i}`);
    if (i > 0)
        process.stdout.write(`, `);
}
console.log();