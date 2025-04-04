const read = require('../leer.js');

let base;
let altura;
let res_area;

base = read ('Ingrese el tamaño de la base: ');
altura = read ('Ingrese el tamaño de la altura: ');

res_area = (base * altura)/2;

console.log('El area es: '+ res_area);
