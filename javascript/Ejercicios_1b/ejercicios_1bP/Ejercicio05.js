// Hacer un programa que Dado un año indicar si es bisiesto. Un año es bisiesto si es un
// número divisible por 4, pero si es divisible por 100 debe ser es divisible por 400.
const read = require('../leer.js');

let anio = Number(read('Ingrese año: '));
let esBisiesto = 'NO ';

if (anio % 400 == 0 || anio % 4 == 0 && anio % 100 != 0){
    esBisiesto = '';
}

console.log(`El año ${anio} ${esBisiesto}es bisiesto`);