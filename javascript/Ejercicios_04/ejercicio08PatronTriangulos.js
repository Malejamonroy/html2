const read = require('../leer.js');
// Escriba un programa que imprima los siguientes patrones por separado, uno debajo del
// siguiente, una vez que el usuario ingresó el tamaño, por ejemplo 5. Utilice ciclos for para
// generar los patrones. Todos los asteriscos deberán ser impresos por un solo enunciado print
// de la forma print(‘*’). Sugerencia: los dos últimos patrones requieren que cada línea
// comience con un número correcto de espacios en blanco: print(‘ ’).
// *        *****    *****        *
// **       ****      ****       **
// ***      ***        ***      ***
// ****     **          **     ****
// *****    *            *    *****

let num = Number(read("ingrese tamaño: ")) 

for(let i=1 ; i <= num; i++){
    for( let j =1; j<=num; j++){
        if(j<=i)
        process.stdout.write(`${"*"}`);
        else
        process.stdout.write(`${" "}`);

    }console.log("")
}
for (let f=1; f<=num; f++)
    { //process.stdout.write(`${f}`)
        for(let h=num; h>=1;h--){
            if(f<=h)
                process.stdout.write(`${"*"}`);
            else  
            process.stdout.write(`${" "}`);
        }console.log("")
}

for (let k=1; k<=num; k++){
    for(let m=1; m<=num; m++){
        if(m>=k)
            process.stdout.write(`${"*"}`);
        else  
        process.stdout.write(`${" "}`);
    }console.log("")
}
for(let a=1;a <=num;a++){ 
    //process.stdout.write(`${a}`)
    for(let b=num ;b >=1; b--){
       // process.stdout.write(`${b}`)
        if(a>=b)
            process.stdout.write(`${"*"}`);
        else  
        process.stdout.write(`${" "}`);
    }console.log(" ")
}
