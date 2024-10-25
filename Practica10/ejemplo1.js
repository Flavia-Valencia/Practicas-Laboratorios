class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimirInfo() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const persona1 = new Persona('Isabel', 24);
persona1.imprimirInfo();  // Imprime: Nombre: Isabel, Edad: 24
