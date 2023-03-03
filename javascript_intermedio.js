// Notacion de nombres en programacion
// PascalCase: Nombres de Clases e Interfaces
// camelCase: Nombres de Variables, Funciones y Objetos

class Alumno {
  nombre;
  apellido;
  edad;
  saldoEnElBanco;
  trabajo;
  mascotas;
  cumplirEdad = function () {
    juanSebastian.edad = juanSebastian.edad + 1;
    return juanSebastian.edad;
  };
  cobrarSalario = function () {
    juanSebastian.saldoEnElBanco *= 2;
  };
  irAlVeterinario = function (precioVeterinario) {
    if (juanSebastian.saldoEnElBanco >= precioVeterinario) {
      juanSebastian.saldoEnElBanco -= precioVeterinario;
    } else {
      console.log("No hay dinero suficiente para ir al veterinario");
    }
  };
  hacerRegalo = function (persona, regalo) {
    console.log("Juan le regalo " + regalo + " a " + persona);
  };
  // El constructor es la funcion que se encarga de crear el objeto
  constructor(nombre, apellido, edad, saldoEnElBanco, trabajo, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.saldoEnElBanco = saldoEnElBanco;
    this.trabajo = trabajo;
    this.mascotas = mascotas;
  }
}

const juanSebastian = new Alumno('Juan', 'Castro', 25, 10000000, {}, []);

juanSebastian.apellido = 'Saldana';
juanSebastian.cumplirEdad();
console.log(juanSebastian);
