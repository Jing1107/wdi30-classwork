/*The World Translator
Write a function named helloWorld that:

takes 1 argument, a language code (e.g. "es", "de", "en")
returns "Hello, World" for the given language, for atleast 3 languages.
It should default to returning English.
Call that function for each of the supported languages and log the result
to make sure it works.*/


// const helloWorld = function (language){
//   if (language === new RegExp && language === es && language === de) {
//     console.log("Hello, World");
//   } else {
//     console.log("lalala");
//   }
// };
//
// helloWorld ("hello");

const helloWorld = function (code) {
  if (code === "es") {
    return "Hola mundo!";
  } else if (code === "de") {
    return "Hallo Welt";
  } else  {
    return "Hello World";
  }
};

console.log( helloWorld('en'));
console.log( helloWorld('es'));
