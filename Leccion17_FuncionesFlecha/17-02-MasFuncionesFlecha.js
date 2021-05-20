
let miFuncion = function(){ 
    console.log('Saludos desde mi función');
}

// Esta es la sintaxis formal de la función flecha
/* const miFuncionFlecha = () => {
    console.log('Hola desde función flecha');
}
 */

// Si es una sola línea, no hace falta abrir el cuerpo de la función
// const miFuncionFlecha = () => console.log('Hola desde función flecha');

// miFuncionFlecha();

// Ejemplo de función flecha que regresa una cadena
/* const saludar = () => {
    return 'Saludos desde función flecha';
}
 */
const saludar = () => 'Saludos desde función flecha';

console.log( saludar() );

// Regresar un objeto
const regresarObjeto = () => ({nombre: 'Juan', apellido: 'Gomez'});
console.log( regresarObjeto() ); 

// Recibir parámetros
// const funcionConParametros = (mensaje) => console.log(mensaje);
// Si recibimos solo un parámetro podemos obviar los paréntesis
const funcionConParametros = mensaje => console.log(mensaje);

// Forma clásica de escribir esta función
const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
}

funcionConParametros('Saludos con parámetros');
funcionConParametrosClasico('Hola clásicamente');

// Función con varios parámetros
// const funcionConVariosParametros = (op1, op2) => op1 + op2;
const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
};
console.log( funcionConVariosParametros(3, 5) ); 

