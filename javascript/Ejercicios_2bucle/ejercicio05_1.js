//Se solicitará al usuario que ingrese números reales para procesar. Luego de ingresar cada
//número, se le preguntará si quiere ingresar más o no, leyendo la cadena “s” o “n”. Cuando
//indique que no ingresa más números, mostrar la cantidad de valores ingresados, el primer
//valor, el último, el mayor y el menor.

const read = require('../leer.js');



let centinela = "s";
let num= Number(read ("Ingrese numero: "));
let num2 = num;
let numayor = num;
let numenor = num;
let cont = 0;

do
{ 
    centinela = read("Desea ingresar mas valores S / N ")
    if (centinela == "s" )
    {
        num = Number(read("Ingrese numero"));
    

    }
    if(num > numayor)
        {
        numayor = num;
    }
    else
    {
        if(num < numenor)
        {
            numenor = num;
        }
    }
    cont++
}
while(centinela != "n")

    console.log(`El numero mayor es ${numayor}`);
    console.log(`El numero menor es: ${numenor}`);
    console.log(`Has ingresado ${cont} valores`);
    console.log(`El primer valor ingreado es: ${num2}`);
    console.log(`El ultimo valor ingresado es:${num}`)