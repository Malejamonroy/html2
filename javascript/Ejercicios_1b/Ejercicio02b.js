const read = require('../leer.js');
let h;
let s;
let m;

num = Number(read ('Ingrese numero de Segundos '));

h = Math.floor(num/3600);
m = Math.floor( (num%3600)/60);
s = (num%3600)%60;

console.log('Las horas son: '+ h );
console.log('Los minutos son: '+ m );
console.log('Los segundos son: '+ s);