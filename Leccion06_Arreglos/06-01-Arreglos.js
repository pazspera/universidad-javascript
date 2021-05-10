/* 
Un arreglo es un tipo object que permite almacenar varios valores
Hay diferentes formas de declarar arreglos:
*/

// Forma antigua de declarar arreglos, no se recomienda
// let autos = new Array('BMW', 'Mercedez Benz', 'Volvo');

const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);

// Acceder a un elemento en un arreglo
console.log(autos[0]);
console.log(autos[2]);

// Recorrer todos los elementos de un arreglo
for(let i = 0; i < autos.length; i++){
    console.log(i + ": " + autos[i]);
}

// Modificar elementos de un arreglo
autos[1] = 'MercedesBenz';
console.log(autos[1]);

// Agregar elementos a un arreglo
autos.push('Audi');
console.log(autos);

// Otras formas para agregar elementos a un arreglo, pero con estas tener cuidado

// 1. Usando el largo del arreglo
console.log(autos.length);
autos[autos.length] = "Cadillac"; 
// Con el length agregamos un quinto elemento en el indice 4 del arreglo
console.log(autos);

// 2. Agregar elementos en indices superiores, dejando huecos en el arreglo
autos[6] = 'Porshe';
// Teníamos elementos en todos los indice, con esto agregamos al indice 6 y dejamos el indice 5 vacío
console.log(autos);
// Lo recomendable es que tengamos elementos llenos en el arreglo

// Preguntar si es un arreglo
console.log(typeof autos);
// typeof nos dice que es un objeto en JavaScript, pero no nos dice si es un arreglo
console.log(Array.isArray(autos));
// Usando la función isArray de la clase Array
console.log(autos instanceof Array);
// Pregunta si la variable autos es una instancia de tipo arreglo




