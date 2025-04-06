const read = require('../leer.js');

// Repetir el ejercicio anterior, pero ingresando un número entero de cualquier cantidad de
// cifras.

let num = Number(read("Ingrese numero entero: "))
let res

for(let i = 1; num != 0; i++)
{
    res = (num % 10)
    num= Math.floor(num/10); 
    console.log(res)
} 