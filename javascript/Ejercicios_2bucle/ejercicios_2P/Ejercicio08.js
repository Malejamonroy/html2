const read = require('../leer.js');

let opcion;

let importe = Number(read('Ingresa importe en euros: '));

do {
    console.log('1 - Dolar');
    console.log('2 - Libras');
    console.log('3 - Yenes');
    console.log('4 - Dolar Canadienses');
    console.log('9 - Ingresar nuevo importe en euros');
    console.log('0 - Salir');

    opcion = Number(read('> '));

    switch (opcion){
        case 1:
            console.log(`${importe / 0.88} $`);
            break;
        case 2:
            console.log(`${importe / 1.2} Libras`);
            break;
        case 3:
            console.log(`${importe / 0.0077} Yens`);
            break;
        case 4:
            console.log(`${importe / 0.71} $C`);
            break;
        case 9:
            importe = Number(read('Ingresa importe en euros: '));
        }

} while(opcion != 0);