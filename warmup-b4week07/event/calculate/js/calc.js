console.log("wow");
/*Create a new Javascript file and link to it with a script
tag at the bottom.
For each operation, create an event listener for the button,
and when it's clicked, find the value of the appropriate
input and show the result of the calculation in the
solution div.
Bonus: respond to key presses so that the user doesn't
have to click the button.*/

//fetch the button
const squareButton = document.getElementById("square-button");
//define the event handler
const squareNumber = function () {
  //console.log("yes");

  //retrieve the number
  const input = parseInt(document.getElementById("square-input").value );

  //square number
  const result = input * input;
  document.getElementById('solution').innerHTML = result;
}

//attach the event handler to
squareButton.addEventListener('click', squareNumber);
