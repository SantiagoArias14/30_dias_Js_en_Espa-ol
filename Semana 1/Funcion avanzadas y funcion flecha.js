// Dia 5: Funciones avanzadas y Funciones flechas

/*

1. Funciones como parametros;

Las funciones son ciudadanos de primera clase, lo que significa que puedes ser asignadas a variables,
pasadas como argumentos a otras funciones y devueltas por funciones.
*/

// Ejemplo basico de funcion como parametro:

function ejecutarFuncion(funcion){
    funcion();
}
function saludar(){
    console.log("Hola!");
}
ejecutarFuncion(saludar);

//---------------------------------------------------------------------//

/*

2. Funciones flecha:
Proporcionan una forma mas concisa de escribir funciones en Js. Se utiizan especialmente cuando la 
funcion es simple.
*/

// Sintaxis basica:
const funcionFlecha = (parametro1, parametro2) => {
    // Codigo que vamos a ejecutar
    return resultado;
}

// Si la funcions solo tiene un parametro y una sola expresion, se pueden omitir los parantesis.
const cuadrado = x => x * x;

//---------------------------------------------------------------------//

/*

3. Funciones que devuelven funciones:
Es posibble que una funcion devuelva otra funcion. Esto es util para crear funciones dinamicas.
*/

// Ejemplo de funciones que devuelven funciones

function crearMultiplicador(factor) {
    return numero => numero * factor;
}

const multiplicadorPor2 = crearMultiplicador(2);
console.log(multiplicadorPor2(2))

//---------------------------------------------------------------------//

/*

4. Funciones inmediatas:
Se ejecutan tan pronto como se definen. Esto es util cuando se necesita que una funcion se ejecute, solo
una vez, sin tener que llamarla mas tarde.
*/

// Sintaxis basica
//(function() {
    //console.log("Esto se ejecuta de inmediato");
//})();

//---------------------------------------------------------------------//

// Ejemplos de las funciones

// Ejemplo 1: Funciones como parametros

function calcular(funcionF, numero1, numero2){
    return funcionF(numero1, numero2);
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

console.log(calcular(sumar, 5 , 3));
console.log(calcular(restar, 10, 2));

// Ejemplo 2: Funcion flecha

const multiplicar = (a, b) => {
    return a * b;
}

console.log(multiplicar(2, 4))

// Ejemplo 2.5: Funcione flecha simple
const multplicarFlechaSimple = (a, b) => a * b;
console.log(multplicarFlechaSimple(5, 5))

// Ejemplo 3: Funcion que devuelve una funcion

function saludarPersonalizado(nombre) {
    return mensaje => console.log(`${mensaje}, ${nombre}`);
}

const saludarSantiago = (saludarPersonalizado("Santiago"));
saludarSantiago("Hola");

// Ejemplo 4: Funcion inmediata:

(function() {
    console.log("Esto se ejecuta de inmediato.")
})();

//------------------------------------------------------------------------//

/* 
Funcion con parametros:
Crear una funcion llamada operacion matematica que acepte 2 numeros y una funcion 
como argumentos. la funcion debe devolver el resultado de aplicar la funcion a los 2 numeros.*/

function operacionMatematica(funcion, num1, num2) {
    return funcion(num1, num2);
}
function divir(num1, num2) {
    return num1 / num2;
}
console.log(operacionMatematica(divir, 10, 2));

/* 
Funcion flecha:
Escribir una funcion flecha que acepte 2 numeros y devuelva el mayor de los 2.
*/

const mayorQue = (numer1, numer2) => {
    if(numer1 > numer2){
        console.log(`Numero: ${numer1}, es mayor que: ${numer2}`);
    }
    else if(numer2 > numer1){
        console.log(`Numero: ${numer2}, es mayor que: ${numer1}`);
    }
    else{
        console.log(`Los numeros: ${numer1} y ${numer2}, son iguales.`)
    }
}
console.log(mayorQue(1, 2));

/*
Funcion que devuelve otra funcion;
Crear una funcion llamada crearSaludo que acepte un saludo(por ejemplo "Hola") y devuelva una funcion que
reciba un nombre y salude.
*/

function crearSaludo(saludo) {
    return nombre => console.log(`${nombre}, ${saludo}`);
}

const recibirSaludo = crearSaludo("Hola")
recibirSaludo("Santiago")
