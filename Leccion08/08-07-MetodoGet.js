/* 
Los métodos get y set son mejores prácticas para acceder y modificar los valores de nuestros
objetos
*/

// Otra manera de llamar a la función del objeto es mediante el método get
// Con el método get no hace falta indicar que es una función con los (), la llamamos como una propiedad
let persona = {
    nombre: 'Paz',
    apellido: 'Wayne',
    email: 'pwayne@mail.com',
    edad: 33,
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto);


