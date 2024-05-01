/* JavaScript Concepts: while loop  and do-while loop
The while loop loops through a block of code as long as a specified condition is true.
MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

syntax:
while (condition) {
  // code block to be executed
}

The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false.

MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while

syntax:
do {
  // code block to be executed
}while (condition);
*/


// Example 1: Simple while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Example 2: Nested while loop
let j = 0;
while (j < 3) {
    let k = 0;
    while (k < 3) {
        console.log(`j: ${j}, k: ${k}`);
        k++;
    }
    j++;
}


// Example 3: while loop with break statement
let l = 0;
while (l < 5) {
    if (l === 3) {
        break;
    }
    console.log(l);
    l++;
}


// Example 4: while loop with continue statement
let m = 0;
while (m < 5) {
    m++;
    if (m === 3) {
        continue;
    }
    console.log(m);
}



// Example 5: do-while loop
let n = 0;
do {
    console.log(n);
    n++;
} while (n < 5);


// Example 6: do-while loop with break statement
let o = 0;

do {
    if (o === 3) {
        break;
    }
    console.log(o);
    o++;
} while (o < 5);


// Example 7: do-while loop with continue statement
let p = 0;

do {
    p++;
    if (p === 3) {
        continue;
    }
    console.log(p);
}while (p < 5);


/*
interview questions and answers:
1. What is the difference between while and do-while loop?
The while loop checks the condition before the execution of the block of code. It may not execute the block of code if the condition is false.

2. What is the difference between while and do-while loop?
The do-while loop executes the block of code once before checking the condition. It will execute the block of code at least once.
*/
