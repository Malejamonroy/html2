const read = require('../leer.js');

//Calculadora de 4 operaciones. El usuario ingresa dos números y un carácter (+, -, *, / ) y el
// programa debe mostrar la operación y su resultado.
// Por ejemplo:
// Ingrese valor: 12.5
// Ingrese valor: 2
// Ingrese operación: -
// 12.5 – 2 = 10.5

let valor1= Number(read('Ingrese valor: '));
let valor2= Number(read('Ingrese valor: '));
let operaciones = read('Ingerese operacion: ');
let res

switch(operaciones){
    case "+":
        res = valor1 + valor2
        break
    case "-":
        res = valor1 - valor2
        break
    case "*":
        res = valor1 * valor2
        break
    case "/":
        res = valor1 / valor2
} console.log(res)