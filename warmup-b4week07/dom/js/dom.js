console.log("lolo");
/*Create a new Javascript file and link to it with a script tag at the bottom.
(In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
(In JS) Replace each of the spans (nickname, favorites, hometown) with your own
information.
Iterate through each li and change the class to "listitem". Add a style tag that sets
a rule for "listitem" to make the color red.
Create a new img element and set its src attribute to a picture of you. Append
that element to the page.*/

document.body.style.fontFamily = "Arial, sans-serif";

const nickname = document.getElementById('nickname');
nickname.innerHTML = 'The Blade';

document.getElementById('favorites').innerHTML = 'lalal';
document.getElementById('hometown').innerHTML = 'sydney';

// for 3rd question, fetch the <li>s
const listItems = document.getElementsByTagName('li');

for (let i = 0; i <listItems.length; i++) {
  listItems[i].className = 'listitem';
};

// create new img element
const myStupidHead = document.createElement
