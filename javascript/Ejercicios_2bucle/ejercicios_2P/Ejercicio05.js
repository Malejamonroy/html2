const read = require('../leer.js');
// Se solicitará al usuario que ingrese números reales para procesar. Luego de ingresar cada
// número, se le preguntará si quiere ingresar más o no, leyendo la cadena “s” o “n”.
// Cuando indique que no ingresa más números, mostrar la cantidad de valores ingresados, el primer
// valor, el último, el mayor y el menor.

let num, primero, ultimo;
let opcion;
let cant = 0;
let mayor, menor;

do {
    num = Number(read('Ingrese valor: '));
    ultimo = num;
    cant++;
    if (cant == 1) {
        mayor = menor = num;
        primero = num;
    }
    if (num > mayor)
        mayor = num;
    if (num < menor)
        menor = num;
    opcion = read('Mas valores (s / n): ');
} while (opcion == 's' || opcion == 'S');

console.log(`Cantidad de valores procesados: ${cant}`);
console.log(`Primer valor ingresado: ${primero}`);
console.log(`Ultimo valor ingresado: ${ultimo}`);
console.log(`Valor mayor: ${mayor}`);
console.log(`Valor menor: ${menor}`);
