// Definir un método en la clase padre para heredarlo en la clase hija

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
    // Dentro de una clase no es necesario especificar function para agregar un método
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
}



let persona1 = new Persona('Bruce', 'Wayne');
console.log( persona1 );

let empleado1 = new Empleado('Jorge', 'Gonzalez', 'Contabilidad');
console.log( empleado1 );
console.log( empleado1.nombre ); 
// Accedemos al método de la clase padre
console.log( empleado1.nombreCompleto());







