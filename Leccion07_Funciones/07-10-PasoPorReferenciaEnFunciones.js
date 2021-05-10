// PASO POR REFERENCIA

/* 
Para ver paso por referencia, vamos a crear un objeto. A los objetos se le pueden asociar 
propidades y métodos

Para definir objetos es buena práctica definir una variable constante
*/

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
}
console.log(persona);
// La variable persona almacena una referencia a un objeto
// A través de esta variable podemos acceder a los atributos y modificarlos

function cambiarValorObjeto(p1) {
    p1.nombre = 'Carlos';
    p1.apellido = 'Gomez';
}

// Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);

/* 
La variable persona y el parámetro p1 apuntan a la misma referencia en memoria del objeto
Por lo tanto, puede acceder a los valores y modificarlos mediante métodos 
*/