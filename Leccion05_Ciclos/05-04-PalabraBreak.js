/* 
La palabra break se puede utilizar para romper un ciclo
*/

// Imprimir números pares de 0 a 10
for(let contador = 0; contador%2 == 0; contador++){
    console.log(contador);
}

for(let contador = 0; contador <=10; contador++){
    if(contador%2 == 0){
        console.log(contador);
    }
}

//Imprimir primer número par que encontremos
for(let contador = 0; contador <=10; contador++){
    if(contador%2 == 0){
        console.log(contador);
        break;
    }
}
console.log("Fin del ciclo for"); 


