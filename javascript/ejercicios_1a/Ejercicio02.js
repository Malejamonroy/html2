const read = require('../leer.js');

let base;
let altura;
let res_perimetro;
let res_area;

base = read ('Ingrese el tamaño de la base: ');
altura = read ('Ingrese el tamaño de la altura: ');

res_perimetro = 2 * base + 2 * altura;
res_area = base * altura;

console.log('El perimetro es: '+ res_perimetro );
console.log('El area es: '+ res_area );

