// JavaScript Ternary Operator (Conditional Operator) and Nullish Coalescing Operator
// The ternary operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement.
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

/*Syntax of Ternary Operator in JavaScript
    - condition ? expression1 : expression2
 If the condition is true, the ternary operator returns expression1; otherwise, it returns expression2.
*/

// Example 1: Ternary Operator  
let age = 20;
let result = (age >= 18) ? 'You are an adult' : 'You are not an adult';
console.log(result);


// Example 2: Ternary Operator
let isRaining = false;
let weather = isRaining ? 'Take an umbrella' : 'Enjoy the weather';


// Example 3: Ternary Operator
let temperature = 25;
let weatherTwo = (temperature >= 25 && temperature <= 35) ? 'The weather is warm' : 'The weather is cold';


// Nullish Coalescing Operator
// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

// Example 1: Nullish Coalescing Operator
let name = '';
let username = name ?? 'Anonymous';
console.log(username);

// Example 2: Nullish Coalescing Operator
let ageTwo = 0;
let userAge = ageTwo ?? 18;
console.log(userAge);

// Example 3: Nullish Coalescing Operator
let city = null;
let userCity = city ?? 'Unknown';
console.log(userCity);
