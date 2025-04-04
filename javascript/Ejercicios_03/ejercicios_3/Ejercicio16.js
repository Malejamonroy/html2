// Escribir un programa que pida al usuario un número entero positivo mayor que 2 y
// muestre por pantalla si es un número primo o no.

const read = require('../leer.js');
let num = Number(read('Ingrese valor positivo: '));
let esPrimo = true;
if (num > 2) {
    for (let i = 3; i <= Math.sqrt(num) && esPrimo; i += 2) {
        if (num % i == 0)
            esPrimo = false;
    }
}
let no = '';
if (!esPrimo)
    no = 'no ';

console.log(`${num} ${no}es primo`);