/* 
    Switch utiliza comparación estricta, es decir, compara el valor y el tipo de dato.
    En este ejemplo, si definiéramos mes = "12", seleccionaría el default porque tiene tipo string. 
*/

let mes = 12;
let estacion = "Estación desconocida";

switch(mes){
    case 1: case 2 : case 12:
        estacion = "Verano";
        break;
    case 3: case 4 : case 5: 
        estacion = "Otoño";
        break;
    case 6: case 7: case 8:
        estacion = "Invierno";
        break;
    case 9: case 10: case 11:
        estacion = "Primavera";
        break;
    default:
        estacion = "Valor incorrecto";
}

console.log(estacion);