const read = require('../leer.js');

let num1 = Number(read('Ingrese valor: '));
let num2 = Number(read('Ingrese valor: '));
let num3 = Number(read('Ingrese valor: '));
let mayor, menor;

if (num1 > num2 && num1 > num3) {
    mayor = num1;
} else if(num2 > num1 && num2 > num3){
    mayor = num2;
} else {
    mayor = num3;
}

if (num1 < num2 && num1 < num3) {
    menor = num1;
} else if(num2 < num1 && num2 < num3){
    menor = num2;
} else {
    menor = num3;
}
console.log(`El mayor es ${mayor}`);
console.log(`El menor es ${menor}`);