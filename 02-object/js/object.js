console.log("222222");
/*The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have
properties for title (a string), servings (a number), and ingredients
(an array of strings).

On separate lines (one console.log statement for each), log the recipe information
so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa*/

const recipeCard = {
    title : " Sugar Apple ",
    servings : 2,
    ingredients : ["cinnamon", "cumin", "cocoa"]
};

for ( let i =0; i < recipeCard.ingredients.length; i++) {
  console.log(recipeCard.ingredients[i]);
}


/*The Reading List
Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties
for the title (a string), author (a string), and alreadyRead (a boolean indicating
if you read it yet).
Iterate through the array of books. For each book, log the book title and book
author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read
it yet or not. If you read it, log a string like 'You already read "The Hobbit"
by J.R.R. Tolkien', and if not, log a string like 'You still need to read
"The Lord of the Rings" by J.R.R. Tolkien.'*/

const liabrary = [
  {title : "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true},

  {title : "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: true},

  {title : "Harry Potter", author: "J.K.Rowlling", already: false}
];

for (let i = 0; i < liabrary.length; i++) {
  const book = liabrary[i];
  const bookDeatils = `${book.title} by ${book.author}`;
  console.log (`${book.title} by ${book.author}`);


  if (book.alreadyRead === true) {
    console.log(`You already read ${ bookDeatils }`);
  } else {
    console.log(`You still need to read ${ bookDeatils }`);
  }
};



/*The Movie Database
It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie:
title (a string), duration (a number), and stars (an array of strings).
Create a function to print out the movie information like so: "Puff the Magic
Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."*/

const oBrother = {
  title : "O! Brother, Where Art Thou?",
  duration : 127,
  stars : ["George", "Gillian", "John", "That Really Slinty Guy"]
};

const alien = {
  title : "Alien",
  duration : 110,
  stars : ["Zhang", "Zhao", "Li"]
};

const movieInfo = function (movie) {
  const info = `${ movie.title } lasts for ${movie.duration}. Stars: ${movie.stars.join(', ')}`;
  return info;
}


console.log(movieInfo(oBrother));
console.log(movieInfo(alien));
