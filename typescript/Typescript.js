var Alumno = /** @class */ (function () {
    // El constructor es la funcion que se encarga de crear el objeto
    function Alumno(nombre, apellido, edad, saldoEnElBanco, trabajo, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.saldoEnElBanco = saldoEnElBanco;
        this.trabajo = trabajo;
        this.mascotas = mascotas;
    }
    Alumno.prototype.cumplirEdad = function () {
        juanSebastian.edad = juanSebastian.edad + 1;
        return juanSebastian.edad;
    };
    ;
    Alumno.prototype.cobrarSalario = function () {
        juanSebastian.saldoEnElBanco *= 2;
    };
    ;
    Alumno.prototype.irAlVeterinario = function (precioVeterinario) {
        if (juanSebastian.saldoEnElBanco >= precioVeterinario) {
            juanSebastian.saldoEnElBanco -= precioVeterinario;
        }
        else {
            console.log("No hay dinero suficiente para ir al veterinario");
        }
    };
    ;
    Alumno.prototype.hacerRegalo = function (persona, regalo) {
        console.log("Juan le regalo " + regalo + " a " + persona);
    };
    ;
    return Alumno;
}());
var juanSebastian = new Alumno('Juan', 'Castro', 25, 10000000, {}, []);
juanSebastian.apellido = 'Saldana';
juanSebastian.cumplirEdad();
console.log(juanSebastian);
