// JavaScript Object - Basics and Comparison with Other Data Types
// MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
//  1. Object
const person = {
  name: "Suleman",
  age: 25,
  welcome: function () {
    return this.name
  },
};

// console.log(person.welcome()); // { name: 'Suleman', age: 25, welcome: [Function: welcome] }
// person.name = "Ali";
// console.log(person.welcome()); // Ali
// console.log(this) // {} // global object in nodejs environment and window object in browser environment 


//  2. Object.create()
// const person2 = Object.create(person);
// console.log(person2.welcome()); // Ali
// console.log(person2.name); // Ali
// person2.name = "Ahmed";
// console.log(person2.name); // Ahmed
// console.log(person2.__proto__); // { name: 'Ali', age: 25, welcome: [Function: welcome] }

 