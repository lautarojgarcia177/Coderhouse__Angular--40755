interface Mascota {
    raza: string,
    edad: number,
    color: string,
    esMacho: boolean,   
}

class Alumno {
    nombre: string;
    apellido: string;
    edad: number;
    saldoEnElBanco: number;
    trabajo: any;
    mascotas: Array<Mascota>;
    cumplirEdad(): number {
      juanSebastian.edad = juanSebastian.edad + 1;
      return juanSebastian.edad;
    };
    cobrarSalario(): void {
      juanSebastian.saldoEnElBanco *= 2;
    };
    irAlVeterinario(precioVeterinario): void {
      if (juanSebastian.saldoEnElBanco >= precioVeterinario) {
        juanSebastian.saldoEnElBanco -= precioVeterinario;
      } else {
        console.log("No hay dinero suficiente para ir al veterinario");
      }
    };
    hacerRegalo(persona, regalo): void {
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
  
  const juanSebastian: Alumno = new Alumno('Juan', 'Castro', 25, 10000000, {}, []);
  
  juanSebastian.apellido = 'Saldana';
  juanSebastian.cumplirEdad();
  console.log(juanSebastian);
  