const read = require('../leer.js');

//Escribir un programa que reciba un número n e imprima los primeros n números
//triangulares, junto con su índice. Los números triangulares se obtienen mediante la suma
//de los números naturales desde 1 hasta el índice n. Por ejemplo, el número triangular de
//índice 4 es 1+2+3+4 = 10.
//Entonces, si se piden los primeros 5 números triangulares, el programa debe imprimir (sin
//los comentarios entre paréntesis):
//1 – 1 (1)
//2 – 3 (1+2)
//3 – 6 (1+2+3)
//4 – 10 (1+2+3+4)
//5 – 15 (1+2+3+4+5)

let num = Number(read("Ingrese un numero"));
let sum = Number(0);

for(let i =1; i <= num; i++){
    process.stdout.write(`${i} - `);
    for(let j= 1; j<=i; j++){
        sum += j;}
        console.log(`${sum} `);
        sum = 0
    
}