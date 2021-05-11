/* 
Con el método apply vamos a poder hacer llamadas similares a las que hicimos con el método call. 
La diferencia es principalmente cuando pasamos parámetros
*/

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
};

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
};

// Uso de Apply para usar el método persona1.nombreCompleto con los datos de persona2
console.log( persona1.nombreCompleto() );

// Si no pasamos ningún parámetro funcionan de la misma manera
console.log( persona1.nombreCompleto.apply( persona2 ));

// Agregamos los parámetros al constructor

let persona3 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
};

let persona4 = {
    nombre: 'Carlos',
    apellido: 'Lara'
};

console.log(persona3.nombreCompleto('Lic', '223311334'));

/* 
Con el método call los parámetros se pasan por separado, uno por uno, separados por comas
En cambio, con el método apply, lo que hacemos es pasar un arreglo con los valores de los argumentos
que queremos mandar a este método
Simplifica el trabajo porque no tenemos que pasar uno a uno los argumentos
*/
let arreglo = ['Ing', '22335522'];
console.log(persona3.nombreCompleto.apply( persona4, arreglo ));
// Podemos pasar una variable con el arreglo o los valores del arreglo directamente
console.log(persona3.nombreCompleto.apply( persona4, ['Ing', '22335522'] ));




