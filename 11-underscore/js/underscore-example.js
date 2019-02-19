const bros = "gROUCHO hARPO cHICO Zeppo".split('');

// .each
_(bros).each(function (b) {
  console.log( b.toUpperCase() );
});


//.map for arrays and objects
const upperBros =_(bros).map(function (b) {
  return b.toUpperCase();
});

console.log( bros, upperBros);

// .find
const numbers = [1,2,3,4,5,6]
const firstEven = _(number).find(function (n) {
  return n % 2 === 0;
});

console.log( firstEven );


//.filler
const evens = _(number).filler(function (n) {
  return n % 2 === 0;
})；
console.log('evens', evens);

// .where
const liabrary = [
  {author:'James Joyce', title:'Dublines'},
  {author:'James Joyce', title:'Ulysses'},
  {author:'Dan Brown', title:'The Da Vinci code'},
  {author:'James Joyce', title:'Finnegans Wake'},
];

const joyceBooks = _(liabray).where( {'author': 'James Joyce'});
console.log( joyceBooks );

// .pluck
const bookTitles = _(liabrary).pluck('author');
console.log(bookTitles);

// Max and Min
const scores = [24, 23, 65, 99, 18, 0.5];
console.log( _(scores).max(), _(scores).min());
