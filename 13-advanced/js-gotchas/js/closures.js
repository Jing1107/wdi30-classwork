// const doSecretThingWithConfidentialInfo = function () {
//   const password = 'swordfish'; // This variable is still visible within showPassword VIA the closures
//
//   return function () {
//     console.log('The password is', password);
//   }
//
//   //return showPassword;
// };
//
// const passwordShower = doSecretThingWithConfidentialInfo();



// let id = 0;
//
// const nextID = function () {
//   return id++; // Returns and increments the ID.
// };

const idMaker = function () {
  // set up an initial ID;
  let id = 0;

  // return a function which THROUGH A CLOSURE will still have access to that id.
  return function () {
    return id++; // id persists through the closure
  }
}

const brothers = [
  {name: 'Groucho', id: textID()},
  {name: 'Harpo', id: textID()},
  {name: 'Chico', id: textID()},
];



// HTML Tag demo /////////////////////////////////////////////////////////////
// const p = function (content) {
//   return '<p>' + content + '</p>';
//
// };
//
// cosnt h1 = function (content) {
//   retrun '<h1>' + content + '</h1>';
// };
//
// cosnt h2 = function (content) {
//   retrun '<h2>' + content + '</h2>';
// };

const tag = function (tagNmae) {
  const theTag = tagName;

  const htmlMaker = function (content) {
    return `<${ theTag }>${content}</${ theTag }>`
  };

  return htmlMaker;
};

const p = tag('p');
const h1 = tag('h1');
const h2 = tag('h2');
const span = tag('span');
const div = tag('div');

// jQuery code might also use closures without you thinking much about it
$(document).ready(function () {
  const mySecretPassword = 'chicken';

  $('button').on('click', function () {
    console.log('Here is the secret password', mySecretPassword);
  });

  console.log('The document ready function is over');
})
