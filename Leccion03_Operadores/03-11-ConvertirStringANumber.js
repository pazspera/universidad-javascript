// Convertir de String a Number

let miNumero = "20";
console.log(miNumero);
console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(typeof edad);

/* 
if (edad >= 18) {
    console.log("Puede votar");
}
else {
    console.log("Es menor de edad");

}
 */
let resultado = (edad >= 18) ? "Puede votar" : "Es menor de edad";
console.log(resultado);

// Una ventaja de usar los operadores ternarios en vez de if/else es que se escribe menos código