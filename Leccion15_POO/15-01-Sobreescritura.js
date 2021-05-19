/* 
Sobreescritura
Por ejemplo, si una persona canta bien, sus hijes probablemente hereden una buena voz.
Sin embargo, les hijes no cantaran igual que sus progenitores, sino que lo harán de una 
manera propia. 

En JS, podemos crear una clase padre Empleado y una clase hija Gerente.
La clase Empleado tiene los atributos nombre y sueldo, más el método obtenerDetalles().
La clase Gerente va a sobreescribir el comportamiento del método obtenerDetalles() definido
en la clase padre. 
La clase hija va a agregar su propio comportamiento a los métodos heredados de la clase padre. 
*/

class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }
}

let empleado1 = new Empleado('Javier', 3000);
console.log( empleado1.obtenerDetalles() );

let gerente1 = new Gerente('Juan Lopez', 15000, 'Sistemas');
console.log(gerente1);
console.log( gerente1.obtenerDetalles() );
