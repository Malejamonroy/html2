const read = require('../leer.js');

let h,h1,m,m1,s,s1;
let resh,resm,ress;

h= Number(read('Ingrese Horas'));
m= Number(read('Ingrese Minutos'));
s= Number(read('Ingrese Segundos'));
h1= Number(read('Ingrese Horas'));
m1= Number(read('Ingrese Minutos'));
s1= Number(read('Ingrese Segundos'));

resh = h+h1+Math.floor((m+m1)/60);
resm = (m+m1)%60+Math.floor((s+s1)/60);
ress = s+s1

console.log('El total de Horas son: ' + resh )
console.log('El Total de Minutos son: ' + resm )
console.log('Los segundos son: ' + ress )