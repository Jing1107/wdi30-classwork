/*The Geometrizer
Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".*/

const radius = 4;
const circumference = Math.PI * 2 * radius;
const outPut = "The circumference is " + circumference;
const area = "The area is " + Math.PI * (radius * radius);

console.log( outPut );
console.log( area );
