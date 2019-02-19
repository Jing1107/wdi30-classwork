console.log("pppppp");

const catFactory = function (n, a, f) {
  const cat = {
  name : n,
  age : a,
  furColor : f,
  species: "feline",
  meow: function () {
    console.log("Meow, my name is " + this.name);
    }
  };
  return cat;
};


const cuteCats = [
  catFactory ("Angel", 18, "grey"),
  catFactory ("Evil", 14, "red"),
  catFactory ("Meh", 12, "white")
  // {name: "Angel", age: 18, furColor: "grey"}
  // {name: "Evil", age: 14, furColor: "red"}
  // {name: "Meh", age: 12, furColor: "white"}
];

for (let i = 0; i < cuteCats.length; i++) {
  console.log( cuteCats[i].age);
};


// Prototype Inheritance
// Interesting/Historic BUT NOT SUPER IMPORTANT TODAY

const Cat = function (n, a, f) {
//the "this" object is created automagically for you by JS
  this.name = n.
  this.age = a;
  this.furColor = f;
  this.meow = function () {
    console.log("Meow, my name is " + this.nane);
  }
// no need for a return statement! That also happens automagically.

}

const cooper = new Cat("Cooper", 3, "striped");
const Audrey = new Cat("Audrey", 3, "striped");

cooper.meow ();

Cat.prototype.eat = function (food) {
  console.log("Yum I love to eat" + food);
};

cooper.eat ("brown mushy stuff");
cooper.eat ("brown jelly stuff");
