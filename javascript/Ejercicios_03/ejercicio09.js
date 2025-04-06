const read = require('../leer.js');
//Escribir un programa que imprima todos los números pares incluidos en un rango. Los
//extremos del rango se le pidan al usuario. Los extremos deben incluirse.
//Ejemplo:
//Ingresando 1 y 8, debe imprimir: 2 4 6 8

let extremo1 = Number(read("Ingresa un el inicio del rango: "));
let extremo2 = Number(read("Ingresa el final del rango:  "));

if (extremo1%2 != 0)
{
    extremo1++;
}

for(let i = extremo1; i <= extremo2; i+=2){
    //process.stdout.write(`${i} `)
    console.log(`${i}`)
}
 