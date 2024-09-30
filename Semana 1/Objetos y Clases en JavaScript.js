// Objetos en JavaScript

/*

Los objetos en Javascript son colecciones de pares claves-valor. Cada valor(propiedad) tiene una clave
(nombre de la propiedad) asociada.
*/

// Sintaxis basica de un objeto:

const persona = {
    nombre: "Santiago",
    edad: 22,
    saludar: function(){
        console.log("Hola, mi nombre es: " + this.nombre);
    }
};

console.log(persona.nombre);
persona.saludar();

/*Las propiedades de los objetos pueden ser valores primitivos, funciones(LLAMADAS METODOS) u otros
objetos.
*/

// Añadir o modificar propiedades

persona.apellido = "Arias"; // Añadir propiedad llamada apellido.
persona.nombre = "Daniel"; // Modificar una propiedad.
console.log(persona)

// Eliminar una propiedad

delete persona.edad;
console.log(persona)

/*

Clases en JavaScript:
Las clases son plantillas para crear objetos. Las clases permiten definir un esquema con un constructor
y metodos asociados.
*/

// Sintaxis basica de una clase:

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola, mi nombre es: ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const persona1 = new Persona("Valentina", 19);
persona1.saludar()

/*

Herencia:
La permite que una clase derive de otra, heredando sus propiedades y sus metodos.

*/

// Ejemplo de herencia:

class Animal {
    constructor(nombre){
        this.nombre = nombre;
    }

    hacerSonido(){
        console.log(`${this.nombre} hace un ruido.`);
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log(`${this.nombre} ladra.`);
    }
}

const perro1 = new Perro("Toby")
perro1.hacerSonido()

//-----------------------------------------------------------------------//

// Ejemplo 1: Objeto simple

const coche = {
    marca: "Mazda",
    modelo: "CX-30",
    año: "2022",
    detalles: function(){
        console.log(`Los detalles del coche son: ${this.marca}, ${this.modelo}, modelo: ${this.año}`)
    }
};

coche.detalles()

// Ejemplo 2: Clase con metodo

class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    calcularArea(){
        return this.alto * this.ancho;
    }
}

const rectangulo1 = new Rectangulo(20, 10);
console.log(rectangulo1.calcularArea());

// Ejemplo 3: Herencia

class PersonaH {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    describir(){
        console.log(`Hola, soy: ${this.nombre} y tengo: ${this.edad} años.`)
    }
}

class Estudiante extends PersonaH {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }

    describir(){
        console.log(`Soy ${this.nombre}, tengo ${this.edad} años y estudio ${this.curso}.`)
    }
}

const estudiante1 = new Estudiante("Santiago", 22, "Ingenieria");
estudiante1.describir();