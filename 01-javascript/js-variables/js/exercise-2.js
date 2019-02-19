// The Age Calculator

/* Forgot how old someone is? Calculate it!

Store the current year in a variable.
Store their birth year in a variable.
Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: "They are either NN or NN", substituting the values.*/

const currentYear = 2018;
const birthYear = 1975;

const yourAge1 = currentYear - birthYear;
const yourAge2 = yourAge1 -1;

console.log(`They are either ${ yourAge2 } or ${ yourAge1 }`);
