let {readFile, writeFile} = require('fs');
writeFile("arquivo.txt", "Texto por write file.", (error) => {
  if(error){
    throw error;
  }else {
    console.log("Escreveu com sucesso!");
  }
})