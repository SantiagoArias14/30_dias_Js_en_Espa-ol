// Funciones en JavaScript

/*

Conceptos claves:

    - Definicion de Funciones:
    Las funciones son bloques de codigo reutilizables que realizan una tarea especifica.
    Pueden recibir entradas (parametros) y devolver un resultado (valor de retorno).


*/

// Funcion Declarativa

function nombreFuncion(nm1, nm2){
    // Codigo a ejecutar
    return resultado; // Opcional
}

// Funcion expresiva
const nombreFuncionExpresiva = function(fe1, fe2){
    // Codigo que se va a ejecutar
    return resultado; // Opciones
}

// Llamar funcion
// nombreFuncion(arg1, arg2);

// Valores de retorno
// Las funciones pueden devolver un valor utilizando la palabra clave "return". Si no se conoce
// especifica return, la funcion devolvera "undefined".

// Funciones Anonimal y Flecha

// Funcion Anonima

const funcionAnonima = function(){
    // codigo
};

// Funciones Flecha

const nombreFlecha = (parametro1, parametro2) => {
    // Codigo
    return resultado;
}

// Ejercicio 1: funcion que reiba 2 parametros y devuelva la suma de estos.

const suma = (a, b) => {
    return a + b;
}

console.log(suma(5, 10));

// Ejercicio 2: funcion para verificar si un numero es par o impar.

const esPar = (num) => {
    if (num % 2 === 0){
        console.log("Es par.")
    }
    else {
        console.log("Es impar.")
    }
}

console.log(esPar(6));

// Ejercicio 3: funcion que reciba como parametro un nombre e imprima un saludo.

const saludo = (nombre) => {
    console.log("Hola, " + nombre + " bienvenido");
}

console.log(saludo("Santiago"))
console.log(saludo("Fercho"))

// Ejercicio 4: Factorial de un numero

const factorial = (n) => {
    let resultado = 1;
    for (let i = 2; i <= n; i++){
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(5))
console.log(factorial(6))

// Ejercicio 5: Funcion para saber si es numero primo

const esPrimo = (n) => {
    if (n <= 1) return false;
    for (let i = 2; n < Math.sqrt(n); i++){
        if (n % 1 === 0) return false;
    }
    return true;
};

for(let nume = 1; nume <= 100; nume++){
    if(esPrimo(nume)){
        console.log(nume)
    }

}

