/* 
Con la función Call también podemos pasar argumentos. Por ejemplo, en la función de nombreCompleto
podríamos pasar el título de la persona que queremos imprimir
*/

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
    // En titulo y tel no usamos this ya que estas variables son parámetros del método 
};

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
};

// Uso de Call para usar el método persona1.nombreCompleto con los datos de persona2
console.log( persona1.nombreCompleto() );

// Llamamos al método de persona1 con los datos del objeto persona2
console.log( persona1.nombreCompleto.call( persona2, 'Ing', '332212244' ) );
