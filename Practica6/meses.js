// Nombre de los meses
let numerodelmes = 44
let nombredelmes = ""

switch (numerodelmes) {
    case 1:
        nombredelmes = "Enero"
        break;
    case 2:
        nombredelmes = "Febrero"
        break;
    case 3:
        nombredelmes = "Marzo"
        break;
    case 4:
        nombredelmes = "Abril"
        break;
    case 5:
        nombredelmes = "Mayo"
        break;
    case 6:
        nombredelmes = "Junio"
        break;
    case 7:
        nombredelmes = "Julio"
        break;
    case 8:
        nombredelmes = "Agosto"
        break;
    case 9:
        nombredelmes = "Septiembre"
        break;
    case 10:
        nombredelmes = "Octubre"
        break;
    case 11:
        nombredelmes = "Noviembre"
        break;
    case 12:
        nombredelmes = "Diciembre"
        break;
    default:
        nombredelmes = "Número del mes no valido"
        break;
}

console.log(`El nombre del mes es: ${nombredelmes}`);
