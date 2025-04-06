const read = require('../leer.js');

//vamos hacer el ejercicio de los meses pero con arrary

let nombreMes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
let cantDias =[31,28,31,30,31,30,31,31,30,31,30,31];

for(let i=0; i< nombreMes.length; i++){
    console.log(`${nombreMes} tiene ${cantDias}dias.`)

}
let mes = Number(read('Ingrese mes:'));

console.log(nombreMes[mes-1]+'tiene'+ cantDias[mes-1]);