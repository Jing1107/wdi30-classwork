console.log("kkkkk");

const isHappy = (num) => {
  let cycle = {};
  let squareSum = num;
  let count = 0;

  while(true) {
    squareSum = sumOfDigitsSquared(squareSum);

    if(squareSum === 1) {
      return true;
    }

    if(cycle[squareSum] === true) {
      return false;
    }

    cycle[squareSum] = true;
    count ++
    console.log("cycle: ", cycle);
  }

};  //isHappy

const sumOfDigitsSquared = (num) => {
  let sum = 0;
  let numStr = num.toString();

  for(var i = 0; i < numStr.length; i++) {
    sum += +numStr[i];
  }

  return sum
}

const generateHappyNumbers = (count) {
  let found = 0;

  for (let )
}
