// Escriba un programa que pida un número entero mayor que cero y que escriba sus
// divisores.
const read = require('../leer.js');
let num = Number(read('Ingrese valor positivo: '));

for (let i = 1; i <= num; i++) {
    if (num % i == 0)
        process.stdout.write(`${i} `);
}
console.log();