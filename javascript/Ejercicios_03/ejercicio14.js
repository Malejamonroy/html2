const read = require('../leer.js');
//Escribir un programa que pida al usuario un número entero positivo y muestre por
//pantalla la cuenta atrás desde ese número hasta cero separados por comas.

console.log("ingrese un numero positivo y entero");
let num = Number(read("ingrese un numero: "));
for(let i= num; i>=0 ;i--){
    process.stdout.write(`${i}, `);
}
