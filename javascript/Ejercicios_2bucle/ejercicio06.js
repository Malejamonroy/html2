//El programa generará un número aleatorio entre 0 y 100 y le pedirá al usuario que lo
//adivine. Cuando el usuario ingrese el número para ver si acertó, el programa le indicará si
// el número a adivinar es mayor, menor o bien si acertó. Cuando acierte, finaliza.
// Para generar un número aleatorio entre 0 y 100:
// int numero = (int)(Math.random() * 101);

const read = require('../leer.js');

console.log("Adivinemos un numero");
console.log("-----------------------");

//let num = Number(read("ingresa cualquier numero: "));
let nAleatorio = (Math.floor(Math.random() * 101));

do 
{
    num = Number(read("ingresa cualquier numero: ")) ;



    if (num > nAleatorio)
        {
            console.log(`El ${num} es Mayor que el  que tengo`);
        }
        else {
            if (num < nAleatorio)
                {
                    console.log(`El ${num} es menor que el que tengo`);
                }

        }

}while(num != nAleatorio) 

console.log (`El numero que pense era el ${nAleatorio}`);

