// Agregar método para escribir nombre completo

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

console.log(persona.nombreCompleto());

