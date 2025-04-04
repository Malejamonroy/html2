const read = require('../leer.js');

const pi = Math.PI;

let radio;
let res_perimetro;
let res_area;

radio = read ('Ingrese el tamaño del radio: ');

res_perimetro = 2 * pi * radio
res_area = pi * radio**2

console.log ('El perimetro del circulo es: '+ res_perimetro);
console.log ('El area del circulo es: ' + res_area );
