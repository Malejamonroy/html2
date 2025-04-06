//Pide al usuario una contraseña y sigue solicitándola hasta que ingrese la correcta.
const read = require('../leer.js');
let conguardada=Number(1234);
let contrasena 
do{
    contrasena = Number(read('ingrese contraseña'));

}while(conguardada != contrasena)