/*The Temperature Converter
It's hot out! Let's make a converter based on the steps here.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."*/

let celsiusTem = 25;
let fahrenheit = celsiusTem * 1.8 + 32;

console.log(`${ celsiusTem }°C is ${ fahrenheit }°F`);

celsiusTem = (fahrenheit - 32) / 1.8;
console.log(`${ fahrenheit }°F is ${ celsiusTem }°C`);
