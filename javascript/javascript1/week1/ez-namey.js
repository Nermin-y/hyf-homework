//Ez Namey (Startup name generator)
const firstWords = [
  "Amazing",
  "super ",
  "Awesome",
  "Smart",
  " Only ",
  "Exciting",
  "Nice",
  "Perfect",
  " Fascinating",
  " Digital",
];
const secondWords = [
  "world",
  "place",
  "human",
  "Solutions",
  "company",
  "door",
  "value",
  " Project ",
  "pages",
  " vision ",
];
let companyName =
  firstWords[Math.floor(Math.random() * firstWords.length)] +
  " " +
  secondWords[Math.floor(Math.random() * secondWords.length)];
console.log(
  "The startup: " +
    companyName +
    " contains " +
    companyName.length +
    " characters"
);
