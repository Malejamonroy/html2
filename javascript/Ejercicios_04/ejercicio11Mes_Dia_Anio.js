const read = require('../leer.js');
// Solicitar una fecha (día, mes, año) y validar si es una fecha correcta sin contemplar años
// bisiestos, es decir, no se puede ingresar 29 2 xxxx.

let d = Number (read("Ingrese una fecha: dia"));
let m = Number(read("Ingrese un mes: "))
let a = Number(read("ingrese un año: "))

let dias,mes;
    
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
{  
    console.log("La fecha es correcta");
} else
{
    console.log("la fecha es incorrecta")

}



