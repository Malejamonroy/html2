// Escribir un programa que dados dos puntos en el plano 𝐴(𝑥1, 𝑦1) y 𝐵(𝑥2, 𝑦2), imprima la
// distancia entre ambos.
// 𝑑(𝐴, 𝐵) = √[(𝑥2− 𝑥1)^2 + (𝑦2− 𝑦1)^2]

const read = require('../leer.js');

console.log("DISTANCIA ENTRE DOS PUNTOS")
console.log('Punto A')
let xA = Number(read('x: '));
let yA = Number(read('y: '));

console.log('Punto B')
let xB = Number(read('x: '));
let yB = Number(read('y: '));

let distancia = Math.sqrt(Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2));

console.log(`d(A, B) = ${distancia}`);