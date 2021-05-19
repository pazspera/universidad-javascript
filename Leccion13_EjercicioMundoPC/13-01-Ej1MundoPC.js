class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    toString(){
        return `IdRaton: ${this._idRaton}, Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    toString(){
        return `IdTeclado: ${this._idTeclado}, Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.contadorMonitores;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamaño(){
        return this.tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }
    toString(){
        return `IdMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}`;
    }
}

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, Monitor, Teclado, Raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._Monitor = Monitor;
        this._Teclado = Teclado;
        this._Raton = Raton;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get Monitor(){
        return this._Monitor;
    }
    set Monitor(Monitor){
        this._Monitor = Monitor;
    }
    get Teclado(){
        return this._Teclado;
    }
    set Teclado(Teclado){
        this._Teclado = Teclado;
    }
    get Raton(){
        return this._Raton;
    }
    set Raton(Raton){
        this._Raton = Raton;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n Monitor: ${this._Monitor.toString()} \n Teclado: ${this._Teclado.toString()} \n Raton: ${this._Raton.toString()}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    agregarComputadora(Computadora){
        this._computadoras.push(Computadora);
    }
    mostrarOrden(){
        let resumenOrden = '';
        for(let computadoras of this._computadoras){
            // Usar template string en vez de llamar a toString()
            resumenOrden = resumenOrden + this._computadoras.toString();
            // resumenOrden += `\n ${this._Computadora.toString()}`; 
        }
        console.log(`Orden: ${this._idOrden} ${resumenOrden}`);
    }
}


// Pruebas
let raton1 = new Raton('Usb', 'Genius');
let raton2 = new Raton('USB', 'Logitech');
console.log( raton2.toString() );

let teclado1 = new Teclado('Bluetooth', 'Genérico');
let teclado2 = new Teclado('USB', 'Genius');
console.log( teclado2.toString() );

let monitor1 = new Monitor('Samsung', '25');
let monitor2 = new Monitor('LG', '36');
console.log( monitor2.toString() );

let computadora1 = new Computadora('Armada', monitor1, teclado1, raton1);
console.log( computadora1.toString() );

let computadora2 = new Computadora('Premium', monitor2, teclado2, raton2);
console.log( computadora2.toString() );

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
console.log( orden1.mostrarOrden()); 
