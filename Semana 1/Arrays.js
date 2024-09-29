// Estructuras de control avanzadas y arrays

/*

- Estructura switch:
El switch es una estructura de control que evalua una expresion y ejecuta bloques de codigos, basados
en casos especificos. Es util cuando se necesita comparar el mismo valor contra varias posibilidades.

Ejemplo sintaxis:

switch(condicion){
    case valor1:
        // Bloque de codigo si la expresion coincide con valor1.
        break;
    case valor2:
        // Bloque de codigo si la expresion coincide con valor2.
        break;
    case valor3:
        // Bloque de codigo si la expresion coincide con valor3.
        break;
    default:
        // Bloque de codigo si no coinicide con ningun resultado
}       

*/

//---------------------------------------------------------------------------------------//

/*

- Estructura while: (ciclo)
El ciclo while ejecuta un codigo mientras la condicion especificada sea verdadera. Es util cuando no se
sabe con exactitud cuantas veces se ejecutara un ciclo.

Ejemplo sintaxis:

while(condicion){
    // Bloque de codigo que se ejecutara mientras la condicion sea verdadera.
}

*/

//---------------------------------------------------------------------------------------//

/*

- Estructura, ciclo do...while:
El ciclo do... while es similar al while, pero la condicion se evalua despues de que se ejecuta el bloque
de codigo, lo que garantiza que el codigo se ejecute al menos una vez.

Ejemplo sintaxis:

do{
    // Bloque de codigo que se ejecuta al menos una vez.
} while(condicion);

*/

//---------------------------------------------------------------------------------------//

/*

Arrays:
Un array es una estructura de datos que permite almacenar varios valores en una unica variable.
Los arrays pueden contener cualquier tipo de dato: numeros, strings, booleans, etc.

*/

// Como crear un Array:

let numeros = [10, 30, 40];
console.log(numeros) // Ver todos los elementos del array
console.log(numeros[0]) // Ver que hay en una posicion en especifico
console.log(numeros[1])
console.log(numeros[2])

// Metodos para arrays

// Push
numeros.push(50) // Push nos sirve para agregar un elemento al final del array
console.log(numeros)
console.log(numeros[3])

// Pop
numeros.pop() // Pop nos sirve para eliminar el ultimo elemento del array.
console.log(numeros)

// Shift
numeros.shift() // Shift nos sirve para eliminar el primer elemento del array.
console.log(numeros)

// Unshift
numeros.unshift(11) // Unshift nos sirve para agregar un elemento al principio del array.
console.log(numeros[0])

//---------------------------------------------------------------------------------------//

/*

map():
La funcion map() crea un nuevo array aplicando una funcion a cada uno de los elemenos de un array original.

*/

// Ejemplo 1 con map

const numerosMap = [1, 2, 3, 4, 5];
const negativos = numerosMap.map(x => -x);
console.log(negativos)
/*
En este ejemplo, map() toma cada uno de los numeros del array y los convierte en su valor negativo
usando una funcion flecha x => -x. El resultado es nuevo array con los numeros convertidos a negativos.
*/

// Ejemplo 2
const palabras = ["hola", "mundo", "javascript"];
const mayus = palabras.map(palabra => palabra.toUpperCase());
console.log(mayus)

//---------------------------------------------------------------------------------------//

/*

filter():
Filtra los elementos del array que cumplan una condicion y devuelve un nuevo array.

*/

// Ejemplo 1 con filter():

const numPares = [1, 2, 3, 4, 5, 6, 7, 8];
const pares = numPares.filter(x => x % 2 === 0);
console.log(pares)

/*
En este caso, filter() evalua si cada elemento del array es par usando x % 2 === 0. Solo los numeros
que cumplen la condicion son incluidos en el nuevo array.
*/

// Ejemplo 2 con filter():
const palabrasFilter = ["Luna", "Marte", "Jupiter", "Tierra", "Sol", "Urano"];
const palabrasLargas = palabrasFilter.filter(palabra => palabra.length > 4);
console.log(palabrasLargas);

//---------------------------------------------------------------------------------------//

/*

reduce();
Aplica una funcion que reduce el array a un solo valor, acumulando los resultados.

*/

// Ejemplo 1 con reduce

const suma = [1, 2, 3, 4, 5];
const resultado = suma.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(resultado);

/*
reduce() toma 2 argumentos: un acumulador y el valor actual del array. Aqui, acumula la suma de todos
los numeros del array. La operacion acumulador + valorActual se repite para cada numero del array,
comenzando con un acumulador inicial de 0.
*/

// Ejemplo 2 con reduce()
const multiplicacion = [1, 2, 3, 4, 5];
const resultadoMulti = multiplicacion.reduce((acumulador, valorActual) => acumulador * valorActual, 1);
console.log(resultadoMulti);

//---------------------------------------------------------------------------------------//

// Ejercicios

// Ejercicio switch: Escribir un programa que utilice switch para determinar el dia de la semana. (Utilizando numeros).

const diaSemana = 5;

switch (diaSemana) {
    case 1:
        console.log("Es Lunes.")
    break;
    case 2:
        console.log("Es Martes.")
    break;
    case 3:
        console.log("Es Miercoles.")
    break;
    case 4:
        console.log("Es Jueves.")
    break;
    case 5:
        console.log("Es Viernes.")
    break;
    case 6:
        console.log("Es Sabado.")
    break;
    case 7:
        console.log("Es Domingo.")
    break;
    default:
        console.log("Dia desconocido.")
}

// Ejercicio while: Crear un ciclo que imprima los numeros del 10 al 1 en orden descendente.

let contador = 10;

while(contador >= 1 ) {
    console.log(contador);
    contador--;
}

// Ejercicio for: Crear un array con 5 nombres, utilizar un for para imprimir cada uno de los nombres.
const nombresFor = ["Santiago", "Ferney", "Luisa", "Camilo", "Daniela", "Laura"];

for (let i = 0; i < nombresFor.length; i++){
    console.log(nombresFor[i]);
}

// Crear un array de 3 colores. Usar shift para eliminar el primer color y luego unshift para añadir.

const color = ["Rojo", "Amarillo", "Azul"];

color.shift("Rojo");
console.log(color)
color.unshift("Verde")
console.log(color)
