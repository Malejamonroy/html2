const read = require('../leer.js');
//Imprimir por pantalla la suma de los n primeros números naturales, ingresando n por
//teclado.

let ingNum = Number(read('Ingrese numero:  '));
let sumatoria = Number(0);

for (let s=1; s <= ingNum; s++)
    {
        sumatoria += s //= sumatoria+s

} console.log(sumatoria)