// let a = 20;
// let b = 30;

// console.log(a == b); // false
// console.log(a < b);  // true
// console.log(a > b);  // false

// // 1. País y edad
// let pais = prompt("¿De qué país eres?").toLowerCase();
// let edad = Number(prompt("¿Cuál es tu edad?"));

// if (pais == "mexico" && edad >= 18) {
//     document.write("Eres ciudadano de: " + pais + "<br>");
// } else {
//     document.write("No eres ciudadano de: " + pais + "<br>");
// }

// 2. Ciclo mientras (while) para pedir un mes válido (1 al 12)
let day = Number(prompt("Ingresa el día"));
let month = Number(prompt("Ingresa el mes (1-12)"));
let year = Number(prompt("Ingresa el año"));

while (isNaN(day) || isNaN(month) || isNaN(year) || month < 1 || month > 12) {
    alert("Datos inválidos. Escribe números y un mes del 1 al 12.");
    day = Number(prompt("Ingresa el día"));
    month = Number(prompt("Ingresa el mes (1-12)"));
    year = Number(prompt("Ingresa el año"));
}

// 3. Evaluar primer trimestre
if (month == 1 || month == 2 || month == 3) {
    document.write("Perteneces al primer trimestre del año<br>");
} else {
    document.write("No perteneces al primer trimestre del año<br>");
}