/*The Grade Assigner
Write a function named assignGrade that:

takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure
it works.
The Pluralizer*/

const assignGrade = function (grade){
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
};

console.log(`The grade for 99 is ${ assignGrade (99)}`);

// assignGrade (99);
// assignGrade (88);
// assignGrade (77);
// assignGrade (66);
// assignGrade (59);
