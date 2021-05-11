// Función costructor objeto Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '44332211';

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
// La propiedad tel solo la vamos a poder acceder desde el objeto padre
padre.tel = '11223344';
console.log(padre.tel);

let madre = new Persona('Ana', 'Garcia', 'agarcia@mail.com');
madre.tel = '66889900';
console.log(madre.tel);

/* 
Si queremos agregar una nueva propiedad para todos los objetos podemos hacerlo sin necesidad de agregar
al constructor 
Pero para eso necesitamos usar la propiedad prototype (línea 11)

Con prototype vamos a poder modificar los atributos y métodos asociados a un objeto
*/



