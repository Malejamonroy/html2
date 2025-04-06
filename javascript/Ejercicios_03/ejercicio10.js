const read = require('../leer.js');

//Dado un número entero n, imprimir su tabla de multiplicar del 1 al 9.

let num= Number(read("Ingrese numero: "))


for (let i = 1; i <= 9 ; i++)
    {
       console.log(`${i} X ${num} ${num * i}`)
} 