console.log("11111");

const fetchFact = function () {
  const xhr = new XMLHttpRequest(); // Create a lil Javascript
  xhr.open('GET', 'http://numbersapi.com/random/trivia?json'); // Configure the browser

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4 ) {
      return; // Request is still in progress so don't do anything yet.
    }

    const data = JSON.parse(xhr.responseText); // Translate the string reposne into a real JS object

    const p = document.createElement('p');
    p.innerHTML = data.text;
    document.body.appendChild(p);
  }

  xhr.send();// press enter: strat the ASYCHRONOUS request

};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact();




// // Make an AJAX request for Number API data and log it in the console
// const xhr = new XMLHttpRequest(); // Create a lil Javascript browser
// xhr.open('GET', 'http://numbersapi.com/random/trivia?json'); // Configure the browser
//
// xhr.onreadystatechange = function () {
//   //console.log('something happened', xhr.readyState, xhr.responseText);
//   if (xhr.readyState !== 4 ) {
//     return; // Request is still in progress so don't do anything yet.
//   }
//   //console.log( xhr.responseText );
//   const data = JSON.parse( xhr.responseText);
//   console.log(xhr.responseText, data);
//   document.body.innerHTML = data.text;
// }
//
// xhr.send();// press enter: strat the ASYCHRONOUS request
//
//
// // setTimeout(function () {
// //   console.log('Here is your trivia:', xhr.responseText);
// // }, 500);
