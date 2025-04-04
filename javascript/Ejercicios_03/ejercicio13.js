const read = require('../leer.js');

//Escribir un programa que imprima por pantalla todas las fichas de dominó, de una por
//línea y sin repetir.
//0 : 0
//0 : 1

for(let i = 0; i <= 6; i++)
{
    for(let j=0; j<= i; j++){
        process.stdout.write(`${j}:${i} `);
    }console.log('\n')
}