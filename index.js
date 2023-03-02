const edadSebastian = 23;
const nombreJose = "Juan Jose Lopez Venegas";
const jorgeEsIngeniero = true;

const juanSebastian = {
  nombre: "Juan",
  apellido: "Saldaña",
  edad: 25,
  saldoEnElBanco: 2000000,
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
};

function cumplirEdad() {
    juanSebastian.edad = juanSebastian.edad + 1;
}

function cobrarSalario() {
    juanSebastian.saldoEnElBanco *= 2;
}

function irAlVeterinario() {
    if (juanSebastian.saldoEnElBanco >= 1000000) {
        juanSebastian.saldoEnElBanco -= 1000000;
    } else {
        console.log('No hay dinero suficiente para ir al veterinario');
    }
}

irAlVeterinario();
irAlVeterinario();
let esElCumpleDeJuan = false;

console.log(juanSebastian);