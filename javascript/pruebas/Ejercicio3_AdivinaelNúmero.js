const read = require('../leer.js');

let numsecreto = Number(Math.floor(Math.random()*10)) //con esto pido un numero aleatorio

let num = 0;
//console.log(numsecreto)
while(num != numsecreto){
    num= Number(read('Ingrese numero: '));
}console.log(`numero secreto es:${numsecreto}`)