const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta auto', 1500.00),
];

const egresos = [
    new Egreso('Renta', 900),
    new Egreso('Ropa', 400),
];

let cargarApp = ()=>{
    cargarCabecero();
}

let totalIngresos = ()=>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = ()=>{
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
}

let cargarCabecero = ()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = presupuesto;
}