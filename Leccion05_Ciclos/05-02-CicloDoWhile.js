/* 
CICLO DO WHILE

A diferencia de ciclo while, con el do while el bloque de código se va a ejecutar al menos una vez

- Ponemos do, después el bloque de código con sentencias a repetir y después el bloque while evaluando 
  la condición
- While evalúa la condición antes de ejecutar el código, do while evalúa la condición después
  Con while, si la condición es falsa, el bloque de código nunca se va a ejecutar

*/

let contador = 0;

do{
    console.log(contador);
    contador++;
}while(contador < 3);
console.log("Fin del ciclo do while");

// Imprimir números pares de 0 a 10
contador = 0;

do{
  if(contador%2 == 0){
    console.log(contador);
  }
  contador++;
}while(contador <=10);
console.log("Fin ejercicio números pares");