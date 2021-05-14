// Crear variable de tipo static de solo lectura


class Persona{
    static contadorPersonas = 0; 
    // Variable static que queremos se mantenga inmodificable (no podemos usar const)
    // Creamos un método static que nos va a permitir leer el valor que va a regresar el método,
    // pero no vamos a poder cambiar la variable porque no es una variable en sí, sino una 
    // llamada al método static 

    // Máximo de objetos que podemos crear de la clase, incluyendo clase padre e hijas
    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        // Evitar que se creen más de 5 objetos de la clase
        if( Persona.contadorPersonas < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorPersonas;
        }
        else {
            console.log( 'Se han superado el máximo de objetos permitidos');
        }
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
    // Agregar id al método toString
    nombreCompleto(){
        return this.idPersona + ': ' + this._nombre + ' ' + this._apellido;
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
console.log(persona1.toString());

let empleado1 = new Empleado('Clark', 'Kent', 'Redacción');
console.log( empleado1.toString() );
console.log(Persona.contadorPersonas);

let persona2 = new Persona ('Diana', 'Prince');
console.log(persona2.toString());
console.log(Persona.contadorPersonas);


console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
// Intentar cambiar este valor no funciona, definimos el método get pero no el set
console.log(Persona.MAX_OBJ);

// Probando límite de máximo objetos
let persona3 = new Persona('Barry', 'Allen');
let persona4 = new Persona('Hal', 'Jordan');
let persona5 = new Persona('Laura', 'Palmer');
console.log ( persona3.toString()) ;
console.log ( persona4.toString()) ;
console.log ( persona5.toString()) ;

