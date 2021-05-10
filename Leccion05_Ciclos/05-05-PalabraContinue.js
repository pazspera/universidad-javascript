// Ejemplo imprimir números pares
// Preguntamos si el número es impar. Si es impar vamos a la próxima iteración y no imprimimos el valor

for(let contador = 0; contador <=10; contador++){
    if(contador % 2 !== 0){
        continue; // Ir a la siguiente iteración, no se ejecuta el resto y vuelve a iterarse el for
    }else {
        console.log(contador);
    }
}

