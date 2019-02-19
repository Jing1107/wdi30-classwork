console.log("8888");

/*Anagram 易位构词 Detector
Write a program that, given a word and a list of possible anagrams, selects
the anagrams of the given word.

In other words, given: "listen" and ["enlists" "google" "inlets" "banana"]
the program should return "inlets".

Suggestions

Start out by getting this working with discrete不连续的 functions.
If you feel comfortable with that, try to put all your functions, collections,
etc, into an object.*/

// const anagramWord = ["enlist", "google", "inlets"];
//
// const anagram = function (word) {
//   let word1 = word.split("")
//   for (let i = 0; i < word.length; i++) {
//     let letter = word[i];
//     for (key in this.anagramWord)
//   }
// };
const customSort = function () {
  retrun word.split("").sort().join("");
}

const checkForAnagram = function (word, candidateWords){
  // word = word.split ("");
  // word = word.sort();
  // word = jion("");

  let sortWord = customSort (word);

  for (let i =0; i < candidateWords.length; i ++) {
    let candidate = customSort (candidateWord[i]);
    if (sortWord === candidate) {
      anagrams.push (candidateWords[i]);
    }
  }
  return `The anagram of ${word} is ${anagrams}`
}
