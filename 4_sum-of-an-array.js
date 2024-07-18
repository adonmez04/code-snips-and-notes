let loopArray = [];

for (let i = 1; i <= 100; i++) {
  loopArray[i-1] = i;
}

let sum = 0;

for (let i = 0; i < loopArray.length; i++) {
  sum += loopArray[i];
}
console.log(sum); // (100/2 * 100 + 50) = 5050



// function sumArray (array){
//   let sum = 0;
//   for (let i = 0; i < array.length; i++){
//     sum += array[i];
//   }
//   return sum;
// }
