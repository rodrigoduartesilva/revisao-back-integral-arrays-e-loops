const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

let valor = 0;
let indice = 0;

while(indice < 5){
    if(filaDeDentro.length < 5){
        valor = filaDeFora[0];
        filaDeDentro.push(valor);
        filaDeFora.shift(); 
    }

    indice++;
}

console.log(filaDeDentro);
console.log(filaDeFora);