const read = require('../leer.js');
 //Siguiendo la misma metodología de carga, calcular la cantidad de valores >= 0 y la cantidad
//menores que 0.

let nVeces= Number(read("Ingresa cantidad de veces "));
let vMayor = Number (0);
let vMenor = Number (0);

for( let i=1; i <= nVeces; i++ ){
    let valores = Number (read("ingrese valores: "));
    if (valores >=0){
        vMayor++;
    }else{
        vMenor ++;
    }
}console.log(`La cantidad de valores positivos son ${vMayor}`);
console.log(`La cantidad de valores Negativos son ${vMenor}`);