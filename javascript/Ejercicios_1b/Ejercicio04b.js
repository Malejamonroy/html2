const read = require('../leer.js');

let n,res 

n = Number(read ('Ingrese numero '));

res = n%2;
if ( res == 0 )
{
console.log('Es par');
}else{
console.log('Es impar');
}

