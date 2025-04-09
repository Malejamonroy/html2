const read = require('../leer.js');

// Modifique el programa anterior para que imprima el perímetro del cuadrado de la siguiente
// manera:
//       ****
//       *  *
//       *  *
//       ****

let lado= Number(read("Ingrese numero: "));

for(let i=1; i <=lado; i++){
    
    for(let j=1; j<=lado; j++){
        if (i== 1|| i == lado ){
        process.stdout.write(`${"*"}`)
        }else{
           if (j==1 || j == lado)
            process.stdout.write(`${"*"}`)
        else process.stdout.write(`${" "}`)
        }
    }console.log ("")
    

}