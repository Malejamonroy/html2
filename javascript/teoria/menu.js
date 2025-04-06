const read = require('../leer.js');

let opcion;

do {
    console.log();
    console.log('1 - Primera opcion');
    console.log('2 - Segunda opcion');
    console.log('3 - Tercera opcion');
    console.log('4 - Cuarta opcion');
    console.log('0 - Salir');

    opcion = Number(read('> '));

    switch (opcion){
        case 1:
            console.log('Proceso de primera opcion');
            break;
        case 2:
            console.log('Proceso de segunda opcion');
            break;
        case 0:
            console.log("Adios!!!");
    }
} while(opcion != 0);