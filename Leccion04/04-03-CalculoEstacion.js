let mes = 3;
let estacion;

/* 
if(mes >= 1 && mes <=3) {
    console.log("Verano");
}
else if (mes >=4 && mes <= 6){
    console.log("Otoño");
}
else if (mes >=7 && mes <=9) {
    console.log("Invierno");
}
else if (mes >=10 && mes <=12) {
    console.log("Primavera");
}
 */

if (mes == 1 || mes == 2 || mes == 12){
    estacion = "Verano";
}
else if (mes == 3 || mes == 4 || mes == 5){
    estacion = "Otoño";
}
else if (mes == 6 || mes == 7 || mes == 8){
    estacion = "Invierno";
}
else if (mes ==9 || mes == 10 || mes == 11){
    estacion = "Primavera";
}
else {
    estacion = "Valor incorrecto";
}

console.log(estacion);