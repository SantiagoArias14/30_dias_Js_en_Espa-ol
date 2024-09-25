/*
¿Que es JavaScript?

Es un lenguaje de programacion que permite hacer paginas web interactivas. Quiere decir que se ejecuta en el
navegador, lo que singnifica que no se necesita instalar nada en especial para comenzar a utilzarlo.

- HTML: Estrucura del contenido web.
- CSS: Estiliza la web.
- JavaScript: Agrega interactividad.


*/

// Tipos de datos

// Numeros:
var num1V = 42; // Los numeros pueden ser negativo o positivos.
var numF = 42.5;

// Strings: (cadenas de texto)
var text = "Hola mundo";
var text = 'Hola mundo';

// Booleanos: 
var esVerdad = true;
var esFalso = false;

/*
Hay otros tipos de datos como "null", "undefined", "objects" y "arrays".
*/

//---------------------------------------------------------------------------------------//

// Variables: 

var tipo1 = ""; // Ya no se usa.
let tipo2 = ""; // Se utiliza para declarar variables que pueden cambiar solo en un bloque de codigo.
const tipo3 = ""; // Son variables que no cambian

// Ejemplo Variables
//let edad = 22;
//const nombre = "Santiago"
//console.log(edad)
//console.log(nombre)

/*
Reglas para nombrar variables:
    - Deben comenzar con una letra, un guion bajo o el signo de dolar.
    - No pueden empezar con un numero.
    - No pueden contener espacios.
*/

// Ejemplo 
const nombre = "Santiago";
let edad = 22;
let esEstudiante = true;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Es estudiante?:", esEstudiante);

//---------------------------------------------------------------------------------------//

// Buenas practicas en JavaScript

// Usar "let", "const" en lugar de "var".
// Nombrar las variables de forma descriptiva, para que el codigo sea mas claro.
// Usar comentarios para explicar partes importantes del codigo.

// Ejercicios

// 1. Declarar variables para un nombre, edad, y preguntar si estudiante y utilizar el console.log().

let nombre2 = "Miguel";
let edadM = 18;
const esEstudianteM = false;
console.log(nombre2);
console.log(edadM);
console.log(esEstudianteM);

// 2. Declarar una variable llamada colorFavorito, asignarle un valor y luego cambiar el valor de la variable.

let colorFavorito = "Rojo";
console.log(colorFavorito)

colorFavorito = "Morado"
console.log(colorFavorito)

//3. Declarar 2 variables que guarden 2 numeros, realizar: suma, resta, division y multiplicacion.

let num1 = 10;
let num2 = 20;

console.log("Suma:", num1 + num2);
console.log("Resta:", num1 - num2);
console.log("Division:", num1 / num2);
console.log("Suma:", num1 * num2);

// Cambiar el tipo de dato

let textoNumero = "22";
let realNumero = 27;

console.log("La suma es: ", textoNumero + realNumero);

textoNumero = Number(textoNumero);
console.log("La suma es:", textoNumero + realNumero);

// Booleanos con condiciones

const esMayorDeEdad = true;
const tienePermiso = false;

console.log("Puede entrar a la fiesta?;", esMayorDeEdad && tienePermiso);
console.log("No tiene permiso, pero puede entrar?;", esMayorDeEdad || tienePermiso);