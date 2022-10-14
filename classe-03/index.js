const numeros = [54, 22, 14, 87, 10, 284];
let encontrado = false;

for(let item = 0; item < numeros.length; item++){
    if(numeros[item] === 10){
        encontrado = true;
        console.log(item);
    }
}

if(!encontrado){
    console.log(-1);
}