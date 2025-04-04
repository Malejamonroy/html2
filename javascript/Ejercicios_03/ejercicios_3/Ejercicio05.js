// De una lista de n números ingresados por teclado, imprimir el mayor y el menor valor.
const read = require('../leer.js');

let cant = Number(read('Ingresa cantidad de valores a procesar: '));
let num = Number(read('valor: '));
let mayor = num;
let menor = num;

for (let i = 2; i <= cant; i++) {
    if (num > mayor)
        mayor = num;
    if (num < menor)
        menor = num;
    num = Number(read('valor: '));
}

console.log(`El mayor es ${mayor}`);
console.log(`El menor es ${menor}`);
