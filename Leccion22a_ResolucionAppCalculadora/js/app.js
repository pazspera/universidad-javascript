console.log('Aplicación Calculadora 2');

function buscarElemento(nombreId){
    let elemento = document.getElementById(nombreId);
    return elemento;
}

function sumar(){
    let operandoA = buscarElemento('operandoA');
    let operandoB = buscarElemento('operandoB');
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }

    console.log(`Resultado suma: ${resultado}`);
    document.getElementById('resultado').innerHTML = `Resultado suma: ${resultado}`;
}

function restar(){
    let operandoA = buscarElemento('operandoA');
    let operandoB = buscarElemento('operandoB');
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);

    if(isNaN(resultado)){
        resultado = 'La operación no tiene números';
    }
    console.log(`Resultado resta: ${resultado}`);
    document.getElementById('resultado').innerHTML = `Resultado resta: ${resultado}`;
}

function multiplicar(){
    let operandoA = buscarElemento('operandoA');
    let operandoB = buscarElemento('operandoB');
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = `La operación no tiene números`;
    }

    console.log(`Resultado multiplicación: ${resultado}`);
    document.getElementById('resultado').innerHTML = `Resultado multiplicación: ${resultado}`;
}

function dividir(){
    let operandoA = buscarElemento('operandoA');
    let operandoB = buscarElemento('operandoB');
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);

    if(operandoB == 0){
        resultado = "No es posible dividir por cero";
    }
    if(isNaN(resultado)){
        resultado = 'La operación no tiene números';
    }

    console.log(`Resultado división: ${resultado}`);
    document.getElementById('resultado').innerHTML = `Resultado división: ${resultado}`;
}