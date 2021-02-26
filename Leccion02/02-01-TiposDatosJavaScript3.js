// Uso básico de var, let y const
nombre = "Paz";
console.log(nombre);
/* En JavaScript se puede crear una variable con solo poner el nombre, sin necesidad de  usar una palabra reservada. Esto no es una buena práctica pero se puede usar */

/* La buena práctica es usar let en vez de var para declarar una variable */
let apellido;
apellido = "Wayne";
console.log(apellido);

/* Una vez que le asignamos un valor a una variable const después no podemos cambiarlo, es una constante */
const alterego = "Batman";
//alterego = "Superman";


// Buenas prácticas para nombres de Variables
/* let nombreCompleto = "Juan Perez";
console.log( nombreCompleto ); */

let x, y;
x = 10, y = 15;
let z = x + y;
console.log( z );

// REGLAS PARA DEFINIR NOMBRES DE VARIABLES EN JAVASCRIPT
let nombreCompleto = "Juan Perez";
let nombrecompleto = "Carlos Lara";
console.log( nombreCompleto);
console.log( nombrecompleto);
/* JavaScript es sensible a mayúsculas y minúsculas, tenerlo en cuenta para evitar errores */

/* 
- El nombre de una variable no puede empezar con un número
- Los únicos caracteres permitidos son letras (minúscula y mayúscula), _ y $
- Esto es para la primera letra, después se pueden usar números
- Tampoco se pueden usar las palabras reservadas del sistema para nombrar una variable
 */

let a1nombreCompleto;
let _nombreCompleto;
let $nombreCompleto;
//let 1nombreCompleto;


