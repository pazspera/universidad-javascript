class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $ ${this._precio}`;
        // Podemos agregar el $ antes de precio para que agregue el símbolo
    }
    // Con \n se hace un salto de línea
}

class Orden{
    static contadorOrdenes = 0;

    // La constante MAX_PRODUCTOS es en realidad un método get, no una constante
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        // this._contadorProductosAgregados = 0;
    }

    get idOrder(){
        return this._idOrden;
    }    

    agregarProducto(producto){
        if( this._productos.length < Orden.MAX_PRODUCTOS){
            // Agrega producto al arreglo de productos
            this._productos.push(producto);
            // this._productos[this._contadorProductosAgregados++] = producto;
        }
        else {
            console.log('No se pueden agregar más productos');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        // Sintaxis simplificada para recorrer el arreglo productos
        for( let producto of this._productos ){
            totalVenta += producto.precio; // totalVenta = totalVenta + producto.precio
        }
        return totalVenta;
    }

    mostrarOrden(){
        // Imprime cada elemento de la orden con su detalle 
        let productosOrden = '';
        for( let producto of this._productos ){
            productosOrden += '\n{' + producto.toString() + '} ';
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}


// Prueba producto
let producto1 = new Producto('Pantalón', 200);
let producto2 = new Producto('Camisa', 100);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2); 
orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('Cinturón', 50);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.mostrarOrden();

