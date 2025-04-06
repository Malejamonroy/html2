// Hacer un algoritmo que permita Obtener la cantidad de horas, minutos y segundos de un
// tiempo dado en segundos.

const read = require('../leer.js');

let horas, minutos, segundos, segTotales, segResto;

segTotales = Number(read('Ingrese cantidad de segundos: '));

horas = Math.trunc(segTotales / 3600);
segResto = segTotales % 3600;
minutos = Math.trunc(segResto / 60);
segundos = segResto % 60;

console.log(`${segTotales} segundos son ${horas}:${minutos}:${segundos}`);