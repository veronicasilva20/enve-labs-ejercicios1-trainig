//variables y tipos de datos

let nombre = "veronica";
let edad = 44;
console.log("mi nombre es:", nombre);
console.log("mi edad es:", edad)

let miEdad = 44; 
let esMayorDeEdad = miEdad >= 18;
console.log(esMayorDeEdad)

//operadores aritméticos
const num1 = 30;
const num2 = 10;
const suma = num1 + num2;
const resta = num1 - num2;
const multiplicacion = num1 * num2;
const division = num1 / num2;
const modulo = num1 % num2;
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);
//operadores de comparación
const anioActual = new Date().getFullYear();
const anioDeNacimiento = anioActual - edad;
console.log("Año de nacimiento:", anioDeNacimiento);
//operadores lógicos
const esAdolescente = edad >= 13&& edad <= 29;
const esNinoOJubilado = edad < 13 || edad > 65;
console.log("¿Es adolescente?", esAdolescente);
console.log("¿Es niño o jubilado?", esNinoOJubilado);
//condicionales
if (edad >= 18) {
  console.log("Puedes votar");
} else {
  console.log("No puedes votar");
}

const puntaje = 75;
if (puntaje < 60) {
  console.log("Reprobado");
} else if (puntaje >= 60 && puntaje < 90) {
  console.log("Aprobado");
} else {
  console.log("Excelente");
}