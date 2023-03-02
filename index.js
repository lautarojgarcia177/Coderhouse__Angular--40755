// JAVASCRIPT REPASO

// En Javascript tenemos datos primitivos:
const edadSebastian = 23;
const nombreJose = "Juan Jose Lopez Venegas";
const jorgeEsIngeniero = true;
// Y objetos que adentro tienen datos u otros objetos:
const juanSebastian = {
  nombre: "Juan",
  apellido: "Saldaña",
  edad: 25,
  saldoEnElBanco: 2000000,
  // Para guardar mas de un valor en una propiedad, se utilizan arreglos []
  mascotas: [
    {
      raza: "Criolla",
      edad: 0.5,
      color: "multicolor",
      esMacho: false,
    },
    {
      raza: "Carey",
      edad: 4,
      color: "negro",
      esMacho: false,
    },
    {
      raza: "Carey",
      edad: 4,
      color: "negro",
      esMacho: false,
    },
  ],
  // Tambien se pueden guardar funciones en objetos, las funciones son codigo que definimos y ejecutamos cuando lo necesitamos
  cumplirEdad: function () {
    juanSebastian.edad = juanSebastian.edad + 1;
  },
  cobrarSalario: function () {
    juanSebastian.saldoEnElBanco *= 2;
  },
  // Las funciones pueden recibir parametros, que son datos que va a utilizar para ejecutarse
  irAlVeterinario: function (precioVeterinario) {
    // Condicional
    if (juanSebastian.saldoEnElBanco >= precioVeterinario) {
      juanSebastian.saldoEnElBanco -= precioVeterinario;
    } else {
      console.log("No hay dinero suficiente para ir al veterinario");
    }
  },
  hacerRegalo: function (persona, regalo) {
    // console.log(`Juan le regalo ${regalo} a ${persona}`);
    console.log("Juan le regalo " + regalo + " a " + persona);
  }
};

// De esta manera insertamos un objeto en un arreglo
juanSebastian.mascotas.push({
  raza: "Payaso",
  edad: 2,
  color: "rojo",
  esMacho: true,
});

// Asi invocamos funciones, en este caso pasandole un parametro
juanSebastian.irAlVeterinario(1000000);
juanSebastian.irAlVeterinario(900000);

console.log(juanSebastian);

// Funcion con dos parametros
juanSebastian.hacerRegalo('Sebastian', 'Cafe');

