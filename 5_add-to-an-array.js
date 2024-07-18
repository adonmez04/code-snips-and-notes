function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

let randomNumberList = [];

for (let i = 0; i < 100; i++) {
  randomNumberList[i] = getRandomNumber();
}

console.log(randomNumberList);
