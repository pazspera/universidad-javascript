/* 
Con las funciones flecha podemos omitir el uso de function 
Usamos => para definir el cuerpo de la función en vez de la palabra reservada function
También se puede obviar el uso de return para especificar que va a devolver un valor
*/

// Declaración de una función de tipo expresión
let sumar = function (a, b){return a + b};

let resultado = sumar(1,2);
console.log(resultado);

// Declaración de una función flecha
const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);
