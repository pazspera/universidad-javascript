/* 
La forma de crear objetos de las lecciones anteriores es la más común de crear objetos
Otra manera de crear objetos es usando la palabra reservada new pero no es tan común 
*/

// Esto crea un objeto vacío en memoria, no contiene ninguna propiedad
let persona2 = new Object(); // Object debe ser con mayúsculas 
// Agregar atributos 
persona2.nombre = 'Carlos';
persona2.apellido = 'Gomez';
persona2.direccion = 'Saturno 15';
persona2.telefono = "142525424";

console.log(persona2.telefono);
