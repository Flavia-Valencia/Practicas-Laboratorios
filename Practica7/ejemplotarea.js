const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function cadenaDetexto() {
    rl.question('Ingrese una cadena de texto: ', (Cadena) => {
        
        while (Cadena === '') {
          console.log('Por favor, ingrese una cadena que no esté vacía.');
          return cadenaDetexto()
          }
      
      
        let numVocales = 0
        let vocales = 'aeiouAEIOU'
        let digitos = Cadena.replace(/\s/g, '').length; 
      
        for (let i = 0; i < Cadena.length; i++) {
          if (vocales.includes(Cadena[i])) {
            numVocales++;
          }
        }
      
        console.log(`La cadena '${Cadena}' contiene: ${numVocales} vocales.`)
        console.log(`La cadena '${Cadena}' contiene: ${digitos} dígitos.`)
        
        rl.close()
      });
}
cadenaDetexto()
