/* 
En JS también podemos definir funciones que se manden a llamar a sí mismas. 
Estas son las Funciones Self-Invoking
*/

(function (){
    console.log("Ejecutando la función");
}) ();
// No podemos volver a llamar esta función ya que no está asignada a una variable y no tiene nombre asignado
// Solamente se manda a llamar en este momento y es el único momento que se puede mandar a llamar

/* 
Este tipo de función puede ser útil en desarrollo web cuando necesitemos mandar a llamar una función 
a sí misma cuando carga el programa
 */

(function (a, b){
    console.log("Ejecutando la función: " + (a + b));
}) (3, 4);
