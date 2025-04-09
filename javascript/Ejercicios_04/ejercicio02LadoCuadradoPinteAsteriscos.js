const read = require('../leer.js');

// Escriba un programa que lea el lado de un cuadrado por teclado y a continuación lo
// muestre por pantalla en forma de asteriscos. Por ejemplo, ingresado el valor 4 la salida
// será:
// ****
// ****
// ****
// ****

let num = Number(read("Ingrese valor: "))

for(let i=1; i <= num; i++){
    
    for(let j=1; j<=num; j++){
        process.stdout.write(`${"*"}`)
        
    }console.log ("")
    

}