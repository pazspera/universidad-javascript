/* 
El uso de labels no es recomendable, se conoce como programacion go-to
Las etiquetas nos permite ir a la parte del programa que queramos
*/

inicio: // Label
for(let contador = 0; contador <=10; contador++){
    if(contador % 2 !== 0){
        continue inicio; // Indicamos que vaya a la label inicio, también se puede usar con break
    }else {
        console.log(contador);
    }
}
