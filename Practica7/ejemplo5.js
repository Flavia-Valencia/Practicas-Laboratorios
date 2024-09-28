// Ejercicio 5: recorrer un objeto y sus propiedades
const persona = {
    nombre: "Flavia",
    edad: 19,
    ciudad: "Santiago de maria"
};

for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`); // Imprime cada propiedad y su valor
    
    
}