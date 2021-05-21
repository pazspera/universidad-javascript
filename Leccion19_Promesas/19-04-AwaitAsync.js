/* 
Await en conjunto con async facilitan el uso de promesas
La palabra reservada Await lo que hace es esperar el resultado de una promesa 
*/


let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        resolver
        ('Resolvió correcto');
    }
    else{
        rechazar('Se produjo un error');
    }
});

/* miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));
 */

// Con la promesa podemos manejar los dos parámetros o uno solo, el manejo de error se puede obviar
let promesa = new Promise((resolver) => {
    // console.log('inicio promesa');
    setTimeout( ()=> resolver('Saludos con promesa y timeout'), 3000);
    // console.log('fin promesa');
});

// promesa.then(valor => console.log(valor));

// Async indica que una función regresa una promesa
async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}

// miFuncionConPromesa().then(valor => console.log(valor));

//async con await: una función que va a regresar una promesa
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await');
    });
    
    console.log( await miPromesa);
}

// funcionConPromesaYAwait();

// Combinar promesas, await, async y setTimeout

async function funcionConPromesaAwaitTimeout(){
    console.log( 'inicio de funcion' );
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('Promesa con await y timeout'), 3000);
    });
    console.log( await miPromesa);
    console.log( 'fin de la función' );
};

funcionConPromesaAwaitTimeout(); 