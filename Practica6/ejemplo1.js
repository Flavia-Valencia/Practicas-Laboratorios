// Ejemplo que determina el nivel de calificación de un estudiante basado en su puntaje
let puntaje = 85;
let calificacion = "";

// Verificamos el puntaje y asignamos una calificación
if (puntaje >= 90) {
    calificacion = "A";
} else if (puntaje >= 80) {
    calificacion = "B";
} else if (puntaje >= 70) {
    calificacion = "C";
} else if (puntaje >= 60) {
    calificacion = "D";
} else {
    calificacion = "F";
}

console.log(`La calificación del estudiante es: ${calificacion}`);
