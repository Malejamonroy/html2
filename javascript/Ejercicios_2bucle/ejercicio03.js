const read = require('../leer.js');

//Dado un número indefinido de notas obtenidas por alumnos en sus exámenes, mostrar por
//pantalla la nota mayor, la nota menor y la cantidad total de notas procesadas. (Cuando el
//usuario ingrese -1 finaliza la carga)

console.log("notas obtenidas por alumnos en sus exámenes");
console.log("ingrese -1 para termianr proceso");

let nota, notamayor, notamenor;


//ingresar o leer el primer dato
notamayor = 0
notamenor = 0
cont = 0
nota = Number(read('Ingres la nota: '));
notamenor = nota
while (nota > 0){
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
    cont++;
    //proceso
    console.log("la nota mayor es: " + notamayor);
    console.log("la nota menor es: " + notamenor);
    console.log(`Has ingresado ${cont} valores`);
    //Leer siguiente
    nota = Number(read('Ingrese nota nota: '));
}
console.log('fin')