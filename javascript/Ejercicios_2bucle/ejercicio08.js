// Escribir un programa que pida al usuario un número, que representará una cantidad de
// dinero expresada en euros. A continuación, el programa le ofrecerá un menú al usuario en
// el que le preguntará a qué divisa quiere convertir del dinero e imprimirá la conversión. Las
// posibles divisas son las siguientes (se indica el tipo de cambio):
// • Dólares (1 dólar = 0,88 euros)
// • Libra Esterlina (1 Libra = 1,20 euros)
// • Yen (1 yen = 0,0077 euros).
// • Dólares Canadienses (1 dólar C. = 0,71 euros)

const read = require('../leer.js');

let dinero= 0;
let res 
let conversion

dinero = Number(read(`Ingrese monto para convertir ____ €`))
do{
console.log(`En que divisa lo quieres convertir`);
console.log("1 - Dólares");
console.log("2 - Libra Esterlina");
console.log("3 - Yen");
console.log("4 - Dólares Canadienses");
console.log("5 - Modificar cantidad de dinero ");
console.log("0 - Salir ")

conversion = Number(read(" - "));
switch (conversion)
{
    case 1:
        res=(dinero/ 0.88)+ "$";
    break;
    case 2:
        res =(dinero/ 1.20)+ "Libras";
    break;
    case 3: 
        res = (dinero/ 0.0077+ "Yen");
    break;
    case 4: 
        res = (dinero/ 0.71);+ "Dolar Canadiense"
    break;
    case 5 :dinero = Number(read(`Ingrese monto para convertir ____ €`))
    break;
        
}console.log(`El monto de ${dinero}€ equivale a ${res}`);
}while (conversion != 0);

