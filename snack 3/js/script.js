//Creiamo la funzione che accetta un array,una variabile a e una variabile b
function includedNumbers(a, b, array){
    const newArray = [];

    //ciclo for
    for (let i = 0; i < array.length; i++) {
        const curArray = array[i];
        if(i >= a && i <= b){
            newArray.push(curArray);
        }       
    }
    //ci deve ritornare il nuovo array
    return newArray
}

const numArray = [12,34,14,54,32,43,15,98,22,34,11]
const a = 5
const b = 8

console.log(includedNumbers(a,b,numArray));

    


