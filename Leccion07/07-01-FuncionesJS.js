/* 
Una función es un código reutilizable que vamos a poder mandar a llamar las veces que necesitemos
Cada función va a realizar una tarea definida

Dentro de los paréntesis agregamos los argumentos de la función
Los argumentos es la información de entrada con la que puede trabajar una función 
Los argumentos son opcionales y si usamos más de uno los separamos con comas
*/
// Hoisting
miFuncion(4,2);

// Declaración de la función
function miFuncion(a, b){
    console.log("Suma: " + (a + b));
}
// La declaración de la función no lleva ; al final ya que es un bloque de código y estos no llevan ;

// Llamando a la función
miFuncion(2, 3);
// Cuando mandamos a llamar la función si terminamos con ;

/* 
    Hoisting: las funciones las podemos mandar a llamar antes o después de definirlas . Hoisting
    mueve la declaración de la función al principio del programa para que la podamos usar en 
    cualquier parte de nuestro archivo
*/



