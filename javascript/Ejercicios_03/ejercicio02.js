const read = require('../leer.js');

//Imprimir la suma de n números ingresados por teclado. La cantidad de números (n) se
//solicita al usuario al principio y se ingresa por teclado

let cant = Number(read("Ingrese la cantidad de veces que desea hacer la operacion "));
let suma = Number(0)

for (let i=1;i<=cant;i++)
    {
        let operador= Number(read("ingrese numero "));
    suma = suma + operador
    
}console.log(`la sumatoria de los los valores ingresasos son :${suma}`)