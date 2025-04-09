//Escriba un programa que nos calcule el cambio que debe dar la caja 
// de un supermercado: Dado un precio y una cantidad de dinero, 
// el programa nos dirá cuántas monedas deben darse como cambio de tal 
// forma que el número total de monedas sea mínimo.

const read = require('../leer.js');

const monedas = [2, 1, 0.50, 0.20, 0.10, 0.5, 0.2, 0.1]; // Monedas disponibles
const billetes = [200, 100, 50, 20, 10, 5];  // Billetes disponibles
const precio = read.readFloat("Introduce el precio del producto: ");
const cantidadEntregada = read.readFloat("Introduce la cantidad de dinero entregada: "); // ¡Esta línea es la clave!
const cantidad = read("Introduce la cantidad de dinero: ");
let cambio = cantidadEntregada - precio; // Calcular el cambio a devolver
const resultado = [];// Array para almacenar el resultado
let totalMonedas = 0; // Contador de monedas


// Redondear el cambio a 2 decimales
cambio = Math.round(cambio * 100) / 100;

for (let { valor, tipo } of denominaciones) {
    let cantidad = Math.floor(cambio / valor);
    if (cantidad > 0) {
        const nombre = tipo === "billete" ? `${valor}€ (billete)` : `${valor.toFixed(2)}€ (moneda)`;
        resultado[nombre] = cantidad;
        cambio -= cantidad * valor;
        cambio = Math.round(cambio * 100) / 100; // Evitar errores decimales
    }
}

console.log("Cambio a devolver:");
for (let [denominacion, cantidad] of Object.entries(resultado)) {
    console.log(`${cantidad} x ${denominacion}`);
}
console.log(`Total de monedas: ${totalMonedas}`);
console.log(`Cambio total: ${cantidad}€`);