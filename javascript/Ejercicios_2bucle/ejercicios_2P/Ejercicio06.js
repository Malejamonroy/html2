const read = require('../leer.js');
// El programa generará un número aleatorio entre 0 y 100 y le pedirá al usuario que lo
// adivine. Cuando el usuario ingrese el número para ver si acertó, el programa le indicará si
// el número a adivinar es mayor, menor o bien si acertó. Cuando acierte, finaliza.
// Para generar un número aleatorio entre 0 y 100:
// int numero = (int)(Math.random() * 101);

let num = Math.trunc(Math.random() * 101);
console.log(num);
let intento;

do {
    intento = Number(read('Adivina mi número: '));
    if (intento > num)
        console.log('tu número es mayor');
    if (intento < num)
        console.log('tu número es menor');
} while (num != intento);

console.log('Enhorabuena!! has acertado');