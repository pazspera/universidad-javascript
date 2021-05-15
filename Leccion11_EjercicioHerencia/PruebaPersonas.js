class Persona{
    static contadorPersona = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
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

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad + ' años'}`;
    }
}

class Empleado extends Persona{
    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleado;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this.sueldo = sueldo;
    }

    toString(){
        return `${super.toString()}
        ${'Empleado #: ' + this._idEmpleado} ${'Sueldo: ' + this._sueldo}`;
    }
}

class Cliente extends Persona{
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()}
        ${'Id Cliente: ' + this._idCliente} ${'Fecha registro: ' + this._fechaRegistro}`;
    }
}

// Prueba clase Persona
let persona1 = new Persona('Juan', 'Perez', 28);
console.log( persona1.toString() );

let persona2 = new Persona('Carlos', 'Ramirez', 35);
console.log( persona2.toString() );

// Prueba clase Empleado
let empleado1 = new Empleado('Juana', 'Garcia', 30, 45000);
console.log( empleado1.toString() );

let empleado2 = new Empleado('Daniel', 'Perez', 29, 34000);
console.log( empleado2.toString() );

//  Prueba clase Cliente
let cliente1 = new Cliente('Andres', 'Gonzalez', 50, new Date());
console.log( cliente1.toString() );

let cliente2 = new Cliente('Ana', 'Gomez', 34, new Date());
console.log( cliente2.toString() );
