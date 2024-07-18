// https://convert.town/column-to-comma-separated-list

let listOfTempsInF = [
123,32,42,94,34,0,-10,30,63,84,56,94,87,43,26,75,90,-43,-23,153,41,74,54,24,85,80,56,35,23,45,87,-90,87,56,23,56,71,37,56,34,
];

//
// Now build a for loop that at each iteration, references and logs the new temperature:
//

for (let i = 0; i < listOfTempsInF.length; i++) {
let element = listOfTempsInF[i];
element = fToC(element)
console.log(element + "C")
}



// function convertList (item) {
//   for (let i = 0; i<item.length; i++) {
//     let element = item[i];
//     element = fToC(element);
//     console.log(`${listOfTempsInF[i]}F = ${element}C`);
//   }
// }
//
// function fToC (fahrenheit){
//   let celsius = (fahrenheit - 32) * (5/9);
//   celsius = celsius.toFixed(2);
//   return celsius;
// }
//
// convertList(listOfTempsInF);


// const objectList = {
//   list: null,
//   convertList : function () {
//     for (let i = 0; i<this.list.length; i++) {
//       let element;
//       let celsius;
//       element = this.list[i];
//
//       // Converting Fahrenheit to Celsius
//       celsius = (element - 32) * (5/9);
//       celsius = celsius.toFixed(2);
//
//       // The Final Output
//       console.log(`${this.list[i]}F = ${celsius}C`);
//     }
//   },
// };
//
// const test = Object.create(objectList);
// test.list = listOfTempsInF;
