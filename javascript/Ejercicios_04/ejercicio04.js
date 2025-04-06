const read = require('../leer.js');

//Ingresando un número entero por teclado de 4 cifras, mostrar sus dígitos uno por línea.

let num = Number(read("Ingrese numero de 4 cifras"))
let res

for(let i = 1; i<=4; i++)
{
    res = (num % 10)
    num= Math.floor(num/10); 
    console.log(res)
} 