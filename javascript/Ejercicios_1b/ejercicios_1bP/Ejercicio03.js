// Escribir un programa que lea de teclado dos tiempos expresados en horas, minutos y
// segundos; las sume y muestre el resultado en horas, minutos y segundos por pantalla.

const read = require('../leer.js');

let horas1, minutos1, segundos1;
let horas2, minutos2, segundos2;
let horas, minutos, segundos;

console.log('Ingrese tiempo 1')
horas1 = Number(read('Ingrese horas: '));
minutos1 = Number(read('Ingrese minutos: '));
segundos1 = Number(read('Ingrese segundos: '));

console.log('\nIngrese tiempo 2')
horas2 = Number(read('Ingrese horas: '));
minutos2 = Number(read('Ingrese minutos: '));
segundos2 = Number(read('Ingrese segundos: '));

horas = horas1 + horas2;
minutos = minutos1 + minutos2;
segundos = segundos1 + segundos2;

horas += Math.trunc(minutos / 60);
minutos %= 60;
minutos += Math.trunc(segundos / 60);
segundos %= 60;

console.log(`\nLa suma de los tiempos ${horas}:${minutos}:${segundos}`);