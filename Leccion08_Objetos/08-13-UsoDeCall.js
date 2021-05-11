/* 
El método Call nos permite llamar a un método que está definido en un objeto desde otro objeto
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
    // No se define método nombreCompleto en este objeto
};

// Uso de Call para usar el método persona1.nombreCompleto con los datos de persona2
console.log( persona1.nombreCompleto() );

// Llamamos al método de persona1 con los datos del objeto persona2
console.log( persona1.nombreCompleto.call( persona2 ) );


