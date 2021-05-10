/* 
Cuando definimos o declaramos una función, las variables que va a recibir la función 
se conocen como parámetros

En cambio, los argumentos son los valores que pasamos a la función cuando la mandamos a llamar
*/

// Declaración de una función de tipo expresión
let sumar = function (a, b){
    // Imprimir los parámetros de la función 
    console.log(arguments[0]);
    console.log(arguments[1]);
    // No es requerido que coincidan el número de parámetros y argumentos 
    console.log(arguments[2]);
    return a + b + arguments[2];
}

let resultado = sumar(3,6,7);
console.log(resultado);

// No es necesario pasar todos los valores de los argumentos a una función
resultado = sumar();
console.log(resultado);
// Como no pasamos otro valor, el valor de b queda como undefined

// Si no queremos pasar argumentos a la función, podemos definir valores por default a los parámetros
/* 
let sumar = function (a = 4, b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
}
 */
// Si después pasamos argumentos, esos valores van a sobreescribir a los definidos por default
