const { log } = require('console');
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let num;

function pedirNumero() {
    rl.question("Introduce un número mayor a 5: ", (input) =>{
        num = parseInt(input) // Convertimos la entrada a número 
        if (num > 5) {
            console.log(`Número válido: ${num}`);
            rl.close() // Cerramos la interfaz de readline
        }else{
            console.log("El número debe ser mayor a 5.");
            pedirNumero() // Volvemos a pedir el número si no es válido
        }
    })
}

pedirNumero()
