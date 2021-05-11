/* 
Los cambios que hagamos sobre la variable padre solo afectará al objeto padre. 
Si agregamos una nueva propiedad o método al objeto padre usando el nombre de variable padre, solamente 
se va a agregar a ese objeto. 
Si queremos que se asocie a todos los objetos tenemos que agregarlos desde la función constructor
*/

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre.nombreCompleto());

let madre = new Persona('Ana', 'Garcia', 'agarcia@mail.com');
console.log(madre.nombreCompleto());
