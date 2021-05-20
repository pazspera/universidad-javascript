/* 
El objetivo de las funciones Callback es que puedan ser utilizadas para procesos que se ejecutan de manera asíncrona
En los procesos síncronos se ejecuta una línea a la vez (primero línea 1, después línea 2, línea 3, etc)
Las funciones Callback van a establecer un nuevo flujo, es decir, se va a realizar un proceso por separado mientras la
función puede seguir trabajando
Con las funciones Callback vamos a poder ejecutar varios procesos por separado (procesos asíncronos)
*/

// Llamada asíncronas con uso setTimeout
// Nos permite iniciar una nueva tarea
function miFuncionCallback(){
    console.log('Saludo asíncrono después de 3 seg');
}

setTimeout(miFuncionCallback, 3000); // después de 3 seg

setTimeout( function(){console.log('saludo asíncrono 2')}, 4000);

// Con función flecha
setTimeout( () => console.log('saludo asíncrono 3'), 1000);

