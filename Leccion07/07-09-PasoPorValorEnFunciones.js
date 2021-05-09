// PASO POR VALOR
// El paso por valor es cuando usamos tipos que no son objetos. Por ejemplo, números, boolean, etc

// Tipos primitivos
let x = 10;
// Valor primitivo: no podemos asociar propiedades ni métodos a este valor
// Los objetos sí puede contener atributos y métodos

// Intentamos cambiar valor desde el método, lo que no es posible (Paso por Valor)
function cambiarValor(a){ 
    a = 20;
}

cambiarValor(x); //10
console.log(x);
console.log(a); // No está definida porque es un argumento de la función cambiarValor

/* 
    a = x;
    a = 10;
    a = 20;

    Cuando imprimimos x, tiene el valor de 10. x no sufrió ningún cambio.
    Esto se debe a que la variable x únicamente pasó su valor, es decir, x le pasó una copia del valor a 
    y por eso a vale 10
    a no tiene ninguna relación con la variable x, el valor de x se asignó a a solamente
    Si cambiamos el valor de la variable a, x mantiene el valor que tenía asignado
    Cualquier cambio en la variable a no modifica el valor asignado en otra variable
*/

