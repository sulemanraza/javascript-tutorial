// // JavaScript Number type represents integer and floating-point numbers.
// // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// // define a number variable and log it to the console
// let num = new Number(10);
// console.log(num);
// console.log(typeof num);

// // define a floating point number and log it to the console
// let floatNum = 10.5;
// console.log(floatNum);
// console.log(typeof floatNum);

// // define a negative number and log it to the console
// let negNum = -10;
// console.log(negNum);
// console.log(typeof negNum);

// // define a number with exponential notation and log it to the console
// let expNum = 5e3;
// console.log(expNum);
// console.log(typeof expNum);

// // define a number with new Number() and log it to the console
// const newNumber = new Number(10);
// console.log(newNumber);
// console.log(typeof newNumber);

// // static properties of Number object in JavaScript
// console.log(Number.MAX_VALUE); // largest positive representable number
// console.log(Number.MIN_VALUE); // smallest positive representable number
// console.log(Number.POSITIVE_INFINITY); // positive infinity
// console.log(Number.NEGATIVE_INFINITY); // negative infinity
// console.log(Number.NaN); // not a number


// // number methods and prototype properties
// // Number.prototype.toFixed()
// let num1 = 10.456;
// console.log(num1.toFixed(2)); // 10.46
// console.log(num1.toFixed(1)); // 10.5
// console.log(num1.toFixed(0));  // 10


// // Number.prototype.toString()
// let num2 = 10;
// console.log(num2.toString()); // 10
// console.log(num2.toString(2)); // 1010


// // Number.prototype.toPrecision()
// let num3 = 10.456;
// console.log(num3.toPrecision(2)); // 10
// console.log(num3.toPrecision(3)); // 10.5


// // Number.prototype.valueOf()
// let num4 = new Number(10);
// console.log(num4.valueOf()); // 10


// // currency and internationalization url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
// // list of language like en-US, en-IN, en-ES, etc: https://www.w3schools.com/tags/ref_language_codes.asp
// // currency code: https://www.iban.com/currency-codes

// // Number.prototype.toLocaleString()  
// let num5 = 10.456;
// console.log(num5.toLocaleString()); // 10.456

// console.log(num5.toLocaleString("en-US",{
//     style: "currency",
//     currency: "USD"
//     })); // $10.46

// console.log(num5.toLocaleString("en-IN", {
//     style: "currency",
//     currency: "INR",
//   })); // ₹10.46

// console.log(num5.toLocaleString("en-ES", {
//     style: "currency",
//     currency: "EUR",
//   })); // €10.46

// // all toLocaleString() options
// console.log(num5.toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD",
//     currencyDisplay: "symbol",
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
    
//   })); // $10.46
 

// // Number.prototype.toExponential()
// let num6 = 10.456;
// console.log(num6.toExponential()); // 1.0456e+1


// Math object in JavaScript
// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Math object properties
// console.log(Math.E); // Euler's number
// console.log(Math.PI); // PI

// // Math object methods
// console.log(Math.abs(-10)); // 10 absolute value of a number
// console.log(Math.ceil(10.5)); // 11 ceiling value of a number 
// console.log(Math.floor(10.5)); // 10 floor value of a number
// console.log(Math.round(10.5)); // 11 round value of a number
// console.log(Math.max(10, 20, 30)); // 30  maximum value of a number
// console.log(Math.min(10, 20, 30)); // 10 minimum value of a number
// console.log(Math.pow(2, 3)); // 8 2^3 = 8  power of a number
// console.log(Math.sqrt(16)); // 4 square root of a number
// console.log(Math.random()); // random number between 0 and 1
// console.log(Math.random() * 100); // random number between 0 and 100
// console.log(Math.round(Math.random() * 100)); // random number between 0 and 100
// console.log(Math.sin(0)); // 0 sin value of a number
// console.log(Math.cos(0)); // 1 cos value of a number
// console.log(Math.tan(0)); // 0 tan value of a number
// console.log(Math.log(10)); // 2.302585092994046 log value of a number
// console.log(Math.exp(10)); // 22026.465794806718 exponential value of a number
// console.log(Math.floor(Math.random() * 100)); // random number between 0 and 100
// console.log(Math.floor(Math.random() * 100) + 1); // random number between 1 and 100
 
// // Math object constants
const newNumber = new Number(1);

// const math =(Math.random() * 6)  + 1;  
// console.log(Math.floor(math)); // random number between 1 and 6

 
 
 