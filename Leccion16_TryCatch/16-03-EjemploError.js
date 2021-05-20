/* 
Vamos a ver si una variable es realmente un número, si es positivo o negativo y arrojar un error en el caso determinado
*/

'use strict'
let resultado = -4;

try{
    // x = 10;
    if( isNaN(resultado)) throw 'No es un número';
    else if( resultado === '') throw 'Es una cadena vacía';
    else if( resultado >= 0) throw 'Valor positivo';
    else if( resultado < 0) throw 'Valor negativo';
}
catch(error){
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
}
// Si generamos nuestro propio error, .name y .message no se van a mostrar
finally{
    console.log('Termina revisión de errores');
}

