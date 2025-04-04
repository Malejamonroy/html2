const read = require('../leer.js');
//Escriba un programa que pida un número entero mayor que cero y que escriba sus
//divisores.

let num = Number(read("Ingrese un numero: "))

if (num > 0){ 

    for ( i = 1; i <= num;  i++){
        if (num%i == 0)
            { 
                console.log(i)
        }

    }
}