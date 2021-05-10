/* 
La diferencia entre un tipo primitivo (ej tipo numérico) y un objeto es que el tipo primitivo no
contiene propiedades ni métodos. 
 */

let x = 10;
console.log(x.length);

/* 
Un objeto puede contener propiedades y métodos. 
Al declarar un objeto, lo que sucede después del = es que se crea un objeto en memoria con las propiedades
que definimos (en este caso nombre, apellido, email y edad) y a este objeto se le asigna una referencia
en memoria. A la variable de persona se le asigna la referencia en memoria
 */

let persona = {
    nombre: 'Paz',
    apellido: 'Wayne',
    email: 'pwayne@mail.com',
    edad: 33,
}

console.log(persona.nombre);
persona.nombre = 'Bruce';
console.log(persona.nombre);
console.log(persona.edad);

console.log(persona);



