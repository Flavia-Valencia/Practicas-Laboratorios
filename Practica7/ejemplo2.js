// Inicializamos la variable suma en 0 
let suma = 0;

// Variable para contar el numero de iteraciones
let iteraciones = 0;

// Creamos un bucle while que se ejecutara mientras la suma sea menor a 1000
while (suma < 1000) {
    // Generamos un numero aleotorio entre 1 y 100
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    // Sumamos el numero aleatorio a la variable suma 
    suma += numeroAleatorio;

    //Aumentamos el contador de iteraciones
    iteraciones++;

    // Imprimimos en la consola el resultado de la suma tras cada iteracion
    console.log(`Iteración ${iteraciones}: se añadió ${numeroAleatorio}, suma actual: ${suma}`);
    
}

// Una vez el bucle ha terminado, imprimimos el resultado final 
console.log(`Proceso completado en ${iteraciones} iteraciones. Suma total: ${suma}`);