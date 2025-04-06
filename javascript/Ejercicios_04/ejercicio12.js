const read = require('../leer.js');

//Solicite al usuario una fecha e indicar los días que faltan hasta fin de mes.

let d = Number(read("ingrese Dia: "));
let m= Number(read("Ingrese mes: "));
let a = Number(read("Ingrese año: "));

let dias,mes,res;
    
switch(m){
    case 1:
       mes = "Enero";
       dias = 31 ;
        break
    case 2:
        mes = "Febrero";
        dias = 28;
        break
    case 3:
        mes = "Marzo";
        dias = 31;
        break
    case 4:
        mes = "Abril";
        dias = 30;
        break
    case 5:
        mes = "Mayo";
        dias = 31;
        break
    case 6:
        mes = "Junio";
        dias = 30;
        break
    case 7:
        mes = "Julio";
        dias = 31;
        break
    case 8:
        mes = "Agosto";
        dias = 31;
        break
    case 9:
        mes = "Septiembre";
        dias = 30;
        break
    case 10:
        mes = "Octubre";
        dias = 31;
        break
    case 11:
        mes = "Noviembre";
        dias = 30;
        break
    case 12:
        mes = "Diciembre";
        dias = 31;
        break
    default: console.log("mes incorrecto")
    

}
if( d <= dias )
{  res = dias-d
    console.log(`los dias pera terminar el mes son ${res}`);
}
