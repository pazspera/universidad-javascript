console.log('Aplicación Calculadora');

function sumar(){
    const forma = document.getElementById('forma');
    // Devuelven objetos input text
    // Se toman como valores string así que en vez de 
    // hacer la suma, se concatenan los valores
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    // parseInt permite convertir a number
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}