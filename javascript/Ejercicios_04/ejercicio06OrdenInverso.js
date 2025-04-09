const read = require('../leer.js');

// Ingresando un valor entero, muestre por pantalla sus dígitos en orden inverso, por ejemplo:
// INGRESO: 3589, SALIDA: 9853.

let num =Number(read("Ingrese numero: "));
let entrada = num
let salida = 0
let res

for(let i=1; num != 0; i++)
    {
        res = (num % 10);
        num= Math.floor(num/10); 
        salida = salida * 10 + res 
    } 
    console.log(`Ingreso${entrada}, Salida ${salida}`);