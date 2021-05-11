/* 
Cuando trabajamos con clases NO se aplica el concepto de hoisting. 
Por lo tanto, primero tenemos que definir nuestra clase para poderla utilizar.
En cambio, cuando trabajamos con funciones, primero podemos mandar a llamar la función y posteriormente
definirla. 
Con funciones y variables se aplica el hoisting.
*/

// NO es posible crear objetos antes de declarar la clase
// let persona2 = new Persona('Diana', 'Prince');

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona2 = new Persona('Diana', 'Prince');
console.log(persona2);
