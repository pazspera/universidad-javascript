/* 
    Ejemplos de tipos de datos en JavaScript
*/

// Tipo de dato string
var nombre = "Paz";
console.log(nombre);

nombre = 11.5;
console.log(typeof nombre);

// Tipo de dato numérico
var numero = 3;
console.log(numero);

// Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "114032042"    
};
console.log(typeof objeto);

// Tipo de dato boolean (true, false)
var bandera = false;
console.log(typeof bandera);

//  Tipo de dato function
//  Una función nos permite reutilizar líneas de código 
function miFuncion(){}
console.log(typeof miFuncion)

//  Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//  Tipo clase es una function
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//  Undefined es un valor que se puede asignar a una variable y un tipo de dato
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

//  null = ausencia de valor
var y = null;
console.log(typeof y);

// Los arreglos en JavaScript son de tipo object
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(typeof autos);

//  Una cadena vacía no es un tipo de dato, sino un valor que podemos asignar 
var z = '';
console.log(z);
console.log(typeof z);


