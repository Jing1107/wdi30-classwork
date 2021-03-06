// this, bind, (call and apply)

const groucho = {
  fullName: 'Groucho Julius Marx',
  greeting() {
    return `Good evening, my name is ${ this.fullName}`; // `this` will refer to the current object.
  }
};

const unboundGreeting = groucho.greeting; // Copying the method from the object breaks the connection to `this`
console.log(unboundGreeting());


// .call -- invoke a function with a particular object as `this`
console.log( unboundGreeting.call(groucho) );
console.log( unboundGreeting.call({fullName: 'Chico Marx'}) );


// .bind -- returns a new function which is permanantly bound to whatever value of this you provide.
const boundGreeting = boundGreeting.bind( groucho ); // boundGreeting = groucho.greeting.bind(groucho);
console.log( boundGreeting() );


// .apply //////////////////////////////////////////////////////////////////////////////
const numbers = [1, 2, 3, 5, 6, 10];

// Which is the maximum value in numbers?
// es5 and earlier
Math.max.apply( Math, numbers ); // .apply will an array of args into a list of args.
// es6
Math.max(...numbers ); // the ... spread operator also an array argrs into a list of argrs
