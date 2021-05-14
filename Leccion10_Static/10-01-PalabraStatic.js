/* 
Una vez definida nuestra clase, podemos definir métodos que se asocien con nuestros objetos y también 
agregar métodos que se asocien con nuestra clase exclusivamente.
Para eso vamos a usar la palabra reservada static. 

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
    toString(){
        return this.nombreCompleto();
    }
    // Método static
    static saludar(){
        console.log('Saludos desde método static');
    }
    static saludar2(Persona){
        console.log(Persona.nombre + ' ' + Persona.apellido);
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

console.log (empleado1.toString());

// Como el método static se asocia a la clase y no a los objetos, los objetos no pueden ejecutarlos
// persona1.saludar();
// Para ejecutar el método static tenemos que usarlo a través de la clase misma
Persona.saludar(); 

// Sin embargo, a un método estático le podemos pasar como argumento un objeto
Persona.saludar2(persona1);
// También podemos usar el método static desde la clase hija
Empleado.saludar();
Empleado.saludar2(empleado1);

