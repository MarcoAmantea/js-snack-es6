//Array di oggetti
const bikes = [
    { nome: "Bici 1", peso: 10},
    { nome: "Bici 2", peso: 13},
    { nome: "Bici 3", peso: 4},
    { nome: "Bici 4", peso: 11},
    { nome: "Bici 5", peso: 2},
    { nome: "Bici 6", peso: 5},
    { nome: "Bici 7", peso: 7},
    { nome: "Bici 8", peso: 3},
  ];
  console.log(bikes);
  
//Supponiamo che la bici più leggera è quella in posizione 0
  let lightPeso = bikes[0];
  console.log(lightPeso);
  
  
//ciclo for che serve a identificare il peso delle altre bici
  for (let i = 0; i < bikes.length; i++) {
    const curBikes = bikes[i];
    console.log(curBikes.peso);
    
    //se il peso della bici corrente è minore del peso della bici stampata allora procedo con la stampa
    if(curBikes.peso < lightPeso.peso){
       lightPeso = curBikes
    }
 }
    console.log(lightPeso)
   
    
