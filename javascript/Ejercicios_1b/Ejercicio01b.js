const read = require('../leer.js');

let H
let S
let M
let res

H = Number(read ('Ingrese numero de Horas '))
M = Number(read ('Ingrese numero de Minutos '))
S = Number(read ('Ingrese numero de Segundos '))

res= 3600*H + 60*M + S

console.log('la Horas son: '+ res +'Segundos' )
