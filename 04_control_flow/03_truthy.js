// JavaScript Truthy and Falsy values
// MDN:  https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, "", null, undefined, and NaN).

/* Falsy values in JavaScript
    The following values are always falsy:
        - false
        - 0 (zero)
        - '' or "" (empty string)
        - null
        - undefined
        - NaN (e.g., the result of 1/0) 
*/

/* All other values are truthy. That includes: 
    - "0" (a string containing a single zero)
    - "false" (a string containing the text “false”)
    - [] (an empty array)
    - {} (an empty object)
    - function(){} (an “empty” function)  
*/


// Example 1: Truthy and Falsy values
let value = 0;
if (value) {
    console.log('The value is truthy');
} else {
    console.log('The value is falsy');
}

// Example 2: Truthy and Falsy values
let name = '';
if (name) {
    console.log('The name is truthy');
} else {
    console.log('The name is falsy');
}

// Example 3: Truthy and Falsy values
let isRaining = false;
if (isRaining) {
    console.log('The weather is rainy');
}
else {
    console.log('The weather is not rainy');
}
