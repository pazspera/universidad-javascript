/* 
En el ejemplo anterior mandamos a llamar una función para que imprimiera por consola el resultado.
En ocasiones no basta imprimir el resultado, sino que necesitamos devolver el valor con el cálculo
que realiza una función. 
Para esto se usa la palabra reservada return
*/

// Declaración de la función
function miFuncion(a, b){
    return a + b;
}

// Llamando a la función
let resultado = miFuncion(2, 3);
console.log(resultado);


