const read = require('../leer.js');
//Solicite al usuario un número que represente el mes e imprima su nombre.

let num = Number(read("Ingrese numero que represente el mes: "))

switch(num){
    case 1:
        console.log ("Enero");
        break
    case 2:
        console.log ("Febrero");
        break
    case 3:
        console.log ("Marzo");
        break
    case 4:
        console.log ("Abril");
        break
    case 5:
        console.log ("Mayo");
        break
    case 6:
        console.log ("Junio");
        break
    case 7:
        console.log ("Julio");
        break
    case 8:
        console.log ("Agosto");
        break
    case 9:
        console.log ("Septiembre");
        break
    case 10:
        console.log ("Octubre");
        break
    case 11:
        console.log ("Noviembre");
        break
    case 12:
        console.log ("Diciembre");
        break
    
}console.log("Fin");