/* 
En una promesa vamos a usar funciones de tipo callback. Una promesa básicamente es código que tiene varios estados
Vamos a poder lanzar una petición para procesar cierto código en caso de que la promesa se haya resuelto correctamente.
En caso de que hayamos tenido problemas se manda a llamar el caso de rejected
Tenemos 2 caminos: en 1 la promesa se ejecutó correctamente y en el otro puede haber tenido un error

Mientras la promesa no haya terminado de ejecutar su código está en estado Pending. Si ejecutó el código correctamente, su 
estado pasa a Resolved. Si falló el código, pasa a Rejected. 
Para procesar el código cuando se haya resuelto la promesa vamos a usar la función .then()
Para procesar la promesa en caso de que tengamos error vamos a usar la función .catch()
*/

// La promesa recibe 2 parámetros, funciones callback 
// El primer parámetro es para cuando se resolvió correctamente y el segundo, para cuando falla
let miPromesa = new Promise((resolved, rejected) => {
    let expresion = false;
    if(expresion){
        resolved('Resolvió correcto');
    }
    else{
        rejected('Se produjo un error');
    }
});

/* miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
); */

miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));

