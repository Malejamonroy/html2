const read = require('../leer.js');
main();


function main(){
    let base = Number(read('Ingrese de la base: '));
    let exponente = Number(read('Ingrese exponencia: '));
    let calcula = potencia (base, exponente);
    console.log(calcula);
}


function potencia(base,exponente){
    let res = base
    for(let i = 1; i < exponente; i++){
       res *= base
    }
    return res
}