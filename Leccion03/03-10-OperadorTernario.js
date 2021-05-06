/* 
    Operador Ternario   
    
    Es similar al if/else, donde una parte es verdadera y otra falsa y, dependiendo de si 
    el resultado de la expresión es verdadero o falso se va a seleccionar uno o otro resultado

 */

let resultado = (3 > 2) ? "verdadero" : "falso";
console.log(resultado);

/* 
    Primero tenemos la expresión booleana que puede regresar verdadero o falso.
    Si regresa verdadero, el valor que va a regresar a la variable es el indicado después del ?
    En cambio, si es falso, se devuelve el valor después de :

*/

// Con el operador ternario podemos devolver strings, números u otro tipo de datos en verdadero o falso

// Ejemplo: ejercicio de número par pero con el operador ternario en vez de if/else
let numero = 9;
resultado = (numero % 2 == 0) ? "Es par" : "Es impar";
console.log(resultado);

