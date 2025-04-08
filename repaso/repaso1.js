/*Fechas y cálculo de días
Objetivo: El usuario introduce una fecha y la página le dice:
Cuántos días faltan para esa fecha
Si es una fecha pasada o futura
El día de la semana en que cae
Si es un año bisiesto*/


const read = require('./leer.js');

let inputfeha = read('Introduce una fecha en formato DD/MM/YYYY: ');// Asumimos que es un formato "dd/mm/yyyy"
const [dia, mes, anio] = inputfecha.split('/');


 


/*function aniobisiesto(){
    if((anio%4 == 0 && anio%100 != 0 ) || anio%400 ==0){
        console.log("El año es bisiesto");

    }
} */
    