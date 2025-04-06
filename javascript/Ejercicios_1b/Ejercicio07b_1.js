const read = require('../leer.js');

let nroDia = Number(read('Ingrese numero '))

let dia = nroDia%7

let nombreDia;

switch(dia){
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
        nombreDia = 'Miercoles'; 
        break;
    case 4:
        nombreDia = 'Jueves';
        break;
    case 5:
        nombreDia = 'Viernes';
        break;
    case 6:
        nombreDia = 'Sabado';
        break;
}

console.log(`El dia ${nroDia} séra ${nombreDia}`);