const disjuntores = [false, false, true, false, false, true, false, false];
let valorVerdadeiro = 0;
let valorFalso = 0;

for(let item of disjuntores){
    if(item){
        valorVerdadeiro++;
    }

    if(!item){
        valorFalso++;
    }
}

console.log(`Disjuntores ligados: ${valorVerdadeiro}`);
console.log(`Disjuntores desligdos: ${valorFalso}`);