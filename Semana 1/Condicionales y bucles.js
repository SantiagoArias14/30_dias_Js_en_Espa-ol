// Estructuras de control y bucles

/*
Estructuras de control:
Las estructuras de control nos van a permitir tomar decisiones en nuestro codigo y ejecutar diferentes
bloques de codigo dependiendo de condiciones especificas:

Condicionales:
Los condicionales nos van a permitir ejecutar diferentes partes del codigo basandose en condiciones
booleans

- If, else:
Estrucura basica
//if(condicion){
    // El codigo se ejecuta si la condicion es verdadera
//}
//else{
 // El codigo se ejecuta si la condicion es falsa
//}
*/

// If y else:

let edad = 18;

if (edad >= 18){
    console.log("Es mayor de edad, puede entrar.")
}
else{
    console.log("Es menor de edad, no puede entrar.")
}

// Else if
/*
Permite agregar mas de una condicion

Estructura del else if

if(condicion){
    codigo
}
else if(condicion2){
    codigo
}
else {
    codigo si ninguna de las condiciones se cumple. (console.log())
}
*/

// Ejemplo else if
let nota = 4.0;

if (nota >= 4.0){
    console.log("Aprobado")
}
else if (nota >= 3.0){
    console.log("Aprovado pero con una nota basica.")
}
else {
    console.log("Reprobado")
}

//---------------------------------------------------------------------------------------//

/*
Bucles:
Los bucles nos van a permitir ejecutar un bloque de codigo varias veces

- for:
Se utiliza cuando conocemos la cantidad de veces que deseamos iterar.

for(inicializacion; condicion; incremento){
    codigo a ejecutar en cada iteracion
}

- while:
Se utiliza cuando deseamos ejecutar un bloque de codigo mientras una condicion sea verdadera.

while(condicion){
    codigo a ejecutar mientras la condicion sea verdadera
}

- do... while:
Es similar el while, pero este garantiza que el bloque de codigo se ejecute al menos una vez.

do {
    Codigo que se ejecuta
} while (condicion);

*/

// Ejemplo con for
for (let i = 0; i < 5; i++){
    console.log("Numero:", i)
}

// Ejemplo while
let i = 0;

while (i < 5){
    console.log("Numero:", i);
    i++;
}

// Ejemplo do while

let j = 0;

do {
    console.log("Numero:", j)
    j++;
} while (j < 5);

//---------------------------------------------------------------------------------------//

// Ejercicios

// Usar un if para imprimir si el clima esta frio, templado o caliente, utilizar una variabale temperatura.

let temperatura = 10;

if (temperatura < 10){
    console.log("Esta haciendo frio.")
}
else if (temperatura === 10 || temperatura <= 20){
    console.log("El clima es templado")
}
else{
    console.log("Esta haciendo calor")
}

// Crear un bucle for que imprima los numeros del 1 al 10

for(let i = 1; i <= 10; i++){
    console.log(i)
}

// Crear un bucle while que imprima los numeros del 10 al 1.

let numero = 10;

while (numero >= 1) {
    console.log(numero)
    numero--;
}

// Evaluar la edad

let edadif = 22;

if(edadif <= 12){
    console.log("Es un niño")
}
else if(edadif >= 13 && edadif <= 19){
    console.log("Es una adolescente")
}
else if(edadif >= 20 && edadif <= 64){
    console.log("Es un adulto")
}
else {
    console.log("Es un anciano")
}

// Par o impar

let valor = 3;

if(valor % 2 === 0){
    console.log("Es par")
}
else {
    console.log("Es impar")
}

// Tabla con for

let tabla = 5;

for(let i = 1; i <= 10; i++){
    console.log(tabla + " x " + i + " = " + (tabla * i));
}

// Suma con for

let suma = 0;

for(let i = 1; i <= 100; i++){
    suma += i;
}
console.log(suma)

// Contador regresivo
let contador = 20;
console.log(contador)

while(contador >= 1){
    console.log(contador)
    contador--;
}
