const read = require('../leer.js');

//Determine si un valor entero ingresado por teclado es un palíndromo (capicúa).


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

if ( entrada == salida)
{
    console.log ("Es capicúa")
}
else
{console.log("No es capicúa")}

