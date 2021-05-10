// Agregar propiedades al objeto
let persona = {
    nombre: 'Paz',
    apellido: 'Wayne',
    email: 'pwayne@mail.com',
    edad: 33,
    // Agregar un método es similar a agregar una propiedad
    nombreCompleto: function(){
        // This es un apuntado al objeto que se está ejecutando en este momento
        return this.nombre + ' ' + this.apellido;
    }
}

persona.tel = "1542545543";
console.log(persona);

/* 
Con esta forma de agregar propiedades hay que tener cuidado al tipear. Por ejemplo, si queremos cambiar
el valor de la propiedad pero escribimos más su nombre, vamos a crear una nueva propiedad
 */
persona.te1 = "2432432432";
console.log(persona);

// Eliminar una propiedad usando palabra reservada delete
delete persona.te1;
console.log(persona);
