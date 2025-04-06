const read = require('../leer.js');

let num;
let val_abs;

num = Number(read('Ingrese numero: '));
if (num < 0){
    val_abs = num * -1;
} else {
val_abs = num;
}

console.log('|' + num + '| = ' + val_abs);
console.log(`|${num}| = ${val_abs}`);