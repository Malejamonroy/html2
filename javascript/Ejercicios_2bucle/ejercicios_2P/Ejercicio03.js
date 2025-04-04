const read = require('../leer');
// Dado un número indefinido de notas obtenidas por alumnos en sus exámenes, mostrar por
// pantalla la nota mayor, la nota menor y la cantidad total de notas procesadas. (Cuando el
// usuario ingrese -1 finaliza la carga)

let nota = Number(read('Ingrese nota: '));
let mayor = nota;
let menor = nota;
let cant = 0;

while (nota >= 0){
    if (nota > mayor)
        mayor = nota;
    if (nota < menor)
        menor = nota;
    cant++;
    nota = Number(read('Ingrese nota: ')); 
}

if (mayor >= 0)
    console.log(`Cantidad de notas ingresadas: ${cant}`);
    console.log(`La nota mayor es ${mayor}`);
    console.log(`La nota menor es ${menor}`);