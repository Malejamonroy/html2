// Escribir un programa que imprima las tablas del 1 al 9.
const read = require('../leer.js');


for (let i = 1; i <= 9; i++) {
    console.log(`\nTABLA DEL ${i}`);
    for (let j = 0; j <= 9; j++){
        process.stdout.write(`${i} x ${j} = ${i * j}`);
        console.log();
    }
}