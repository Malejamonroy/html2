const read = require('../leer.js');

let radio;
let volumen;

radio = read ('Ingrese el tamaño del radio: ');

volumen = 4/3*(Math.PI * Math.pow(radio,3));

console.log ('El volumen de una esfera es: ' + volumen );