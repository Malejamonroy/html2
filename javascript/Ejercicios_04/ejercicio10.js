const read = require('../leer.js');

// Solicite al usuario un número que represente el mes e imprima su nombre y la cantidad de
// días que tiene (no contemplar años bisiestos).

let mes = Number(read("Ingrese numero que represente el mes: "))
let dias
switch(mes){
    case 1:
       mes = "Enero";
       dias = " 31 Dias";
        break
    case 2:
        mes = "Febrero";
        dias = "28 Dias";
        break
    case 3:
        mes = "Marzo";
        dias = "31 Dias";
        break
    case 4:
        mes = "Abril";
        dias = "30 Dias";
        break
    case 5:
        mes = "Mayo";
        dias = "31 Dias";
        break
    case 6:
        mes = "Junio";
        dias = "30 Dias";
        break
    case 7:
        mes = "Julio";
        dias = "31 Dias";
        break
    case 8:
        mes = "Agosto";
        dias = "31 Dias";
        break
    case 9:
        mes = "Septiembre";
        dias = "30 Dias";
        break
    case 10:
        mes = "Octubre";
        dias = "31 Dias";
        break
    case 11:
        mes = "Noviembre";
        dias = "30 Dias";
        break
    case 12:
        mes = "Diciembre";
        dias = "31 Dias";
        break
    
}console.log (`El mes es: ${mes} y contiene ${dias}`)
console.log("Fin");