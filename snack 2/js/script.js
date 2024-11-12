//array di squadre 
const squadre = [
    {nome:"Acerrana", punti: 0, falli:0},
    {nome:"Nocerina", punti: 0, falli:0},
    {nome:"Casertana", punti: 0, falli:0},
    {nome:"Mantova", punti: 0, falli:0}

];
console.log(squadre);

//nuovo array dove verranno aggiunte le squadre con nomi e falli
const newSquadre = []

//generiamo numeri random
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

//ciclo for dove identifichiamo tutte le squadre nei dettagli con punti e falli
for(let i= 0; i < squadre.length; i++){
    const curSquadra = squadre[i];
    curSquadra.punti= (randomNum(0,60));
    curSquadra.falli= (randomNum(0,30));
    newSquadre.push({nome: squadre[i].nome , falli: squadre[i].falli})   
}

//OUTPUT
console.log(newSquadre);
