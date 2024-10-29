class Persona {
    constructor(nombre, apellido) {
        // Propiedades privadas
        this._nombre = nombre;
        this._apellido = apellido;
    }
    // Metodo getter para obtener el nombre completo
    get nombreCompleto(){
        return `${this._nombre} ${this._apellido}`;
    }
    // Metodo setter para asignar el nombre completo
    set nombreCompleto(nombreCompleto){
        [this._nombre, this._apellido] = nombreCompleto.split(" ")
    }
}

const persona = new Persona("Flavia", "Valencia");
// Usando setter para modificar el nombre completo
persona.nombreCompleto = "Yamileth Reyes";
// Usando getter para obtener el nuevo nombre completo
console.log(persona.nombreCompleto);
