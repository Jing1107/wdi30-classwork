console.log("hihihi");
/*The even/odd reporter
Write a for loop that will iterate from 0 to 20. For each iteration,
it will check if the current number is even or odd, and report that
to the screen (e.g. "2 is even").*/

for (x = 0; x <= 20; x++ ){
  if (x % 2 === 0) {
    console.log(`${x} is even`);
  } else {
    console.log(`${x} is odd`);
  }
};


/*Multiplication Tables
Write a for loop that will iterate from 0 to 10. For each iteration of the for loop,
it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

Bonus: Use a nested for loop to show the tables for every multiplier from
1 to 10 (100 results total).*/


for (i = 1; i <= 10; i++ ) {
  // let result = i * 9;
  // console.log(`${i} * 9 = ${result}`);
  for (j = 1; j<= 10; j++){
    console.log(`${i} * ${j} = ${i * j}`);
  }
};





/*The Grade Assigner
Check the results of assignGrade function from the conditionals exercise for
every value from 60 to 100 - so your log should show "For 89, you got a B. For 90,
you got an A.", etc.*/

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

for (i = 60; i <= 100; i++) {
  console.log(`For ${i}, you got a ${assignGrade(i)}.`);
}
