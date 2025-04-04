const read = require('../leer');
// Dado un número indefinido de números enteros positivos y finalizando la carga con un 0 o
// un negativo, obtener el siguiente informe:
// Cantidad de valores procesados: XXX
// Sumatoria de los valores: XXX
// Media de los valores: XXX
// Valor mayor: XXX
// Valor menor: XXX
// Cantidad de valores pares: XXX
// Cantidad de valores impares: XXX

let valor = Number(read('Ingrese valor: '));
let mayor = valor;
let menor = valor;
let cant = 0;
let sum = 0;
let media;
let cantPar = 0;
let cantImpar;

while (valor > 0){
    cant++;
    sum += valor;
    if (valor > mayor)
        mayor = valor;
    if (valor < menor)
        menor = valor;
    if (valor % 2 == 0)
        cantPar++;

    valor = Number(read('Ingrese valor: ')); 
}

if (mayor >= 0){
    media = sum / cant;
    cantImpar = cant - cantPar;
    console.log(`Cantidad de valores procesados: ${cant}`);
    console.log(`Sumatoria de los valores: ${sum}`);
    console.log(`Media de los valores: ${media}`);
    console.log(`Valor mayor: ${mayor}`);
    console.log(`Valor menor: ${menor}`);
    console.log(`Cantidad de valores pares: ${cantPar}`);
    console.log(`Cantidad de valores impares: ${cantImpar}`);
}

