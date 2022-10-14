const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomesLetra = [];

for(let item of nomes){
    if(item[0] === "a" || item[0] === "A"){
        nomesLetra.push(item);
    }
}


console.log(nomesLetra);