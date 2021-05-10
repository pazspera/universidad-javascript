// Método set

let persona = {
    nombre: 'Paz',
    apellido: 'Wayne',
    email: 'pwayne@mail.com',
    edad: 33,
    // Agregamos propiedad idioma, que por lo general se usa en mayúsculas
    idioma: 'es',
    //Vamos a agregar el método get para que almacene en mayúsculas la propiedad idioma
    get lang(){
        return this.idioma.toUpperCase();
    },
    // Agregamos el método set para recuperar el idioma en mayúsculas
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.lang);

persona.lang = 'en';
console.log(persona.lang);
console.log(persona.idioma);

