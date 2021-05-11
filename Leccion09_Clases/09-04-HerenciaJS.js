/* 
Herencia es un concepto muy importante en la programación orientada a objetos. 
Con herencia podemos reutilizar código y poder heredar características de una clase padre a una clase hija
Por ejemplo:

PERSONA
_nombre: string
_apellido: string
get nombre()
set nombre(string)
get apellido
set apellido(string)

(La clase EMPLEADO extiende a la clase persona)
EMPLEADO 
_departamento: string
get departamento()
set departamento(string)

La clase Empleado es hija de la clase Persona y va a heredar las características nombre y apellido.
No es necesario agregarlas, basta con agregar Extends en la definición de su clase

*/

// Clase padre

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
}

// Clase hija EMPLEADO
class Empleado extends Persona{
    // Agregar constructor, ver LLAMADA
    // En el constructor de la clase hija tenemos que agregar los parámetros de la clase
    // padre y de la clase hija
    constructor(nombre, apellido, departamento){
        super(nombre,apellido); // Llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

/* 
LLAMADA
Si no llamamos el constructor de la clase padre no podemos crear un nuevo objeto de la clase hija

Cuando creamos un objeto de la clase hija solamente estamos inicializando el atributo de departamento.
Pero como estamos haciendo Extends de la clase Persona, JS no tiene forma de inicializar los
atributos de nombre y apellido. 
La única forma de resolverlo sería llamar al construcción de la clase padre (Persona) para poder
pasar los atributos de nombre y apellido
Para eso existe la palabra reservada llamada super y la tenemos que usar cuando creamos el constructor
de la clase hija 
*/


let persona1 = new Persona('Bruce', 'Wayne');
console.log( persona1 );

// 
let empleado1 = new Empleado('Jorge', 'Gonzalez', 'Contabilidad');
console.log( empleado1 );
// Acceder a los métodos heredados de la clase padre
console.log( empleado1.nombre ); // método get nombre





