class Clima {
    constructor(celsius) {
        this._celsius = celsius
        
    }

    // Getter para obtener la temperatura en Fahrenheit
    get fahrenheit(){
        return (this._celsius * 9) / 5 + 32;
    }

    // Setter para asignar la temperatura en Fahrenheit
    set fahrenheit(fahrenheit){
        this._celsius = ((fahrenheit -32) * 5) / 9;
    }

    // Getter y setter para la temperatura en Celsius
    get celsius() {
        return this._celsius;
    }

    set celsius(celsius) {
        this._celsius = celsius;
    }
}

// Crear un objeto con temperatura en Celsius
const clima = new Clima(25);

// Muestra la temperatura en Fahrenheit (77 grados)
console.log(`Clima en grados en Fahrenheit: ${clima.fahrenheit}°F`);
// Ahora se muestra en Celsius (30 grados)
console.log(`Clima en grados Celsius: ${clima.celsius}°C`);

