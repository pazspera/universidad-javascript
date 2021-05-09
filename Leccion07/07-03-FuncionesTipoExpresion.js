/* 
    Cuando trabajamos con funciones también podemos asignarlas a una variable y así evitar ponerle un nombre
    a una función. Estas se conocen como funciones anónimas o funciones de tipo expresión
*/

// Declaración de una función de tipo expresión
let sumar = function (a, b){return a + b};
// Estamos definiendo una línea de código que se hace ejecutable por lo que hace falta el ; final
let resultado = sumar(1,2);
console.log(resultado);

