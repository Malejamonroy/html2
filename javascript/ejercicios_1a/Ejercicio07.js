const read = require('../leer.js');

let num1, num2;
let mayor;
let menor;

num1 = Number(read('Ingrese numero: '));
num2 = Number(read('Ingrese numero: '));
if (num1 > num2)
{
    mayor = num1;
    menor = num2;
}
else
{
    menor = num1;
    mayor = num2;
}
console.log ('El numero menor es: ' + menor );
console.log ('El numero mayor es: ' + mayor );
