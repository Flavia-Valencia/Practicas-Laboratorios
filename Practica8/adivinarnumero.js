const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let contador = 0
let numAleatorio = Math.floor(Math.random() * 5) + 1

function adivinarNum() {
  rl.question("¡Adivina el número aleatorio que el sistema ha generado (entre 1 y 5)! Ingresa tu número: ", (numero) => {
    numero = parseInt(numero); 
    contador++; 
    do {
      if (numero !== numAleatorio) {
        console.log(`¡Oh no, lo sentimos! "${numero}" no es el número correcto. Sigue intentando.`);
        return adivinarNum();
      }
    } while (false)
    console.log(`¡Felicidades!, Adivinaste el número "${numAleatorio}" en ${contador} intentos.`);
    rl.close();
        return 
  });
}

adivinarNum();
