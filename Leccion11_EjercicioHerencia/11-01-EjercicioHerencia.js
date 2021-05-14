// Clase Persona
class Persona{
    static idPersona = 0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        // Contador idPersona
        this.idPersona = ++Persona.idPersona;
    }
    // Método get idPersona 
    get id(){
        return 'Persona ID: ' + this.idPersona;
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
    nombreCompleto(){
        return 'Persona ID: ' + this.idPersona + ' ' + this._nombre + ' ' + this._apellido + ' - ' + this.edad + ' años.';
    }
    toString(){
        return this.nombreCompleto();
    }
}

// Clase Empleado
class Empleado extends Persona{
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return super.nombreCompleto() + ' Sueldo: ' + this._sueldo;
    }
}

// Clase Cliente
class Cliente extends Persona{
    static idCliente = 0; 

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre,apellido, edad);
        this._fechaRegistro = fechaRegistro;
        // Contador idCliente
        this.idCliente = ++Cliente.idCliente;
    }
    get idClient(){
        return 'Cliente ID: ' + this.idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return 'Cliente ID: ' + this.idCliente + ' ' + super.nombreCompleto() + ' Fecha Registro: ' + this.fechaRegistro;        
    }
}


// Pruebas Clase Persona
let persona1 = new Persona('Bruce', 'Wayne', 33);
console.log( persona1.nombre );
persona1.nombre = 'Clark';
console.log ( persona1.nombre );
console.log( persona1._apellido );
persona1.apellido = 'Kent';
console.log( persona1._apellido );
console.log( persona1.edad );
persona1.edad = '34';
console.log( persona1.edad );
console.log ( persona1.toString());
console.log (persona1.id);

// Pruebas Clase Empleado
let empleado1 = new Empleado('Laura', 'Palmer',24,50000);
console.log( empleado1._sueldo );
empleado1.sueldo = 60000;
console.log( empleado1._sueldo );
console.log( empleado1.toString());

// Pruebas Clase Cliente
let cliente1 = new Cliente('Elon', 'Musk', 40, 04/06/2020);
console.log( cliente1._fechaRegistro);
cliente1._fechaRegistro = 05/02/2021;
console.log( cliente1._fechaRegistro); 
console.log( cliente1.idPersona);
console.log( cliente1.idClient);
console.log( cliente1.toString());