class Empleado extends Persona{
    static contadorEmpleado = 0;

    constructor(sueldo){
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleado;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this.sueldo = sueldo;
    }

    toString(){
        return `${super.toString()}
                ${'Empleado #: ' + this._idEmpleado}
                ${'Sueldo: ' + this._sueldo}`;
    }
}

