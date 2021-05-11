/* 
Una limitación a la forma en que creamos objetos en las lecciones anteriores es que no podemos
reutilizar el código para crear un nuevo objeto de la clase persona. 
Es conveniente usar constructores que permitan crear diversos objetos del tipo persona con 
los atributos y métodos que estuvimos trabajando. 

Para llamar al constructor vamos a usar la palabra reservada new 
*/

// Función constructor de objetos de tipo persona
// Se recomienda que los métodos constructores de objetos empiecen con mayúsculas
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

// Crear un objeto tipo persona con el constructor
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre);

let madre = new Persona('Ana', 'Garcia', 'agarcia@mail.com');
console.log(madre);

padre.nombre = 'Pablo';
console.log(padre);
console.log(madre);





