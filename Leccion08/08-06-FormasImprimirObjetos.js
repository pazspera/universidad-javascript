/* 
Hasta ahora trabajamos con la consola de Visual Studio Code y usamos console.log para imprimir objetos
En un navegador esto puede no funcionar y se imprimiría [object Object] lo que no es muy útil
Estas maneras de mandar a imprimir objetos las usamos al trabajar con navegadores web
*/

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

// Concatenar cada valor de cada propiedad
console.log(persona.nombre + ' ' + persona.apellido);

// Iterar propiedades usando for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

// Método values, devuelve el objeto como un array
let personaArray = Object.values(persona);
console.log(personaArray);

// Convertir objeto en cadena
let personaString = JSON.stringify(persona);
console.log(personaString);

