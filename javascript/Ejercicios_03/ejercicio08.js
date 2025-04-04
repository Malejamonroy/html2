const read = require('../leer.js');
//Dado un número entero n positivo, imprimir su factorial.
//0! = 1 1! = 1 2! = 2x1 = 2 3! = 3x2x1 = 6 4! = 4x3x2x1 = 24 5! = 120

let num = Number(read("Ingrese un numero"));
let factorial= Number(1)

for( let i= num; i > 0; i--){
 factorial *= i

}console.log(`El factorial de ${num} es: ${factorial}`);