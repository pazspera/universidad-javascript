// Ejemplo de AND &&
// Para que regrese verdadero, ambas expresiones deben ser verdaderas
// Si alguna de las expresiones es falsa, regresa falso

let a = 5;
let valMin = 0, valMax = 10;

if(a >= valMin && a <= valMax) {
    console.log("Está dentro del rango");
}
else {
    console.log("Está fuera del rango");
}

// Ejemplo de OR || 
// Regresa true si cualquiera de los operandos es true
// Solo regresa false si ambos operandos son false
let vacaciones = false, diaDescanso = false;
if( vacaciones == true || diaDescanso == true) {
    console.log("Puede asistir al partido");
}
else {
    console.log("No puede asistir al partido");
}

