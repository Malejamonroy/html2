const read = require('../leer.js');

let num1, num2, num3
let mayor;
let menor;

num1 = Number(read('Ingrese numero: '));
num2 = Number(read('Ingrese numero: '));
num3 = Number(read('Ingrese numero: '));
if (num1 > num2 && num1 > num3)
{
    mayor = num1;  
}
if (num2 > num1 && num2 > num3)
{
    mayor = num2;
}
if (num3 > num1 && num3 > num2)
{
    mayor = num3;
}
if (num1 < num2 && num1 < num3)
{
    menor = num1;
}
if (num2 < num1 && num2 < num3)
{
   menor = num2;
}
if (num3 < num1 && num3 < num2)
{
    menor = num3;
}

console.log ('El numero menor es: ' + menor );
console.log ('El numero mayor es: ' + mayor );
