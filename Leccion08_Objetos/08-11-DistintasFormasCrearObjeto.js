/* 
Vimos cómo crear un objeto a partir de una función constructora. En JS existen estas funciones constructoras
para todos los tipos de datos. Pero no es una buena práctica en todos los casos. 
En la mayoría de los casos, existen sintaxis que simplifica el uso de la palabra new, como por ejemplo, 
para crear obetos de tipo string
*/

// Usamos la función constructora del objeto
let miObjeto = new Object();
// Esta es la forma más común de crear objetos en JS
let miObjeto2 = {};

// Función constructor de tipo String
let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';
// La primera es la versión más formal pero es recomendable usar la segunda forma abreviada

// Estos constructores es pueden usar con todos tipos de datos
let miNumero1 = new Number(3);
let miNumero2 = 2;

let miBoolean1 = new Boolean(false);
let miBoolean2 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};

