function yourClothToWear(temperature){
if (temperature < 0) 
{return "Scarf, Coat and Gloves" ;
 }
 else if (temperature < 10) {
return "Rain Coat";
  }
  else if (temperature < 21) {
    return "shirt and jeans";
  } 
  else {
    return "shorts and t-shirt";
  }
    }
  
const clothToWear=yourClothToWear(5)
  console.log("wear"+ " " +clothToWear);