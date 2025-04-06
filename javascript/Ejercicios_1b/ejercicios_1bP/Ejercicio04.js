// Hacer un programa que dado un número entero n, indica si es o no par.

const read = require('../leer.js');

let num;

num = Number(read('Ingrese valor: '));

let esPar = num % 2 == 0;

if (esPar)
    console.log('Es par');
else
    console.log('Es impar');