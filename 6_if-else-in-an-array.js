function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

let randomNumberList = [];
let evenNumbers = [];
let oddNumbers = [];
let resultEven = 0;
let resultOdd = 0;

for (let i = 0; i < 100; i++) {
  randomNumberList[i] = getRandomNumber();
}

for (let i = 0; i < randomNumberList.length; i++){
  if (randomNumberList[i] % 2 === 0) {
    evenNumbers[resultEven] = randomNumberList[i];
    let count = 0;
    count++;
    resultEven += count;
  } else {
    oddNumbers[resultOdd] = randomNumberList[i];
    let count = 0;
    count++;
    resultOdd += count;
  }
}

console.log(evenNumbers);
console.log(oddNumbers);
