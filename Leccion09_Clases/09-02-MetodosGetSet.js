/* 
Al igual que con objetos, podemos agregar métodos set y get para trabajar con los atributos de las clases. 
Por ejemplo, podemos agregar un método get para leer los atributos y un set para modificarlo. 
Sin embargo, los métodos get y set no pueden llamarse igual que nuestra propiedad
Se suele acostumbrar usar un _ delante de la propiedad para crear estos métodos
*/

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Bruce', 'Wayne');
// Modificar valor nombre llamando método set
persona1.nombre = 'Bruno'; // set nombre('Bruno')
// No es necesario usar () al llamar métodos get y set
console.log( persona1.nombre ); // get nombre


