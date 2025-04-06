// Hacer un algoritmo que permita obtener la cantidad de segundos en un tiempo dado en
// horas, minutos y segundos.

const read = require('../leer.js');

let horas, minutos, segundos, segTotales;

horas = Number(read('Ingrese horas: '));
minutos = Number(read('Ingrese minutos: '));
segundos = Number(read('Ingrese segundos: '));

segTotales = horas * 3600 + minutos * 60 + segundos;

console.log(`${horas}:${minutos}:${segundos} son ${segTotales} segundos`);