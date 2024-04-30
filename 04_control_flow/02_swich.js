// JavaScript Switch Statement  - The switch statement is used to perform different actions based on different conditions.

// Syntax of Switch Statement in JavaScript
/* switch (expression) {
    case value1:
        code block
        break;
    case value2:
        code block
        break;
    case value3:
        code block
        break;
    default:
        code block
} */

// Example 1: Switch Statement
let day = 'Saturday';
switch (day) {
    case 'Saturday':
        console.log('It is a weekend');
        break;
    case 'Sunday':
        console.log('It is a weekend');
        break;
    default:
        console.log('It is a weekday');
}

// Example 2: Switch Statement
let month = 'January';
switch (month) {
    case 'January':
    case 'February':
    case 'March':
        console.log('It is winter');
        break;
    case 'April':
    case 'May':
    case 'June':
        console.log('It is spring');
        break;
    case 'July':
    case 'August':
    case 'September':
        console.log('It is summer');
        break;
    default:
        console.log('It is autumn');
}


// Example 3: Switch Statement
let age = 20;
switch (true) {
    case age >= 18:
        console.log('You are an adult');
        break;
    default:
        console.log('You are not an adult');
}