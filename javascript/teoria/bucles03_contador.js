const read = require('../leer.js');

// El usuario ingresa un numero indeterminada de valores positivos.
// Al ingresar 0 o un negativo, finaliza la carga de datos.
// El programa debera mostar la cantidad de valores ingresados.

//LECTURA CON VALOR SENTINELA (un valor que avisa que termino la carga)

console.log("PROCESO DE VALORES POSITIVOS");
console.log("Ingrese valores positivos, para terminar ka carga ingrese un valor no positivo");

let valor;
let cont = 0

//ingresar o leer el primer dato
valor = Number(read('Ingrese valor: '));

while (valor > 0){
    //proceso
    console.log(valor);
    //mostar la cantidad de valores ingresados.
    //cont = cont + 1; //asi se hace anteriormente o forma antigua
    cont++; //operador de incremento o incremental //incrementa en 1 el valor de la variable los de C lo crearon 

    //Leer siguiente
    valor = Number(read('Ingrese valor: '));
}

console.log(`Has ingresado ${cont} valores`);
console.log("FIN");