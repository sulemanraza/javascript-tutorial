// JavaScript Concepts: Arrow functions 
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// Arrow functions are a new way to write functions in JavaScript. They are more concise and easier to read. 
// introduced in ES6 (ECMAScript 2015). Arrow functions are anonymous functions, i.e., they do not have a name.

// Syntax: const functionName = (parameters) => { statements }

// Example 1: Arrow function with no parameters
const greet = () => {
    console.log("Hello World!");
}

greet(); // Output: Hello World!

// Example 2: Arrow function with one parameter
const greetUser = (name) => {
    console.log(`Hello ${name}!`);
}

greetUser("John"); // Output: Hello John!

// Example 3: Arrow function with multiple parameters
const add = (a, b) => {
    return a + b;
}

console.log(add(2, 3)); // Output: 5


// Example 4: Arrow function with implicit return 
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Output: 6


// Example 5: Arrow function with no parameters and implicit return
const sayHello = () => "Hello World!";
console.log(sayHello()); // Output: Hello World!

// Example 6: Arrow function with single parameter and implicit return
const greetUser2 = name => `Hello ${name}!`;
console.log(greetUser2("Ali")); // Output: Hello John!


// Example 7: Arrow function with object literal and implicit return 
const createPerson = (name, age) => ({ name, age });
console.log(createPerson("John", 25)); // Output: { name: 'John', age: 25 }

// Example 8: Arrow function with rest parameter
const sum = (...args) => {
    let result = 0;
    args.forEach(num => result += num);
    return result;
}

console.log(sum(1, 2, 3)); // Output: 6


 