/* 
Creamos la clase Persona y la clase Empleado, que extiende de la clase Persona. 
Si no agregamos de forma explícita el extends (como en Empleado), Js de forma automática hace 
un extend de la clase Object

La clase Object es la clase padre de todas las clases en Js

La clase Object tiene varios métodos, entre ellos el método toString() que permite mandar a imprimir 
información del estado del objeto, es decir, los valores actuales de cada uno de los atributos
de nuestro objeto
Es buena práctica agregar la definición del método toString() en nuestras clases

Cuando estamos trabajando con la clase Object hay métodos definidos en la clase Object y métodos
definidos en la clase prototype Object.prototype
Ahí podemos encontrar el método toString()
*/

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
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    // Sobreescribir método de la clase padre Object
    toString(){
        // Este método debe regresar una cadena
        // Se aplica polimorfismo (múltiples formas en tiempo de ejecución)
        // el método que se ejecuta depende si es una referencia de tipo padre
        // o de tipo hijo
        return this.nombreCompleto();
    }

}

// Clase hija EMPLEADO
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}



let persona1 = new Persona('Bruce', 'Wayne');
console.log( persona1.toString() );

let empleado1 = new Empleado('Jorge', 'Gonzalez', 'Contabilidad');
console.log( empleado1 );
console.log( empleado1.nombre ); 

console.log( empleado1.nombreCompleto());

// Si queremos imprimir un objeto en el navegador vamos a ver esto [object Object]
console.log (empleado1.toString());
// Para solucionarlo es que reescribirmos el método toString()
