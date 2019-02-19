console.log("Hello World")

// The Fortune Teller

const numberOfChildren = 5;
const parentName = "Chao";
const geoLocation = "Sydney";
const jobTitle = "Web Developer";
// string concatenation

//const outPut = "You will be a " + jobTitle + " in " + geoLocation + ", and married to "
//+ parentName + " with " + numberOfChildren + " kids.";

// ES6: string interpolation
const outPut = `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ parentName } with ${ numberOfChildren } kids.`;

console.log( outPut );
