const read = require('../leer.js');

let valor1
let gra_celsius

valor1 = Number(read('Ingrese numero: '))

gra_celsius = 5/9*(valor1-32)

console.log('El valor de los grados celsius son: ' + gra_celsius )


