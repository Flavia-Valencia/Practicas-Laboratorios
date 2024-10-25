class Libro{
    constructor(titulo, autor, anio){
        this._titulo = titulo
        this._autor = autor
        this._anio = anio
    }
    mostrarInfo(){
        console.log(`Libro: ${this._titulo}, Autor: ${this._autor}, Año: ${this._anio} `); 
    }
    resumen(){
        console.log("Resumen: La trama sigue a Luke y Hasley, dos jóvenes con personalidades y vidas muy distintas. Luke es un chico introvertido con un pasado complicado y atrapado en sus propios demonios internos, mientras que Hasley es más alegre y optimista. La relación entre ellos es un eje central, llena de emociones profundas, dolor y amor, mientras ambos personajes luchan por superar sus dificultades personales. La historia explora temas como la salud mental, el amor juvenil y las segundas oportunidades.");
        
    }
}

let libro1 = new Libro('Boulevard', 'Flor Salvador','2020')

libro1.mostrarInfo()
libro1.resumen()





