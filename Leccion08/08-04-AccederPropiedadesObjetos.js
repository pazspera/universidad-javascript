// Formas de acceder a propiedades de objetos

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

console.log(persona.nombre);
// También podemos acceder a las propiedades como si fuera un arreglo
console.log(persona['apellido']);
// En vez del número del array, colocamos entre comillas el nombre de la propiedad que queremos

// También podemos recorrer todas las propiedades del objeto con un ciclo for
// Es un ciclo for distinto donde cambia la sintaxis. Se conoce como for in
for( nombrePropiedad in persona){
    // Acedemos al nombre de todas las propiedades del objeto
    console.log(nombrePropiedad);
    // Accedemos a los valores de cada una de las propiedades del objeto
    console.log(persona[nombrePropiedad]);
}


