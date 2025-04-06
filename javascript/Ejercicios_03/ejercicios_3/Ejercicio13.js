// Escribir un programa que imprima por pantalla todas las fichas de dominó, de una por
// línea y sin repetir.
// 0 : 0
// 0 : 1
// …

const read = require('../leer.js');

for (let i = 0; i <= 6; i++) {
    for (let j = i; j <= 6; j++){
        console.log(`${i} : ${j}`);
    }
}