// Javascript iteration using for loop
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

/*
syntax:
for ([initialExpression]; [condition]; [incrementExpression]){
    statement
}


initialExpression: An expression (including assignment expressions) or variable declaration. Typically used to initialize a counter variable. This expression may optionally declare new variables with the var keyword. Variables declared with var are not local to the loop, i.e. they are in the same scope the for loop is in.

*/

// Example 1: Simple for loop
for (let i = 0; i < 5; i++) {
    // console.log(i);
}

// Example 2: Nested for loop
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        // console.log(`i: ${i}, j: ${j}`);
    }
}

// Example 3: for loop with break statement
/* The break statement "jumps out" of a loop. The break statement breaks the loop and continues executing the code after the loop (if any) 
MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break */

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    // console.log(i);
}


/* Example 4: for loop with continue statement 
The continue statement "jumps over" one iteration in the loop. The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue
*/
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    // console.log(i);
}

// Example 5: for loop with array
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

// Example 6: for loop with object (key-value pair) using for-in loop 
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    // console.log(key, obj[key]);
}

let coding = ["JS", "Python", "Java", "C++", "C", "Ruby"];

for (const i in coding) {  
    //  console.log(`for in loop for array: ${coding[i]}`);
}

// Example 7: for loop with array using for-of loop
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
let arr2 = [1, 2, 3, 4, 5];
for (let value of arr2) {
    // console.log(value);
}


// Example 8: for loop with string using for-of loop
let str = 'hello';
for (let value of str) {
    // console.log(value);
}

// Example 9: for loop with Map object using for-of loop

let map = new Map();
map.set('a', 1);

for (let [key, value] of map) {
    // console.log(key, value);
}

// Example 10: for loop with Object.entries() method
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
let obj2 = { a: 1, b: 2, c: 3 };
for (let [key, value] of Object.entries(obj2)) {
    // console.log(key, value);
}

// forEach loop in JavaScript (Array method) 
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// Example 11: forEach loop with array
let arr3 = [1, 2, 3, 4, 5];
arr3.forEach((value, index) => {
    // console.log({index,value  });
});

// Example 12: forEach loop with object (key-value pair)
let obj3 = { a: 1, b: 2, c: 3 };
Object.entries(obj3).forEach(([key, value]) => {
  
    // console.log(key, value);
})


// coding.forEach((item)=> {
//     console.log( item);
// })

// Example 13: forEach loop with function reference
function printValue(value) {
    console.log(`Programming Language: ${value}`);
}

coding.forEach(printValue); // JS, Python, Java, C++, C, Ruby

// Example 14: forEach loop with array using arrow function, first parameter is value and second parameter is index
coding.forEach((value, index) => {
    // console.log(`Index: ${index}, Value: ${value}`);
});

// Example 15: forEach loop with array using arrow function, and how many parameters have access in forEach loop in JavaScript
coding.forEach((value, index, arr) => {
    console.log(`Index: ${index}, Value: ${value}, Array: ${arr}`);
}); // JS, Python, Java, C++, C, Ruby

/* 
Interview Questions and Answers on For Loop in JavaScript:
 
1. What is the difference between for-in and for-of loop?
for-in loop is used to iterate over the properties of an object. It iterates over the enumerable properties of an object. for-of loop is used to iterate over the values of an iterable object like an array, string, etc. It iterates over the values of an iterable object.

2. What is the difference between for loop and for-of loop?
for loop is used to iterate over a block of code a number of times. for-of loop is used to iterate over the values of an iterable object like an array, string, etc.

3. What is the difference between for loop and while loop?
for loop is used when you know the number of iterations. while loop is used when you don't know the number of iterations.

4. What is the difference between while loop and do-while loop?
while loop checks the condition before executing the block of code. do-while loop checks the condition after executing the block of code.

5. What is the difference between break and continue statement?
The break statement "jumps out" of a loop. The continue statement "jumps over" one iteration in the loop.
*/