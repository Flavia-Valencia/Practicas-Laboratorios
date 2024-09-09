function Comida() {
    return new Promise((resolve, reject) => {
        let Ordenregistrada = true

    
            if (Ordenregistrada) {
                resolve({
                    idpedido: 1,
                    cliente: "Flavia Valencia",
                    orden: "1 orden de tacos de res"  
                })
            }else{
                reject("Error no se pudo registrar su pedido")
            }
      
    })   
}

Comida()
.then((datos)=>{
    console.log("Orden registrada: ", datos);  
})
.catch((error)=>{
    console.error(error);
    
})