
let fechaActual = new Date();

let diaSemana = fechaActual.getDay();
let nombreDias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
let dia = nombreDias[diaSemana]
console.log(`Hoy es: ${dia}`);

