const read = require('../leer.js');

main();

function main(){
    let radio = Number(read('Ingrese radio de la base: '));
    let h = Number(read('Ingrese altura: '));
    let volumen = areaCirculo(radio) * h;
    console.log('Volumen:'+ volumen);
    
}

function areaCirculo(radio){
    return Math.PI * radio ** 2;
}

