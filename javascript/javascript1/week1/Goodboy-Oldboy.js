
//Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirth = 2010;
let dogYearFuture = 2027;
let dogYear=dogYearFuture-dogYearOfBirth;
let dogOld=dogYear*7 
let humanYears=dogOld/7
let shouldShowResultInDogYears =true;//boolean
if (shouldShowResultInDogYears=== true) {
  console.log( "Your dog will be " + dogOld + " dog years old in " + dogYearFuture + "."
  );
  
} else {
   ( "Your dog will be " +  humanYears + " human years old in " + dogYearFuture + "."
  );
  
}