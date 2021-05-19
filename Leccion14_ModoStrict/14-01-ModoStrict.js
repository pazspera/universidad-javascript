/* 
Si empezamos a usar una variable sin haberla declarado antes, JavaScript no nos va a indicar
un error. Existe el modo estricto para evitar esto ya que no se considera una buena práctica,
especialmente en proyectos grandes. 
Basta con agregar esta cadena:
"use strict";

Si vamos a usar modo estricto es conveniente que sea la primera línea del programa.
También podemos usarlo dentro de una función. 
*/

"use strict";

// x = 10;
// console.log(x);

let y = 10;
console.log(y);

miFuncion();

function miFuncion(){
    // "use strict";
    z = 15;
    console.log( z );
}

