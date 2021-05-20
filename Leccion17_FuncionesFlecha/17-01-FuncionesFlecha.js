/* 
Las funciones flecha no utilizan un nombre, son funciones anónimas
Tampoco se usa la palabra reservada function, se usan directamente los argumentos
Entre los argumentos y el cuerpo de la función vamos a agregar el operador flecha => para indicar que 
inicia el cuerpo de la función flecha

Con las funciones flecha NO se aplica el concepto de hoisting
Las tenemos que definir antes de llamarlas para que funcionen
Al definir una variable con let no aplica el concepto de hoisting
*/

/* 
function miFuncion(){
    console.log('Saludos desde mi función');
}
 */

// Función anónima
let miFuncion = function(){ 
    console.log('Saludos desde mi función');
}

// Es común usar const en vez de let para usar las funciones flecha
// Esta es la sintaxis formal de la función flecha
const miFuncionFlecha = () => {
    console.log('Hola desde función flecha');
}

miFuncion();
miFuncionFlecha();

