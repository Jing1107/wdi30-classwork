/*The Temperature Converter
It's hot out! Let's make a converter.

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."*/

const celsiusToFahrenheit = function (celsius){
let fahrenheit = celsius * 1.8 +32;
console.log(`${ celsius }°C is ${ fahrenheit }°F`);
};

celsiusToFahrenheit(22);

const fahrenheitToCelsius = function (fahrenheit){
const celsius = (fahrenheit -32)/ 1.8;
console.log(`${ fahrenheit }°F is ${ celsius }°C`);
};

fahrenheitToCelsius(73.4);


// let celsiusTem = 25;
// let fahrenheit = celsiusTem * 1.8 + 32;
//
// console.log(`${ celsiusTem }°C is ${ fahrenheit }°F`);
//
// celsiusTem = (fahrenheit - 32) / 1.8;
// console.log(`${ fahrenheit }°F is ${ celsiusTem }°C`);
