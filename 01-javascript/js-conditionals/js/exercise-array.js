console.log("hhhhhh");
/*Your top choices
Create an array to hold your top five choices of something
(dogs, books, presidents, whatever). If you choose movies, the right
top choice is "Satantango".

For each choice, log to the screen a string like: "My #1 choice is blue."
Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
picking the right suffix for the number based on what it is.*/

const fiveChoices = ["dogs", "books", "presidents", "movies", "games"];

for (i = 0; i < fiveChoices.length; i ++) {

  console.log(`My #${i+1} choice is ${fiveChoices[i]}.`);
};
