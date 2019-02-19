/*The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:

takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.*/

const calculateSupply = function ( age, amountPerDay ){
  const restLife = age / amountPerDay * 365.25;

  console.log( `You will need ${ Math.round (restLife)} to last you until the ripe old age of ${age}` );

} ;

calculateSupply ( 42, 7 );
calculateSupply ( 25, 3 );

// const currentAge = 43;
// const maxiAge = 85;
//
// Hotdog per day
// const estiAmount = 7;
// const restLife = (maxiAge - currentAge)/ estiAmount * 365.25;
// const outPut = "You will need " + restLife + " to until the ripe old age of " + maxiAge;
