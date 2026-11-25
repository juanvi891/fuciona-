/*
La POO es un paradigma de programación que organiza el software en clases y objetos para modelar conceptos del mundo real. Este enfoque promueve la reutilización del código, la modularidad y mejora la organización del software.
*/

// Crear el Objeto Automovil
document.writeln('Creación de Objeto AUTOMOVIL <br>');

var Auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    color: 'Azul',
    año: '2026',
    combustible: 'Diesel',
    tipo: 'Sedán',
    radio: ['FM', 'MP4', 'USB']
};


// Acceso a las propiedades: Se utiliza la notación de punto (Auto.marca) para acceder a las propiedades del objeto.

document.writeln('<br>');
document.writeln(`Clase Vehiculo con objeto ferrari`, '<br>');

class Vehiculos {
    // Atributos
    marca = 'Toyota';
    modelo = 'Corolla';
    color = 'Azul';
    año = '2026';
    combustible = 'Diesel';
    tipo = 'Sedán';
    precio = '$78.285.000';

    // Métodos
    // Representan acciones o comportamientos en este caso del Vehículo.
    acelerar() {
        return `El ${this.marca} acelera de 0 a 100 km/h en tan sólo 3 segundos.`;
    }
    frenar() {
        return `El ${this.marca} ${this.modelo} puede frenar de 100 a 0 km/h en tan sólo 2.5 segundos.`;
    }
}

 // Crear un Objeto basado en la Clase Vehiculos.
    const ferrari = new Vehiculos();
// Se declara una constante, luego la palabra reservada NEW que significa que está creando una nueva instancia de tipo objeto y al colocar el nombre de la clase, para este nuevo objeto tendrá a disposición los atributos y métodos de la clase previamente creada.

// Mostrar las propiedades y métodos del objeto ferrari.
document.writeln(`Marca: ${ferrari.marca} <br>`);
document.writeln(`Modelo: ${ferrari.modelo} <br>`);
document.writeln(`Color: ${ferrari.color} <br>`);
