const read = require('../leer.js');

//De una lista de n números ingresados por teclado, imprimir el mayor


let nVeces= Number(read("cuantos numeros quieres ingrear? "))
let nMayor=0

for (let i=1; i<= nVeces; i++){
    let num = Number(read("Ingrese numero"));
    if (num >= nMayor)
    {
        nMayor = num
    }

}console.log(`el numero mayor es: ${nMayor} `)
