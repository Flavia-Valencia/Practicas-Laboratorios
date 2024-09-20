// Aplicar descuento según la categoría del cliente y el total de la compra

let categoriaCliente = "VIP" // Categoría del cliente (opciones: 'Normal', 'Premium', 'VIP')
let totalCompra = 500
let descuento = 0


if (categoriaCliente === "Normal") {
  if (totalCompra > 100 && totalCompra <= 300) {
    descuento = 0.05
  } else if (totalCompra > 300) {
    descuento = 0.10
  }
} else if (categoriaCliente === "Premium") {
  if (totalCompra > 100 && totalCompra <= 300) {
    descuento = 0.10 // 
  } else if (totalCompra > 300) {
    descuento = 0.15; // 
  }
} else if (categoriaCliente === "VIP") {
  if (totalCompra > 100 && totalCompra <= 300) {
    descuento = 0.15
  } else if (totalCompra > 300) {
    descuento = 0.20
  }
} else {
  console.log("Categoría de cliente no válida.");
}


if (descuento > 0) {
  let totalConDescuento = totalCompra - (totalCompra * descuento);
  console.log(`Descuento aplicado: ${descuento * 100}%. Total a pagar: $${totalConDescuento}`);
} else {
  console.log(`No aplica descuento. Total a pagar: $${totalCompra}`);
}
