// ¿Son iguales dos valores? El resultado puede ser verdadero o falso
let a = 3, b =2, c = "3";

let z = a == b; // se revisa el valor sin importar el tipo
console.log(z);

z = a === c; // el operador de igualdad estricto revisa los valores pero tambien los tipos
console.log(z);

// ¿Son distintos dos valores?
z = a != c; // se revisa el valor sin importar el tipo
console.log(z);

z = a !== c; // revisa los valores pero tambien los tipos
console.log(z);



