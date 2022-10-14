const numeros = [8, 11, 4, 1];

let maiorNumero = 0;
let menorNumero = 0;

for(let item of numeros){
    if(item > maiorNumero){
        maiorNumero = item;
    }
}

menorNumero = maiorNumero;

for(let item2 of numeros){
    if(item2 < menorNumero){
        menorNumero = item2;
    }
}

console.log(maiorNumero - menorNumero);