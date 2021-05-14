// Atributos static

class Persona{
    // Crear atributo static, pertenece a la clase, no a los objetos
    static contadorObjetosPersona = 0;
    // Cada vez que creemos un objeto, podemos usar esta variable para incrementarla


    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        // Incrementar variable contadorObjetosPersona
        // This apunta al objeto por lo que no puede acceder a la variable contadorObjetosPersona
        // que es de la clase, no de los objetos
        Persona.contadorObjetosPersona++;
        console.log( 'Se incrementa contador: ' + Persona.contadorObjetosPersona );
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

Persona.saludar(); 
Persona.saludar2(persona1);
Empleado.saludar();
Empleado.saludar2(empleado1);

// No debemos acceder a la variable static desde un objeto
console.log(persona1.contadorObjetosPersona);
// Accedemos al atributo static desde la clase
console.log(Persona.contadorObjetosPersona);
// Las clases hijas también pueden acceder a los atributos static
console.log(Empleado.contadorObjetosPersona);