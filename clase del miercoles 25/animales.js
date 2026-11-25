class Animales {
    // Atributos
    nombre = 'Dragón de Komodo';
    especie = 'Varanus komodoensis';
    familia = 'Varanidae';
    clase = 'Reptil';
    habitat = 'Islas volcánicas y sabanas secas de Indonesia (Komodo, Rinca, Flores y Gili Motang)';
    dieta = 'Carnívoro (ciervos, jabalíes, búfalos de agua, aves, peces y carroña)';
    fuerza = 'Muy alta (hasta 3 metros, entre 70 y 90 kg, golpe de cola potente y mordida venenosa)';
    sonido = 'Siseos graves y gruñidos';
    longevidad = '30 años';
    velocidad = '20 km/h';

    // Métodos
    correr() {
        return `Velocidad: ${this.velocidad} <br>`;
    }

    emitirSonido() {
        return `Sonido: ${this.sonido} <br>`;
    }
}

const komodo = new Animales();

document.writeln('Clase de Animales con objeto komodo:<br><br>');
document.writeln(`Nombre: ${komodo.nombre} <br>`);
document.writeln(`Especie: ${komodo.especie} <br>`);
document.writeln(`Familia: ${komodo.familia} <br>`);
document.writeln(`Clase: ${komodo.clase} <br>`);
document.writeln(`Habitat: ${komodo.habitat} <br>`);
document.writeln(`Dieta: ${komodo.dieta} <br>`);
document.writeln(`Fuerza: ${komodo.fuerza} <br>`);
document.writeln(komodo.emitirSonido());
document.writeln(`Longevidad: ${komodo.longevidad} <br>`);
document.writeln(komodo.correr());