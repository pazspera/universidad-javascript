let resultado = sumarTodo(5, 4, 13, 10, 9, 10, 11, 3);
console.log(resultado);

function sumarTodo(){
    // Usa el arreglo de la propiedad argumentos para acceder a los argumentos que se pasan a la función
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; // suma = suma + arguments[i]
    }
    return suma;
}

// De esta manera podemos pasar dinámicamente todos los argumentos necesitemos a la función sumarTodo


