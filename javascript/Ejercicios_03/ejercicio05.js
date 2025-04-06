const read = require('../leer.js');
//De una lista de n números ingresados por teclado, imprimir el mayor y el menor valor.

let nVeces = Number(read("Ingrese numeros de veces "));
let nMayor = 0;
let nMenor = 0;


for ( let t = 1; t <= nVeces; t++){
    let valores = Number(read("ingrese valores"));
    if(t == 1){ //la t es el contador y nos esta preguntando si es la primera vuelta y si si, los valores nos lo mete en 
        nMayor = valores //valor menor y valor menor , parq que sepa lo que compara
        nMenor = valores
    }

    if ( valores >= nMayor){
        nMayor = valores;
    }else {
        if (valores <= nMenor)
            nMenor = valores;
    }

} console.log(`El valor mayor es:  ${nMayor} `);
console.log(`El valor menos es:${nMenor}`);