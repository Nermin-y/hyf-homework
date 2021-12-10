const volumeInMeterPetersHouse = 8 * 10 * 10;
const volumeInMetersJuliasHouse = 5 * 11 * 8;
let housePricePeter = volumeInMeterPetersHouse * 2.5 * 1000 + 100 * 300;// calculated house price
let housePriceJulia = volumeInMetersJuliasHouse * 2.5 * 1000 + 70 * 300;
if (housePricePeter <= 2500000) {
   console.log( " Peter is paying too little");
} else {
  console.log("Peter should not buy the house");
}
// for Julia's house
if (housePriceJulia <= 1000000) {  
console.log(" Julia is paying too little");
} else {
  console.log("Julia should not buy the house");
}