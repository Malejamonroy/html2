// Pide al usuario un número n y usa un while para sumar los números 
// del 1 a n. Luego, muestra el resultado.

const read = require('../leer.js');
let n = Number(read('Ingrese Numero: '));
let suma = 0
let centinela=0

while(centinela <= n){
    suma += centinela;
    centinela++;
    
}console.log(suma);