/* 
A diferencia de los objetos, una clase es una plantilla. 
En la clase vamos a definir los atributos y métodos que queremos que contengan nuestros objetos. 
A partir de esta clase (o plantilla) vamos a poder crear instancias.
Un objeto es una instancia de una clase. 
Un objeto puede tener valores en sus atributos, por ejemplo:

    Persona     - Clase
    Carla       - Objeto
    Armando     - Objeto

Si la clase tiene valores, estos valores van a aplicarse a todos los objetos que se creen. 
Pero la idea de una clase es que sea una plantilla, y a partir de ella, crear instancias. 

Una clase va a tener: 
- Nombre de la clase
- Atributos
- Métodos 
Con la clase vamos a poder crear objetos que compartan las mismas características (atributos y métodos).
Sin embargo, cada objeto va a tener valores particulares. Cada objeto contiene sus propios valores. 
*/

// Se recomienda que el nombre de la clase empiece en mayúsculas
class Persona{
    // Agregamos constructor
    constructor(nombre, apellido){
        // Inicializamos atributos de la clase
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// Crear objeto (instancia de clase)
let persona1 = new Persona('Bruce', 'Wayne');
console.log(persona1);

let persona2 = new Persona('Clark', 'Kent');
console.log(persona2);
console.log(typeof persona2);


