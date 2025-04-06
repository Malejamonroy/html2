const read = require('../leer.js');
//Siguiendo la misma metodología de carga, calcular la cantidad de valores positivos.

let nVeces = Number(read("ingrese cantidad de veces: "))
let valoresPositivos = Number(0);

for ( let i=1; i <=nVeces; i++){
    let valor = Number(read("ingrese numeros: "))
    if (valor > 0){
        valoresPositivos++
        
    }
}console.log(`la cantidad de  valores positvo es ${valoresPositivos}`)