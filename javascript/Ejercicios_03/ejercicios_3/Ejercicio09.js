// Escribir un programa que imprima todos los números pares incluidos en un rango. Los
// extremos del rango se le pidan al usuario. Los extremos deben incluirse.
// Ejemplo:
// Ingresando 1 y 8, debe imprimir: 2 4 6 8
const read = require('../leer.js');

let desde = Number(read('Ingrese rango inferior: '));
let hasta = Number(read('Ingrese rango superior: '));

if (desde % 2 != 0)
    desde++;

for (let i = desde; i <= hasta; i += 2) {
    process.stdout.write(i + ' ');
}
console.log();