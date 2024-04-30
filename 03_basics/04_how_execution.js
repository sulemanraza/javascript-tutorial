// JavaScript Concepts:  How does javascript works behind the scene (Execution Context) 
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// Reference: https://dev.to/jahid6597/javascript-execution-context-a-deep-dive-4kno


/* 
Execution Context step by step:
1. Creation Phase:
    - Creation of the Variable Object (VO)
    - Creation of the Scope Chain
    - Determine the value of 'this' keyword
    
2.  Memory allocation for variables and functions (Hoisting) 
    - Variables are assigned a default value of 'undefined'
    - Functions are stored in memory in their entirety
    - Hoisting is the default behavior of moving all the declarations at the top of the current scope before code execution.

3.  Code Execution Phase (Running the code line by line) 
   - Assigning values to variables
    - Executing functions
    - Reference to the outer environment
    - Execution of code
   
4.  Execution Context Types:
    - Global Execution Context
    - Functional Execution Context
    - Eval Function Execution Context
*/

 function one() {
     console.log("Suleman")
 }

 function two() {
     console.log("Raza")
 }

 function three() {
     console.log("Three")
 }

one()
two()
three()