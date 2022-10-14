const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
const pares = [];
let soma = 0;

for(let item of numeros){
    if(item % 2 === 0){
        pares.push(item);
    }
}

for(let item2 of pares){
    soma += item2;
}


console.log(soma);