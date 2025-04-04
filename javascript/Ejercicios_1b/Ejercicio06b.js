const read = require('../leer.js');

let x1,x2,y1,y2,res;
x1 = Number (read('Ingrese X1')) 
x2 = Number (read('Ingrese X2')) 
y1 = Number (read('Ingrese y1')) 
y2 = Number (read('Ingrese y2')) 

res = Math.sqrt((x2-x1)**2 + (y2-y1)**2)

console.log('La difernecia entre ambos puntos es: ' + res)
