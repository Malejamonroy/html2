// Crea un programa que pida la edad al usuario y no permita continuar hasta que ingrese un 
// número válido (un número mayor o igual a 18).

const read = require('../leer.js');

let edad = Number()
do{ 
    edad =read('Ingrese su edad: ');
   console.log('error')

}while(edad >=18)





    