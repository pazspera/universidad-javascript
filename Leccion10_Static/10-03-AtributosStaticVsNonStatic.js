/* 
También podemos agregar atributos non-static (se asocian a los objetos) a nuestra clase sin que sea
necesario declararlos en el constructor
*/

class Persona{
    static contadorObjetosPersona = 0; // Atributo de la clase
    
    email = 'Valor default email'; // Atributo non-static, de los objetos

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;

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

console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

// Acceder atributo email desde objetos
console.log(persona1.email);
console.log(empleado1.email);
//Acceder atributo email desde la clase Persona
console.log(Persona.email);
console.log(Empleado.email);
