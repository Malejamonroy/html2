// Realizar un programa que adivine el número (entre 0 y 100) que ha pensado el usuario. En
// cada paso, el programa propone un número y el usuario debe contestar, introduciendo su
// contestación como dato, si ha acertado, o bien si el número que ha propuesto el
// ordenador es mayor o es menor que el que tenía pensado. Por ejemplo, ingresando:
// 0 –> Acierto
// 1 –> El valor propuesto es mayor
// -1 –> El valor propuesto es Menor

const read = require('../leer.js');

let nAleatorio
let nMayor = 100 ;
let nMenor = 0;
let centinela;


console.log (`Piensa en un número entre el 0 al 100`)


do {
    nAleatorio = (Math.floor((nMayor-nMenor)/2)+nMenor);
    console.log(`Este es el numero que pensaste? ${nAleatorio}`);
    centinela = read(`Si el numero es mayor marca 1 , si es menor marca -1 y si acerto marca 0 `);
    if(centinela == -1)
    {
        nMayor = nAleatorio;
    }
    if (centinela == 1)
    {
        nMenor = nAleatorio;
    }


}
while(centinela != 0)

    console.log(`El numero que pensaste es : ${nAleatorio}`);

