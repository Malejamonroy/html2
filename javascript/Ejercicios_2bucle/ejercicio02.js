const read = require('../leer.js');

//Dado un número indefinido de notas obtenidas por alumnos en sus exámenes, mostrar por
//pantalla la nota mayor y la nota menor. (Cuando el usuario ingrese -1 finaliza la carga)

console.log("notas obtenidas por alumnos en sus exámenes");
console.log("ingrese -1 para termianr proceso");

let nota, notamayor, notamenor;


//ingresar o leer el primer dato
notamayor = 0
notamenor = 0
nota = Number(read('Ingres la nota: '));
notamenor = nota
while (nota > 0){ // controla si es la primera nota 
    // if (notamenor == 0) //controla que sea la primera nota
    //     {
    //     notamenor = nota;
    //     }
    if (nota > notamayor) 
        {
            notamayor = nota;
        }else
        {
            if(notamenor > 0 && nota < notamenor)
                {
                    notamenor = nota
                }
            
        }
    
    //proceso
    console.log("la nota mayor es: " + notamayor);
    console.log("la nota menor es: " + notamenor);
    //Leer siguiente
    nota = Number(read('Ingrese nota nota: '));
}