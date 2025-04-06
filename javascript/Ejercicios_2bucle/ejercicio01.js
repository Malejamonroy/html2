const read = require('../leer.js');

//Dado un número indefinido de notas obtenidas por alumnos en sus exámenes, 
//mostrar por la nota mayor. (Cuando el usuario ingrese -1 finaliza la carga)

console.log("notas obtenidas por alumnos en sus exámenes");
console.log("ingrese -1 para termianr proceso");

let nota, notamayor;


//ingresar o leer el primer dato
notamayor = 0
nota = Number(read('Ingres la nota: '));

while (nota > 0){
    if (nota > notamayor) 
        {
            notamayor = nota;
        }

    //proceso
    console.log("la nota mayor es: " + notamayor);
    //Leer siguiente
    nota = Number(read('Ingrese nota nota: '));
}

console.log("FIN");