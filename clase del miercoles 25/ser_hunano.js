class Animales {
    // Atributos
    nombre = 'Humano';
    especie = 'Homo sapiens';
    familia = 'Hominidae';
    clase = 'Mamífero';
    habitat = 'Todo el planeta (zonas urbanas, rurales y diversos climas)';
    dieta = 'Omnívoro';
    fuerza = 'Moderada, con alta resistencia y destreza manual';
    sonido = 'Habla, risa, llanto y gritos';
    longevidad = '73 años';
    velocidad = '44 km/h';

    // Métodos
    correr() {
        return `Velocidad: ${this.velocidad} <br>`;
    }

    emitirSonido() {
        return `Sonido: ${this.sonido} <br>`;
    }
}

const humano = new Animales();

document.writeln('Clase de Animales con objeto humano:<br><br>');
document.writeln(`Nombre: ${humano.nombre} <br>`);
document.writeln(`Especie: ${humano.especie} <br>`);
document.writeln(`Familia: ${humano.familia} <br>`);
document.writeln(`Clase: ${humano.clase} <br>`);
document.writeln(`Habitat: ${humano.habitat} <br>`);
document.writeln(`Dieta: ${humano.dieta} <br>`);
document.writeln(`Fuerza: ${humano.fuerza} <br>`);
document.writeln(humano.emitirSonido());
document.writeln(`Longevidad: ${humano.longevidad} <br>`);
document.writeln(humano.correr());