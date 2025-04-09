//Solicite al usuario dos fechas (día1, mes1, año1, día2, mes2, año2), indicar el tiempo transcurrido en días entre ambas, sin tener en cuenta años bisiestos.

const read = require('../leer.js');

// Solicitar fechas
let d1 = Number(read("Ingrese el primer día: "));
let m1 = Number(read("Ingrese el primer mes: "));
let a1 = Number(read("Ingrese el primer año: "));
let d2 = Number(read("Ingrese el segundo día: "));
let m2 = Number(read("Ingrese el segundo mes: "));
let a2 = Number(read("Ingrese el segundo año: "));

// Días por cada mes, sin contar los bisiestos aún
let diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Función para saber si un año es bisiesto
function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

// Función que convierte una fecha a días desde el año 0
function convertirADias(dia, mes, anio) {
    let totalDias = 0;

    // Sumar días por año completo
    for (let i = 0; i < anio; i++) {
        totalDias += esBisiesto(i) ? 366 : 365;
    }
// Sumar días por mes en el año actual
for (let i = 0; i < mes - 1; i++) {
    totalDias += diasPorMes[i];

    // Si es febrero y el año actual es bisiesto, agregar 1 día extra
    if (i === 1 && esBisiesto(anio)) {
        totalDias += 1;
    }
}

// Sumar los días del mes actual
totalDias += dia;

return totalDias;
}

// Calcular el total de días para ambas fechas
let total1 = convertirADias(d1, m1, a1);
let total2 = convertirADias(d2, m2, a2);

// Validar que la fecha 1 no sea mayor
if (total1 > total2) {
console.log("La fecha 1 no puede ser mayor que la fecha 2");
} else {
let res = total2 - total1;
console.log(`La diferencia es de ${res} días`);
}
    // Sumar días por mes en el
