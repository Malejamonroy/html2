//while

const read = require('../leer.js');

// El usuario ingresa un numero indeterminada de valores positivos.
// Al ingresar 0 o un negativo, finaliza la carga de datos.

//LECTURA CON VALOR SENTINELA (un valor que avisa que termino la carga)

console.log("PROCESO DE VALORES POSITIVOS");
console.log("Ingrese valores positivos, para terminar ka carga ingrese un valor no positivo");

let valor;

//ingresar o leer el primer dato
valor = Number(read('Ingrese valor: '));

while (valor > 0){
    //proceso
    console.log(valor);

    //Leer siguiente
    valor = Number(read('Ingrese valor: '));
}

console.log("FIN");