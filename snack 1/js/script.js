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
  
let lightBike = bikes[0];
console.log(lightBike);

for (let i = 0; i < bikes.length; i++) {
  const curBikes = bikes[i];
  if(curBikes.peso<lightBike.peso){
   lightBike = curBikes
  }
}

console.log(lightBike);


