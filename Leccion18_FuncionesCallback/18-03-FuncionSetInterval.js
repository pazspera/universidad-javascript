// Función setInterval
// Esta función manda a llamar a la función Callback varias veces cada cierto tiempo especificado

let reloj = () => {
    // Extraer hora, minuto y segundo de la fecha actual
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

// Mandar a llamar la función reloj cada 1 segundo
setInterval(reloj, 1000); 