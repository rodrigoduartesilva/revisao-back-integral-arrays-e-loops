const letras = ["A", "a", "B", "C", "E", "e"];
let letrasEncontradas = 0;


for(let indice = 0; indice < letras.length; indice++){
    if(letras[indice] === "E" || letras[indice] === "e"){
        letrasEncontradas++;
    }
}

if(letrasEncontradas === 1){
    console.log(`Foi encontrada ${letrasEncontradas} letra "E" ou "e".`);
} else if (letrasEncontradas > 1){
    console.log(`Foram encontradas ${letrasEncontradas} letras "E" ou "e".`);
} else {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
}