/* 
    Ejemplos de tipo de datos en JavaScript
 */

// Tipo de dato string
var nombre = "Carlos";
console.log(nombre);
console.log(typeof nombre);

nombre = 10;
console.log(typeof nombre);

// Tipo de dato numérico
var numero = 3;
console.log(numero);

// Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Gomez",
    telefono : "114433222"
} 
console.log(objeto);
console.log(typeof objeto);

// Tipo de dato boolean (true, false)
var bandera = false;
console.log(bandera);
console.log(typeof bandera);

// Tipo de dato function
function miFuncion(){};
console.log(miFuncion);
console.log(typeof miFuncion);

// Tipo de dato Symbol
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

// Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

// Tipo de dato undefined. Este tipo de dato viene automáticamente cuando definimos cualquier tipo de variable 
var x;
console.log(x);
console.log(typeof x);

x = undefined;
console.log(x);
console.log(typeof x);
// Undefined es un valor de variable y también un tipo de dato

// null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);
// null no es un nuevo tipo de dato, sino es un tipo object

// Arreglos
var autos = ['BMW', 'Audi', 'Ford']; 
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
console.log(typeof z);


