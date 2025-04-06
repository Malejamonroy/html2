const read = require('../leer.js');

let num1, num2
let res_suma
let res_resta
let res_prod
let res_divi

num1 = Number(read('Ingrese numero: '));
num2 = Number(read('Ingrese numero: '));

res_suma = num1 + num2;
res_resta = num1 - num2;
res_prod = num1 * num2;
res_divi = num1 / num2;

console.log ('Resultado de la suma es: ' + res_suma);
console.log ('Resultado de diferencia es: ' + res_resta);
console.log ('Resultado del producto es: ' + res_prod);
console.log ('Resultado de la divisíon es: ' + res_divi);
