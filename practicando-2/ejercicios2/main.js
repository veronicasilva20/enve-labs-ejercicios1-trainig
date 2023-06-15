//prompt
let respuesta= prompt("cual es tu nombre");
let edad= prompt("cual es tu edad");
let edad2= 44;
console.log(respuesta);
edad=parseInt(edad);
console.log("el tipo de dato de edad es:"+ typeof(edad));
console.log(edad);
console.log("el tipo de dato de edad es:"+ typeof(edad2));
console.log(edad2);

const contraseña = "contraseña"; // Contraseña almacenada en una variable

// Solicitar contraseña al usuario
const contraseña_usuario = prompt("Introduce la contraseña:");

// Comprobar si la contraseña coincide
if (contraseña === contraseña_usuario) {
  console.log("Contraseña correcta");
} else {
  console.log("Contraseña incorrecta");
}
// Solicitar al usuario dos números
const numero1 = parseFloat(prompt("Introduce el primer número:"));
const numero2 = parseFloat(prompt("Introduce el segundo número:"));

// Verificar si el divisor es cero
if (numero2 === 0) {
  console.log("Error: No se puede dividir entre cero.");
} else {
  // Realizar la división
  const division = numero1 / numero2;
  console.log("El resultado de la división es: " + division);
}

// Solicitar al usuario un número entero
const numero = parseInt(prompt("Introduce un número entero:"))

// Pedir al usuario su renta anual
let rentaAnual = parseFloat(prompt("Ingrese su renta anual en dólares:"));

// Determinar el tipo impositivo correspondiente
let tipoImpositivo;

if (rentaAnual < 10000) {
  tipoImpositivo = "5%";
} else if (rentaAnual >= 10000 && rentaAnual < 20000) {
  tipoImpositivo = "15%";
} else if (rentaAnual >= 20000 && rentaAnual < 35000) {
  tipoImpositivo = "20%";
} else if (rentaAnual >= 35000 && rentaAnual < 60000) {
  tipoImpositivo = "30%";
} else {
  tipoImpositivo = "45%";
}

// Mostrar el tipo impositivo correspondiente
console.log("El tipo impositivo correspondiente a su renta anual es: " + tipoImpositivo);
// Pedir al usuario la puntuación obtenida
let puntuacion = parseFloat(prompt("Ingrese la puntuación obtenida:"));

// Determinar el nivel de rendimiento y la cantidad de dinero correspondiente
let nivel;
let cantidadDinero;

if (puntuacion === 0.0) {
  nivel = "Inaceptable";
  cantidadDinero = 0;
} else if (puntuacion === 0.4) {
  nivel = "Aceptable";
  cantidadDinero = 2400 * puntuacion;
} else if (puntuacion >= 0.6) {
  nivel = "Meritorio";
  cantidadDinero = 2400 * puntuacion;
} else {
  nivel = "Puntuación inválida";
  cantidadDinero = 0;
}

// Mostrar el nivel de rendimiento y la cantidad de dinero correspondiente
console.log("Nivel de rendimiento: " + nivel);
console.log("Cantidad de dinero a recibir: $" + cantidadDinero);

// Pedir al usuario la edad del cliente
let edad1 = parseInt(prompt("Ingrese la edad del cliente:"));

// Calcular el precio de entrada según la edad
let precioEntrada;

if (edad < 4) {
  precioEntrada = 0;
} else if (edad >= 4 && edad <= 18) {
  precioEntrada = 5;
} else {
  precioEntrada = 10;
}

// Mostrar el precio de entrada
console.log("El precio de entrada es: $" + precioEntrada);

