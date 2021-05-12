/* 
En el ejercicio agregamos el método nombreCompleto a la clase padre y accedimos a él desde la clase hija
Sin embargo, el objeto de empleado tiene más info que nombre y apellido, falta el departamento
Para agregar el departamento tenemos que aplicar lo que se conoce como sobreescritura

La clase padre solo conoce los atributos nombre y apellido, por lo que el método nombreCompleto solo
puede usar estos atributos y desconoce el atributo departamento que pertenece a la clase hija. 

Desde la clase hija vamos a modificar el comportamiento definido en el método de la clase padre. 
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
    // Sobreescritura método nombreCompleto
    // Heredamos el método pero al volver a definirlo lo estamos sobreescribiendo
    nombreCompleto(){
        // Usando super.nombreMetodo() evitamos volver a escribir el método de la clase padre
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}



let persona1 = new Persona('Bruce', 'Wayne');
console.log( persona1 );

let empleado1 = new Empleado('Jorge', 'Gonzalez', 'Contabilidad');
console.log( empleado1 );
console.log( empleado1.nombre ); 

console.log( empleado1.nombreCompleto());

