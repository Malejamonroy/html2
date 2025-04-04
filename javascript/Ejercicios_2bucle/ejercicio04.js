const read = require('../leer.js');
//Dado un número indefinido de números enteros positivos y finalizando la carga con un 0 o
//un negativo, obtener el siguiente informe:
//Cantidad de valores procesados: XXX
//Sumatoria de los valores: XXX
//Media de los valores: XXX
//Valor mayor: XXX
//Valor menor: XXX
//Cantidad de valores pares: XXX
//Cantidad de valores impares: XXX

console.log("notas obtenidas por alumnos en sus exámenes");
console.log("ingrese -1 para termianr proceso");

let nota, notamayor, notamenor;


//ingresar o leer el primer dato
notamayor = 0;
notamenor = 0;
cont = 0;
sumavalores = 0;
valorespares = 0;
valoresimpares = 0;
mediavalores = 0;


nota = Number(read('Ingres la nota: '));
notamenor = nota;
while (nota > 0){


    
    if (nota > notamayor) 
        {
            notamayor = nota;
        }else
        {
            if(notamenor > 0 && nota < notamenor)
                {
                    notamenor = nota;
                    
                }
            
        }
    cont++;
    if (nota%2 == 0 )
    {
        valorespares++;
    }
    else
    {
        valoresimpares++;
    }
    sumavalores = sumavalores + nota;
    mediavalores = sumavalores/cont;

    //proceso
    console.log("la nota mayor es: " + notamayor);
    console.log("la nota menor es: " + notamenor);
    console.log(`Has ingresado ${cont} valores`);
    console.log(`la Cantidad de valores pares son: ${valorespares}`);
    console.log(`la Cantidad de valores pares son: ${valoresimpares}`);
    console.log(`la media de los valores son: ${mediavalores}`);
    console.log(`la suma de los valores es: ${sumavalores} `);
    //Leer siguiente
    nota = Number(read('Ingrese nota nota: '));
}