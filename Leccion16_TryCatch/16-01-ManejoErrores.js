/* 
Empezamos en modo estricto así nos avisa cuando usemos variables que no hayan sido declaradas
*/

'use strict'
try{
    let x = 10;
    // miFuncion();
}
catch(error){
    console.log(error);
}
// finally siempre se va a ejecutar, independientemente de si hay error o no
finally{
    console.log('Termina la revisión de errores');
}
// Cuando hay un error en el programa, las demás líneas no se ejecutan
// Pero si usamos try catch, las otras líneas se van a ejecutar
console.log('Continuamos');
