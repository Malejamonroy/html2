//Se solicitará al usuario que ingrese números reales para procesar. Luego de ingresar cada
//número, se le preguntará si quiere ingresar más o no, leyendo la cadena “s” o “n”. Cuando
//indique que no ingresa más números, mostrar la cantidad de valores ingresados, el primer
//valor, el último, el mayor y el menor.

const read = require('../leer.js');


console.log("ingrese valores:");

let centinela = "s";
let num= Number(read ("Ingrese numero: "));
num2 = num
numayor = num;
numenor = num;
cont = 0;

while(centinela == "s")
{
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
        centinela = read("Desea ingresar mas valore s/n:")
        if (centinela!= "n")
        {
            num= Number(read ("Ingrese numero: "));
        }
    
}
    console.log(`El numero mayor es ${numayor}`);
    console.log(`El numero menor es: ${numenor}`);
    console.log(`Has ingresado ${cont} valores`);
    console.log(`El primer valor ingreado es: ${num2}`);
    console.log(`El ultimo valor ingresado es:${num}`)

