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

// Nuevo método independiente imprimir
function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    // instanceof poner la clase de menor jerarquía y seguir subiendo la jerarquía
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo._departamento);
    }
    /* 
    Si preguntamos si es de la clase Empleado, va a imprimir para la clase Empleado y
    para la clase Gerente porque la clase Gerente es hija de la clase Empleado

    instanceof responde que sí al mismo tipo a la clase padre, no responde que sí
    a clases hijas. Por eso si ponemos instanceof Gerente, imprime en Gerente y 
    no en Empleado
    */
    else if(tipo instanceof Empleado){
        console.log('Es un tipo Empleado');
        console.log(tipo._departamento);
    }
    else if(tipo instanceof Object){
        console.log('Es un tipo Object');
    }
}

let empleado1 = new Empleado('Javier', 3000);
let gerente1 = new Gerente('Juan Lopez', 15000, 'Sistemas');

/* 
Con el método imprimir, si pasamos elementos de la clase padre, se va a ejecutar el 
método obtenerDetalles() de la clase padre. Pero si pasamos elementos de la clase hija,
se va a ejecutar el método obtenerDetalles() de la clase hija

Polimorfismo: múltiples formas
En este caso, llamar un método de la clase padre o de la clase hija 
*/

determinarTipo( empleado1 );
determinarTipo( gerente1 );

/* 
A veces puede ser necesario saber el tipo con el que estamos trabajando. Para eso tenemos
la palabra reservada instanceof. Nos permite preguntar si el tipo que estamos recibiendo 
corresponde a cierta clase
*/

