// Crea un menú simple que siga mostrando opciones hasta que el usuario elija "Salir".
const read = require('../leer.js');

let opcion ;
do{ 
    console.log('opcion1')
    console.log('opcion2')
    console.log('opcion3')
    console.log('salir')
    opcion =Number(read('elige la opcion'))
}while(opcion != 4 )
    
