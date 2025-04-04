const read = require('../leer');
// Dado un número indefinido de notas obtenidas por alumnos en sus exámenes, mostrar por
// pantalla la nota mayor y la nota menor. (Cuando el usuario ingrese -1 finaliza la carga)

let nota = Number(read('Ingrese nota: '));
let mayor = nota;
let menor = nota;

while (nota >= 0){
    if (nota > mayor)
        mayor = nota;
    if (nota < menor)
        menor = nota;

    nota = Number(read('Ingrese nota: ')); 
}

if (mayor >= 0)
    console.log(`La nota mayor es ${mayor}`);
    console.log(`La nota menor es ${menor}`);