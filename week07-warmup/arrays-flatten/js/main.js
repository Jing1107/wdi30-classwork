console.log("aaaalaa");

/*The goal of this exercise is to manipulate arrays by creating a function that
can reverse an array and by creating a function that can flatten an array.
Do not use any libraries to complete this task - write this stuff from scratch
using standard JS methods and objects.

Make two functions
reverse
flatten
reverse( [1, 2, 3, 4] );
// => [ 4, 3, 2, 1 ]
flatten( ["Hello", ["World", 42] ] );
// => [ "Hello", "World", 42 ]
You only need to make flatten work to one level deep! You should be able to
flatten this - ["Hello", ["World"]] - but not this - ["Hello", [[["World"]]]]

Hint: You're going to need to be looping through the arrays to get a solution.*/

// var array1 = ["yes", "no", "maybe", "always", "sometimes", "never", "if"];
// var array2 = [5,8,2,9,5,6,3,1];
// var array3 = ["Hello", ["World", 42] ];
//
// var newArray = [];
//
// function reverseArray(arr) {
//   var newArray = [];
//   for (var i = arr.length - 1; i >= 0; i--) {
//     newArray.push(arr[i]);
//   }
//   return newArray;
// }
//
// console.log(reverseArray(array3));

// const arrReverse = ["one", "two", "three", "four"];
//
// const reverse = function(array) {
//   let reversed = [];
//
//   for (let )
// }

const arrFlatten = ["one", "two", ["a", "b", "c"]];

const flatten = array => {
  let flatten = [];

  for (let i = 0; i < array.length; i++) {
    let currentElem = array[i];
    //console.log(currentElem);
    if (currentElem.constructor == Array) {
      for ( let j = 0; j < currentElem.length; j++) {
        console.log(currentElem[j]);
      }
    }
  }
}
flatten(arrFlatten);
