// Vamos a preguntar si el valor de una variable es realmente un número

// El programa da menor de edad porque estamos comparando un número con NaN (Not a Number)

let miNumero = "18x";
console.log(miNumero);

let edad = Number(miNumero);
console.log(edad);

// Vamos a preguntar si el valor almacenado es numérico y después agregar el programa del ej anterior

if (isNaN(edad)) {
    console.log("No es un número");
}
else {
    if (edad >= 18) {
        console.log("Puede votar");
    }
    else {
        console.log("Es menor de edad");
    }    
}

// Esto se puede aplicar también al operador ternario
if (isNaN(edad)) {
    console.log("No es un número");
}
else {
    let resultado = (edad >= 18) ? "Puede votar" : "Es menor de edad";
    console.log(resultado);
}
