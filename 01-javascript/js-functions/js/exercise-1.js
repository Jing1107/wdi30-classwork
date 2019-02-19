console.log("Hello World")

/*Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:

takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/

const furtuneTeller = function ( numberOfChildren, parentName, geoLocation, jobTitle) {
const outPut = `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ parentName } with ${ numberOfChildren } kids.`;
console.log( outPut);
};

furtuneTeller (5, "Chao", "Sydney", "Web Developer");
furtuneTeller (3, "Zhang", "Beijing", "Banker");



// const numberOfChildren = 5;
// const parentName = "Chao";
// const geoLocation = "Sydney";
// const jobTitle = "Web Developer";
// string concatenation

//const outPut = "You will be a " + jobTitle + " in " + geoLocation + ", and married to "
//+ parentName + " with " + numberOfChildren + " kids.";

// ES6: string interpolation
//const outPut = `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ parentName } with ${ numberOfChildren } kids.`;
