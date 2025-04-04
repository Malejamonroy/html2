const read = require('../leer');
// Dado un número indefinido de notas obtenidas por alumnos en sus exámenes, mostrar por
// pantalla la nota mayor. (Cuando el usuario ingrese -1 finaliza la carga)

let nota = Number(read('Ingrese nota: '));
let mayor = nota;

while (nota >= 0){
    if (nota > mayor)
        mayor = nota;

    nota = Number(read('Ingrese nota: ')); 
}

if (mayor >= 0)
    console.log(`La nota mayor es ${mayor}`);