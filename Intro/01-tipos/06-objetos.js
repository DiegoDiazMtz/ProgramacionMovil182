// Personaje de Movie

let nombre = "Spider-man";
let comic = "Marvel";
let edad = 17;

let personaje = {
    nombre: "Spider-man",
    comic: "Marvel",
    edad: 17,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["comic"]);

personaje.edad = 18;

let llave = "edad";
personaje[llave] = 19;

delete personaje.comic;
console.log(personaje);