/* 
Recordemos que una función también es un tipo de dato
Las funciones también pueden ser descriptas como objetos. Los objetos pueden tener propiedades y métodos
asociados a cada objeto
*/

// Declaración de la función
function miFuncion(a, b){
    console.log(arguments.length);
    // Propiedad para saber cuántos argumentos se definieron en la función
    return a + b;
}

// Llamando a la función
let resultado = miFuncion(2, 3);
console.log(resultado);

console.log(typeof miFuncion); 

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);
// Imprime en texto la función que definimos
// Este método convierte nuestra función a texto
