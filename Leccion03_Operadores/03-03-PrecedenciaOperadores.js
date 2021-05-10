let a = 3, b = 2, c = 1, d = 4;

// Las expresiones en JavaScript se valoran de izquierda a derecha

let z = a * b;
console.log(z);

z = a * b + c;
console.log(z);

z = c + a * b;
console.log(z);

z = a * b + c / d; 
console.log(z);

z = c + a * b / d;
console.log(z);

// Podemos modificar el orden de ejecución de las expresiones agregando paréntesis
z = (c + a) * b / c;
console.log(z);

