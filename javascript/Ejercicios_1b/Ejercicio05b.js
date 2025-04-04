const read = require('../leer.js');

let anio;

anio = Number(read('Ingrese año '))

if((anio%4 == 0 && anio%100 != 0 ) || anio%400 ==0) 
{
console.log('Es un año bisiesto')
}else
{
    console.log ('No es un año bisiesto')
}
