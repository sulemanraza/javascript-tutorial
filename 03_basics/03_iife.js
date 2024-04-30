// JavaScript Concepts: IIFE (Immediately Invoked Function Expression)
// MDN: https://developer.mozilla.org/en-US/docs/Glossary/IIFE

/*
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:
1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function. 
*/

// syntax: (function() { /* code */ })();
// Example 1: IIFE with no parameters
(function() {
    console.log("DB connection established!");
})(); // Output: DB connection established!

// Example 2: IIFE with parameters
(function(name) {
    console.log(`Hello ${name}!`);
})("John"); // Output: Hello John!

// Example 3: IIFE with return value
let result = (function(a, b) {
    return a + b;
})(2, 3);

// console.log(result); // Output: 5


// Example 4: IIFE with object literal and return value
let person = ((name, age) => ({ name, age }))("John", 25); // Output: { name: 'John', age: 25 }
console.log(person);


// Example 5: IIFE with rest parameter and return value
let sum = ((...args) => {
    let result = 0;
    args.forEach(num => result += num);
    return result;
})(1, 2, 3); // Output: 6
console.log(sum);

// Example 6: IIFE with async/await
(async function() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promise resolved!"), 2000);
    });

    console.log(await promise); // Output: Promise resolved!
})();


// Example 7: IIFE with try/catch
(function() {
    try {
        throw new Error("Something went wrong!");
    } catch (error) {
        console.error(error.message); // Output: Something went wrong!
    }
})();

// Example 8: IIFE with setTimeout
(function() {
    setTimeout(() => {
        console.log("IIFE executed after 2 seconds!");
    }, 2000);
})();


