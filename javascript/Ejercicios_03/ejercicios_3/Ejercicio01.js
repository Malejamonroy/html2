// Imprimir por pantalla los números naturales, desde el 1 hasta el número ingresado por
// teclado por el usuario, incluido.
const read = require('../leer.js');

let limite = Number(read('Ingresa hasta qué número: '));

for (let i = 1; i <= limite; i++) {
    console.log(i);
}

for (let i = 1; i <= limite; i++) {
    process.stdout.write(`${i} `);
}
console.log();
