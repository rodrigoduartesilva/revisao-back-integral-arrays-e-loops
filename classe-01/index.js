const numeros = [2, 3, 4, 6];
let soma= 0;

for(let indice = 0; indice < numeros.length; indice++){
    soma = soma + numeros[indice];
}

console.log(`A soma dos itens do array ${numeros} é ${soma}.`);