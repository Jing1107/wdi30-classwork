console.log("Heloooo");
/*Exercises: if/else statements
What number's bigger?
Write a function named greaterNum that:

takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make
sure it works (e.g. "The greater number of 5 and 10 is 10.").*/

// const greaterNum = function (num1,num2) {
//   if (num1 > num2) {
//     console.log(`The greater number of ${num1} and ${num2} is ${num1}.`);
//   } else if (num1 < num2) {
//     console.log(`The greater number of ${num1} and ${num2} is ${num2}.`);
//   } else {
//     console.log("They are equial");
//   }
// };
//
// greaterNum (3,5);
// greaterNum (10,6);
// greaterNum (5,5);


const greaterNum = function (a,b) {
let output;

if (a>b){
  output =a;
}else{
  output =b;
}
return output;
};

console.log(`The greater number of 5 and 10 is ${greaterNum(5,10)}.`);
console.log(`The greater number of 10 and 6 is ${greaterNum(10,6)}.`);
