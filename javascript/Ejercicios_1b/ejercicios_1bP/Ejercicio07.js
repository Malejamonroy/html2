// Suponiendo que el primer día del año fue lunes, escribir un programa que reciba un número
// con el día del año (de 1 a 366) e imprima el día de la semana que le toca. Por ejemplo: si
// recibe 3 debe imprimir ’miércoles’, si recibe 9 debe imprimir ’martes’
const read = require('../leer.js');

let nroDia = Number(read('Ingrese nro de día: '));

let dia = nroDia % 7;

let nombreDia;

// if (dia == 0)
//     nombreDia = 'Domingo';
// if (dia == 1)
//     nombreDia = 'Lunes';
// if (dia == 2)
//     nombreDia = 'Martes';
// if (dia == 3)
//     nombreDia = 'Miércoles';
// if (dia == 4)
//     nombreDia = 'Jueves';
// if (dia == 5)
//     nombreDia = 'Viernes';
// if (dia == 6)
//     nombreDia = 'Sábado';

switch(dia) {
    case 0:
        nombreDia = 'Domingo';
        break;
    case 1:
        nombreDia = 'Lunes';
        break;
    case 2:
        nombreDia = 'Martes';
        break;
    case 3:
        nombreDia = 'Miércoles';
        break;
    case 4:
        nombreDia = 'Jueves';
        break;
    case 5:
        nombreDia = 'Viernes';
        break;
    case 6:
        nombreDia = 'Sábado';
}

console.log(`El día ${nroDia} será ${nombreDia}`);
