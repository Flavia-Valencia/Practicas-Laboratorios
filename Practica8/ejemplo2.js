// Requerimos el módulo readline para manejar la entrada y salida en la consola
const readline = require("readline");
// Creamos la interfaz de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let letra = "", veces = 0, cadena = "";

function preguntarLetra() {
  rl.question("¿Qué letra desea, X o Z?", (inputLetra) => {
    letra = inputLetra.toUpperCase(); // Convertimos La Letra a mayúscula para facilitar la comparació
    if (letra === "X" || letra === "Z") {
      preguntarVeces();
    } else {
      console.log("Debes elegir entre la letra X o Z.");
      preguntarLetra();
    }
  });
}
function preguntarVeces() {
  rl.question("¿Cuántas repeticiones (1-15)?", (inputVeces) => {
    veces = parseInt(inputVeces);
    if (veces >= 1 && veces <= 15) {
      generarCadena();
    } else {
      console.log("El número de repeticiones debe estar entre 1 y 15.");
      preguntarVeces();
    }
  });
}

function generarCadena() {
  while (veces > 0) {
    cadena += letra;
    veces--;
  }

  console.log("Resultado: " + cadena);
  rl.close(); // Cerramos La interfaz después de generar la cadena
}
// Iniciamos el programa
preguntarLetra();
