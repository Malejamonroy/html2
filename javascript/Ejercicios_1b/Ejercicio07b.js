const read = require('../leer.js');

let num, aux

num = Number(read('Ingrese numero '))

aux = num%7
if(aux==1)
{
    console.log('El dia de la semana es lunes')
}
if (aux == 2)
{
    console.log('El dia de la semana es Martes' )
}
if (aux == 3)
{
    console.log('El dia de la semana es Miercoles ' )
}
if (aux == 4)
{
    console.log('El dia de la semana es Jueves ' )
}
if (aux == 5)
{
    console.log('El dia de la semana es Viernes ' )
}
if (aux == 6)
{
    console.log('El dia de la semana es Sabado ' )
}
if (aux == 7)
{
    console.log('El dia de la semana es Domingo ' )
}
