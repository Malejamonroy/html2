const read = require('../leer.js');

// El usuario ingresa un numero indeterminada de valores positivos.
// Al ingresar 0 o un negativo, finaliza la carga de datos.
// El programa debera mostar la cantidad de valores ingresados.
// El programa debera mostar la suma total de los valores ingresador.

//LECTURA CON VALOR SENTINELA (un valor que avisa que termino la carga)

console.log("PROCESO DE VALORES POSITIVOS");
console.log("Ingrese valores positivos, para terminar ka carga ingrese un valor no positivo");

let valor;
let suma = 0;
let produ = 1;

//ingresar o leer el primer dato
valor = Number(read('Ingrese valor: '));

while (valor > 0){
    //proceso
    console.log(valor);
    //se inicializa en el valor neutro de una operacion en suma es 0 en multiplicacion 1
    //suma = suma + valor;
    produ = produ * valor;


    //Leer siguiente
    valor = Number(read('Ingrese valor: ')); 
}

console.log(`la suma de los valores es ${produ}`);
console.log('FIN');
