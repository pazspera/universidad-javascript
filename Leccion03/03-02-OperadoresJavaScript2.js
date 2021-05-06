let a = 3, b = 2;
let z = a + b;

// Incremento
// Pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);

// Post-incremento (el operador ++ después de la variable)
z = b++;
console.log(b);
console.log(z);

/* 
    Primero se asigna el valor de la variable b a z y después se incrementa
    El post incremento significa que la siguiente vez que se use la variable b se va a incrementar, ya que 
    tiene un incremento pendiente 

    En cambio, en el pre-incremento se incrementa la variable en el momento, antes de ser usado su valor.
    Primero se incrementó el valor y después se actualizó el valor de la variable 
*/

// Decremento
// Pre decremento
z = --a;
console.log(a);
console.log(z);

// Post decremento
z = b--;
console.log(b);
console.log(z);



