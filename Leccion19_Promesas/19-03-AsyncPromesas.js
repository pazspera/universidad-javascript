/* 
La palabra async permite facilitar el uso de promesa.
Al poner la palabra async antes de la definición de un método significa que es método está obligado a devolver una promesa

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

miFuncionConPromesa().then(valor => console.log(valor));
