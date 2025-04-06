const read = require('../leer.js');
// Realizar un programa que adivine el número (entre 0 y 100) que ha pensado el usuario. En
// cada paso, el programa propone un número y el usuario debe contestar, introduciendo su
// contestación como dato, si ha acertado, o bien si el número que ha propuesto el
// ordenador es mayor o es menor que el que tenía pensado. Por ejemplo, ingresando:
// 0 –> Acierto
// 1 –> El valor propuesto es mayor
// -1 –> El valor propuesto es Menor

let min = 0;
let max = 100;
let resp;
let intento;
let cant = 0;

do {
    intento = Math.trunc((min + max) / 2);
    cant++;
    console.log(`¿Tu número es el ${intento}?`);
    resp = Number(read('0 > Acierto : 1 > El valor propuesto es mayor : -1 > El valor propuesto es menor'));
    switch (resp){
        case 1:
            max = intento;
            break;
        case -1:
            min = intento;
            break;
    }
} while (resp != 0);
console.log(`Lo he adivinado en ${cant} intentos`);