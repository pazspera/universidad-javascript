/* 
Una función de tipo Callback es una función que se pasa como parámetro a otra función
Dentro de una función vamos a poder llamar a otra función
*/

// Función simple
function miFuncion1(){
    console.log( 'Funcion 1' );
}

function miFuncion2(){
    console.log( 'Funcion 2' );
}

// En Js, las llamadas a las funciones son de manera secuencial
miFuncion1();
miFuncion2();

// Funciones Callback
function imprimir(mensaje){
    console.log( mensaje );
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5, 3, imprimir);

