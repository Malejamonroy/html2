const read = require('../leer.js');

//Imprimir por pantalla los números naturales, desde el 1 hasta el número ingresado por
//teclado por el usuario, incluido.

let cant = Number(read('Ingrese numero'));
let i = 1 //i = es el contador

for (let i=1;i<=cant;i++)
    {
    console.log(`Procesando ${i}`)
}