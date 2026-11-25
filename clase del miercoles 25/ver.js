// /* Herencia Subclases y Métodos */

// class Deportistas {
//   constructor(nombre, apellido) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//   }
// }

// class Futbolista extends Deportistas {
//   constructor(nombre, apellido, goles) {
//     super(nombre, apellido);
//     this._goles = goles;
//   }

//   get goles() {
//     return this._goles;
//   }

//   set goles(newGoals) {
//     this._goles = newGoals;
//   }
// }

// let futbolista2 = new Futbolista('Lionel', 'Messi', 5);

/* Herencia Subclases y Métodos */

/* Herencia Subclases y Métodos */
//la solcuion la dio el profe APRENDE OMEEEEEEEEEEEEEEEEEEEEEEEEEE
class Deportistas {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

class Futbolista extends Deportistas {
  constructor(nombre, apellido, goles) {
    super(nombre, apellido);
    this._goles = goles;
  }

  get goles() {
    return this._goles;
  }

  set goles(newGoals) {
    this._goles = newGoals;
  }
}

let futbolista2 = new Futbolista('Lionel', 'Messi', 5);

document.writeln("Nombre: ", futbolista2.nombre, "<br>");
document.writeln("Apellido: ", futbolista2.apellido, "<br>");
document.writeln("Goles: ", futbolista2.goles, "<br>");
