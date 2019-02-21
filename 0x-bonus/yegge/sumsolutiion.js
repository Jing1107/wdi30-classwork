const fs = require('fs'); // File system from NODE std library

const sumIntegers = function (filenme) {
  let sum = 0;
  const file = fs.readFileSync(filename, 'utf-8');

  file.split('\n').forEach(function (line) {
    const n = Number(line);
    sum += n;
  });
}


sumIntegers('./integers.txt')
