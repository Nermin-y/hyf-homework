let boughtCandyPrices=[]
function addCandy(candyType, weight) {
    let price=0;
  if (candyType === "sweet") {
    price = weight * 0.5;
    boughtCandyPrices.push(price);
  } else if (candyType === "chocolate") {
    price = weight * 0.7;
    boughtCandyPrices.push(price);
  } else if (candyType === "toffee") {
    price = weight * 1.1;
    boughtCandyPrices.push(price);
  } else if (candyType === "chewinggum") {
    price = weight * 0.03;
    boughtCandyPrices.push(price);
  }
}


const amountToSpend = Math.random() * 100;
function canBuyMoreCandy()
{
   let wholePrice=0
    for (let i=0; i < boughtCandyPrices.length; i++) 
{
    wholePrice= wholePrice+boughtCandyPrices[i];
}
console.log(boughtCandyPrices);
if ( wholePrice < amountToSpend) {
    console.log("You can buy more, so please do!")
}
else {
    console.log ("Enough candy for you")
}
}
addCandy("toffee", 10);
addCandy("sweet",20);
canBuyMoreCandy();