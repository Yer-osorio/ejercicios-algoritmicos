function invertirCaso(frase) {
    let arrayLetras = frase.split('');
  
    let arrayInvertido = arrayLetras.map(function(letra) {
      if (letra === letra.toUpperCase()) {
        return letra.toLowerCase();
      } else {
        return letra.toUpperCase();
      }
    });
  
    return arrayInvertido.join('');
  }
  
  let texto = 'hOLA cOMO eSTAS';
  let textoinvertido = invertirCaso(texto);
  console.log(textoinvertido);
  


