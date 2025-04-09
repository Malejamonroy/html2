//Solicite al usuario una fecha e indicar los días que faltan hasta fin de año. (se supone que el año no es bisiesto)

const read = require('../leer.js');
const fecha = read('Ingrese una fecha en formato dd/mm/yyyy: ');
const [dia, mes, anio] = fecha.split('/').map(Number); // Convertir a números
 let diasHastaFinDeAnio = 0;
const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Días por mes (no bisiesto)
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const nombreMes = meses[mes - 1]; // Obtener el nombre del mes
// Verificar si la fecha es válida
if (dia < 1 || dia > diasPorMes[mes - 1] || mes < 1 || mes > 12) {
    console.log('Fecha inválida');
}
else {
    // Calcular los días restantes en el mes actual
    diasHastaFinDeAnio += diasPorMes[mes - 1] - dia;
    // Calcular los días restantes en los meses siguientes
    for (let i = mes; i < 12; i++) {
        diasHastaFinDeAnio += diasPorMes[i];
    }
    console.log(`Faltan ${diasHastaFinDeAnio} días para fin de año.`);
}