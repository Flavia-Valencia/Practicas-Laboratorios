class Persona {
    constructor(nombre, apellido) {
        //Propiedades privadas
        this._nombre = nombre;
        this._apellido = apellido;
    }
    // Metodo getter para obtener el nombre completo 
    get nombreCompleto(){
        return `${this._nombre} ${this._apellido}`;
    }
}

const persona = new Persona("Flavia", "Valencia");
console.log(persona.nombreCompleto);
