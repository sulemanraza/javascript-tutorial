// JavaScript Control Flow - If Else Statements
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

// If Else Statements
// If else statements are used to make decisions in code. The if statement evaluates a condition and executes the code block if the condition is true. The else statement executes a code block if the condition is false.

/* Syntax of If Else Statements in JavaScript  
 if (condition) {
    code block
 } else {
    code block
 } */


// Example 1: If Else Statement
let age = 20;
if (age >= 18) {
    console.log('You are an adult');
} else {
    console.log('You are not an adult');
}


// Example 2: If Else Statement
let isRaining = false;
if (isRaining) {
    console.log('Take an umbrella');
}
else {
    console.log('Enjoy the weather');
}

// Example 3: If Else Statement complex condition
let temperature = 25;
if (temperature >= 25 && temperature <= 35) {
    console.log('The weather is warm');
} else {
    console.log('The weather is cold');
}


// Example 4: If Else Statement with multiple conditions
let day = 'Saturday';
if (day === 'Saturday' || day === 'Sunday') {
    console.log('It is a weekend');
}
else {
    console.log('It is a weekday');
}


// Example 5: If Else Statement with multiple conditions
let month = 'January';
if (month === 'January' || month === 'February' || month === 'March') {
    console.log('It is winter');
}
else if (month === 'April' || month === 'May' || month === 'June') {
    console.log('It is spring');
}
else if (month === 'July' || month === 'August' || month === 'September') {
    console.log('It is summer');
}
else {
    console.log('It is autumn');
}
