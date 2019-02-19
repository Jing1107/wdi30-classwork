console.log("Hello1111");
/*Write a function named pluralize that:

takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".*/

const pluralize = function (num, noun) {
  let output = `${num} ${noun}`;

  if (1 !== num){
    output += "s";   //output = out + "s";
  }
    return output;
  
};

console.log( pluralize (5 , "cat"));
console.log( pluralize (1 , "dog"));
console.log( pluralize (0 , "dog"));
