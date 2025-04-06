const read = require('../leer.js');

//Escribir un programa que pida al usuario un número entero positivo mayor que 2 y
//muestre por pantalla si es un número primo o no.

let num = Number(read('Ingrese un numero: '))
let esPrimo = Boolean(true)
 
if (num > 2){
    for(let i=2 ;i < num; i++)
    {
        if(num%i == 0){
          esPrimo= false
        }
    }console.log(`El ${num} ${esPrimo}`);

}