/**ARRAY O ARREGLOS
 * UN ARRAY ES UNA ESTRUCTURA DE DATOS QUE PERMITE ALMACENAR UNA COLECCIÓN ORDENADA DE ELEMENTOS; ESTOS ELEMENTOS PUEDEN SER CADENAS DE TEXTO, VALORES NUMÉRICOS, BOOLEANOS, ENTRE OTROS. IGUALMENTE PODRÍAN SER UN CONJUNTO DE FUNCIONES E INCLUSIVE OTROS ARRAYS.
 */

// Declaración de un array vacio
let numeros = [];
// Llenar un array con elementos, cada elemento dentro del array se separa por comas.
numeros = [5, 4, 8, 12, 16, 35, 44, 2];
document.writeln('Elementos: ', numeros);
document.writeln('<br>');


// Un array puede crearse directamente sin ser declarado:
Numeros = [5, 10, 15, 20, 25, 30, 25];
document.writeln('Elementos: ', Numeros);
document.writeln('<br>');


// Visualizar uno o alguno de los elementos del array según parámetro o índice indicado
document.writeln('Elemento discriminado: ', numeros[3]);
document.writeln('<br>');
document.writeln('Elemento discriminado: ', Numeros[0]);
document.writeln('<br>');


// Cambiar un elemento del array indicando el indice de posición y/o ubicación existente y el valor del elemento a cambiar.
numeros[3] = 84;
document.writeln('Cambio de un elemento: ', numeros);
document.writeln('<br>-----------------------------------');
document.writeln('<br>');


// Array con valores de tipo texto o string
let frutas = ['Manzanas', 'Peras', 'Mandarinas', 'Naranjas', 'Kiwi'];
document.writeln('Diversas frutas: ', frutas);
document.writeln('<br>');


// Métodos de los ARRAY
// Ver la cantidad de elementos
document.writeln('Cantidad de elementos del array de Frutas: ', frutas.length);
document.writeln('<br>');
document.writeln('Cantidad de elementos del array de Numeros: ', Numeros.length);
document.writeln('<br>-----------------------------------');
document.writeln('<br>');

// Función Reverse organiza los elementos alfabéticamente pero en inversa.
document.writeln(abecedario.reverse()); // Organiza alfabéticamente las letras.
document.writeln('<br>');

