class Animales {
    // Atributos
    especie = 'Dragón de Komodo';
    habitat = 'Islas volcánicas y sabanas secas (Komodo, Rinca, Flores y Gili Motang)';
    dieta = 'Carnívoro (ciervos, jabalíes, búfalos de agua, aves, peces y carroña)';
    fuerza = 'Muy alta: mide hasta 3 metros, pesa entre 70 y 90 kg, golpea con cola musculosa y tiene mordida venenosa';
    velocidadMax = 20; // km/h
    esRapido = false;
    sonido = 'Siseos graves y gruñidos';
    esperanzaVida = 30; // años
    poblacionSilvestre = 'Entre 3.000 y 3.500 ejemplares en libertad';

    // Métodos
    correr() {
        return this.esRapido
            ? `El ${this.especie} es rápido y alcanza ${this.velocidadMax} km/h.`
            : `El ${this.especie} corre hasta ${this.velocidadMax} km/h en carreras cortas para emboscar.`;
    }

    mostrarFuerza() {
        return `Fuerza del ${this.especie}: ${this.fuerza}.`;
    }

    alimentarse() {
        return `Es ${this.dieta.toLowerCase()} y caza en su hábitat: ${this.habitat}.`;
    }

    emitirSonido() {
        return `Cuando se siente amenazado o marca territorio emite ${this.sonido.toLowerCase()}.`;
    }

    estadoPoblacion() {
        return `Vive alrededor de ${this.esperanzaVida} años y quedan ${this.poblacionSilvestre.toLowerCase()} (en peligro de extinción).`;
    }
}

// Crear un objeto basado en la clase Animales
const komodo = new Animales();

document.writeln(`<h2>${komodo.especie}</h2>`);
document.writeln(`<p class="dato"><strong>Hábitat:</strong> ${komodo.habitat}</p>`);
document.writeln(`<p class="dato"><strong>Fuerza:</strong> ${komodo.mostrarFuerza()}</p>`);
document.writeln(`<p class="dato"><strong>Velocidad:</strong> ${komodo.correr()}</p>`);
document.writeln(`<p class="dato"><strong>Dieta:</strong> ${komodo.alimentarse()}</p>`);
document.writeln(`<p class="dato"><strong>Sonido:</strong> ${komodo.emitirSonido()}</p>`);
document.writeln(`<p class="dato"><strong>Población y vida:</strong> ${komodo.estadoPoblacion()}</p>`);