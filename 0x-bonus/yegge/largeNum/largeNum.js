const arr = [1,2,3,10,8,100];

const largest = (integers) => {
  let max = -Infinity;

  integers.forEach ((n) => {
    if (n > max) {
      max = n;
    }
  });

  return max
}
console.log(largest(arr));
//console.log(Math.max(...arr));

// reduce function

const largest = (integers) => {
  return integers.reduce( (max, n) => {
    if (n > max) {
      return n;
    } else {
      return max;
    }
  })
};
