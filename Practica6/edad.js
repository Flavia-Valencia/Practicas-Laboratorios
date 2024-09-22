//Determinar la edad de una persona 

let edad = 19
let categoriaedad = ""

if (edad <=12) {
    categoriaedad = "Niño"
} else if (edad <=17 ) {
    categoriaedad = "Adolescente"
} else if (edad <=35) {
    categoriaedad = "Adulto joven"
} else if (edad <=59) {
    categoriaedad = "Adulto"
} else {
    categoriaedad = "Adulto mayor"
}

console.log(`La categoria correspondiente según la edad ingresada es: ${categoriaedad}`);
