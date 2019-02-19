/*The Geometrizer
Create 2 functions that calculate properties of a circle.

Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".*/

const calcCircumfrence = function (radius){
  const circumference = Math.PI * 2 * radius;
  console.log(`The circumference is ${ circumference.toFixed(4) }`);
};

calcCircumfrence(4);


const calcArea = function (radius){
  const area = Math.PI * (radius * radius);
  console.log(`The area is ${ area }`);
};

calcArea(4);

// const radius = 4;
// const circumference = Math.PI * 2 * radius;
// const outPut = "The circumference is " + circumference;
// const area = "The area is " + Math.PI * (radius * radius);
//
// console.log( outPut );
// console.log( area );
