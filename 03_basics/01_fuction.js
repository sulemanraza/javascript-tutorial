// JavaScript Function - Basics and Comparison with Other Data Types
// MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
//  1. Function Declaration - Named Function Expression
// can be used before the declaration
function welcome() {
    return "welcome Hello, World!";
}
// console.log(welcome()); // Hello, World!


//  2. Function Constructor - Function Constructor 
const welcome2 = new Function('return " Hello, World!"');
// console.log(welcome2()); // Hello, World!


//  3. Function Expression - Anonymous Function Expression 
// can be assigned to a variable and can not use before the declaration 
const welcome3 = function () {
    return "Hello, World!";
}
// console.log(welcome3()); // Hello, World! 

// this keyword in function
const person = {
    name: "Suleman",
    age: 25,
}

function welcome() {
    return this.name;
}
// console.log(welcome.call({name:"ali"})); //  ali
// console.log(welcome.apply(person)); // Suleman

// default  arguments in function
function welcome4(name = "Suleman") {
    return name;
}

// console.log(welcome4()); // Suleman
// console.log(welcome4("Ali")); // Ali


// more about this keyword in function and methods
// MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
function product(name, price, locale, currency) {
    this.name = name;
    this.price = price.toLocaleString(locale,{
        style: "currency",
        currency:  currency
    
    });
}

function food(name, price,locale="en-US",currency="USD") {
    product.call(this, name, price, locale,currency); // call() method is used to call a function with a given this value and arguments provided individually.
    this.category = "food";
}

// console.log(new food("Pizza", 100)); // food { name: 'Pizza', price: 100, category: 'food' }
// console.log(new food("Pizza", 100, "es-ES", "EUR"));  // food { name: 'Pizza', price: '100,00 €', category: 'food' } 
// console.log(new food("Pizza", 100, "en-IN", "INR")); // food { name: 'Pizza', price: '₹100.00', category: 'food' }

// function thisFuc() {
//     return this 
// }

// console.log(thisFuc()); // global object in node and window object in browser 

// function thisFuc() {
//     let name = "Suleman";
//     return this.name
// }
// console.log(thisFuc()); // undefined