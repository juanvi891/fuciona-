let a, b;

a = 20;
b = 30;

console.log(a == b); // false
console.log(a < b);  // true
console.log(a > b);  // false

let pais, edad;

pais = prompt("¿De qué país eres?");
edad = prompt("¿Cuál es tu edad?");

// Normalizamos el texto y convertimos la edad a número para evitar fallos por mayúsculas o espacios
let paisLimpio = pais ? pais.trim().toLowerCase() : "";
let edadNumero = parseInt(edad);

if (paisLimpio === "mexico" && edadNumero >= 18) {
    document.write("Eres ciudadano del país de: " + pais + "<br>");
} else {
    document.write("No eres ciudadano del país de: " + pais + "<br>");
}

// El operador || (OR) se utiliza para evaluar si al menos una de las condiciones es verdadera.
// Si alguna de las condiciones es verdadera, el resultado será verdadero.

let day, month, year;

day = prompt("Ingresa el día");
month = prompt("Ingresa el mes");
year = prompt("Ingresa el año");

// Convertir los valores ingresados a números
day = parseInt(day);
month = parseInt(month);
year = parseInt(year);

// Verificar si los datos son válidos y evaluar el primer trimestre
if (isNaN(day) || isNaN(month) || isNaN(year)) {
    document.write("Ingrese solo números<br>");
} else if (month === 1 || month === 2 || month === 3) {
    document.write("Perteneces al primer trimestre del año<br>");
} else {
    document.write("No pertenece al primer trimestre del año<br>");
}