/* 
CICLO WHILE

- Empezamos con while y revisamos una condición
- Al revisar la condición, si es verdadera ejecutamos el bloque de código del ciclo while
- Una vez que se ejecutan estas sentencias, volvemos a revisar la condición
- Si la condición vuelve a ser verdadera, se vuelven a ejecutar las sentencias del bloque de código
- Esto se repite mientras la condición siga siendo verdadera
- Una vez que la condición es falsa, termina la ejecución del ciclo while

*/

// Necesitamos la variable contador que nos va a permitir terminar el ciclo
let contador = 0;

while(contador < 3){
    console.log(contador);
    contador++;
}
console.log("Fin ciclo while");

// Imprimir números pares de 0 a 10
contador = 0;
while(contador <=10){
    if(contador%2 == 0){
        console.log(contador);
    }
    contador++;
}
console.log("Fin ejercicio números pares");