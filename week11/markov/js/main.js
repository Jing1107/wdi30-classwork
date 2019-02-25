let markov = {};
let beginnings = [];

const bookFileName = "../markov.txt";

//Build our markov chain table by interating over the given text
const makeMarkov = function(text) {
  //split huge string into array of individual words
  const words = text.split(/[ ;\-\n+/]);

  for (var i = 0; i < words.length; i++) {
    let word = words[i];

    if (!markov[word]) {
      markov[word] = [];
    }// if

    let nextWord = words [i + 1];
    markov[word].push(nextWord);

    if (word.match(/^[A-Z][a-z]/)) {
      beginnings.push(word);
    } //if
  } //for
};

//Helper function to return random integer between 0 and max
const randy = function (max) {
  return Math.floor(Math.random() * max);
}

//Helper function to return a random lelement from the gievn array
const choose = function(arr) {
  return arr[randy(arr.length)];
};

cosnt generate = function (length) {
  let next = choose (beginnings);
  let output = next;

  for (var i = 0; i < length; i++) {
    let word = choose(markov[next]);
    output += " " + word;
    next = word
  }; // for
  return output;
}

$(document).ready(function() {
  // load our text fil over AJAX
  // NOTE: for this to work you will have to run a server on your laptop,
  // i.e. by typing the command 'python -m SimpleHTTPServer' in this folder
  $ajax(bookFileName)
  .done(function(response) {
    console.log(response);
    // when out  text is loaded, pass it to our Markov-generating fucntion
    makeMarkov(response);

    // Having constructed our markov chain lookup table, use it to generate some new table
  })
  .fail(function(err) {
    console.log("error: ", err);
  })

  // Listen for keypresses, and generate new text when enter it pressed
  $(document).keypress(function(e) {
    if(e.keyCode === 13) {
      let nextText = generate(60);
      let $el = $('<p>').text(nextText);
      $('#output').append($el)
    }// fi
  })
})
