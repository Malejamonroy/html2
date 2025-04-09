//Realizar el juego “Adivina número”. El ordenador debe generar un número 
// “secreto” aleatorio con las siguientes características: 
// - Debe tener 4 dígitos diferentes 
// - No puede comenzar en 0 El usuario debe adivinarlo, 
// para ello irá ingresando números de 4 cifras y el programa le 
// indicará la cantidad de dígitos correctos y la cantidad de dígitos regulares.
//  Un dígito es correcto cuando está en la posición que le corresponde y es 
// regular si está en el número secreto, pero en otra posición. Imagine que el ordenador 
// genera el número 1207 Ejemplo de ejecución:

const read = require('../leer.js');
const numeroSecreto = generarNumeroSecreto();
let intentos = 0;
let adivinado = false;
let numeroUsuario = null;
let digitosCorrectos = 0;
let digitosRegulares = 0;
let numeroUsuarioArray = null;


