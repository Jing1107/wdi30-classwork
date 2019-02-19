/*The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the
ripe old age of X".*/

const currentAge = 43;
const maxiAge = 85;

// Hotdog per day
const estiAmount = 7;
const restLife = (maxiAge - currentAge)/ estiAmount * 365.25;
const outPut = "You will need " + restLife + " to until the ripe old age of " + maxiAge;


console.log( outPut );
