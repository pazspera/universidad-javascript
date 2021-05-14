

class Persona{
    static contadorPersonas = 0; 
    
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        // Con cada objeto persona que creamos, le asignamos un # identificador al incrementar el 
        // contador static de la clase
        this.idPersona = ++Persona.contadorPersonas;
        // Hacemos un pre incremento para que aumente el contador antes de que se asigne, de esa
        // manera el primer objeto tiene # 1 en vez de 0 
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