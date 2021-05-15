class Cliente extends Persona{
    static contadorClientes = 0;

    constructor(fechaRegistro){
        this._idCliente = ++contadorCientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()}
                ${'Id Cliente: ' + this._idCliente}
                ${'Fecha registro: ' + this._fechaRegistro}`;
    }
}