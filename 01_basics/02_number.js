// JavaScript Number type represents integer and floating-point numbers.
// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// define a number variable and log it to the console
let num = new Number(10);
console.log(num);
console.log(typeof num);

// define a floating point number and log it to the console
let floatNum = 10.5;
console.log(floatNum);
console.log(typeof floatNum);

// define a negative number and log it to the console
let negNum = -10;
console.log(negNum);
console.log(typeof negNum);

// define a number with exponential notation and log it to the console
let expNum = 5e3;
console.log(expNum);
console.log(typeof expNum);

// define a number with new Number() and log it to the console
const newNumber = new Number(10);
console.log(newNumber);
console.log(typeof newNumber);

// static properties of Number object in JavaScript
console.log(Number.MAX_VALUE); // largest positive representable number
console.log(Number.MIN_VALUE); // smallest positive representable number
console.log(Number.POSITIVE_INFINITY); // positive infinity
console.log(Number.NEGATIVE_INFINITY); // negative infinity
console.log(Number.NaN); // not a number


// number methods and prototype properties
// Number.prototype.toFixed()
let num1 = 10.456;
console.log(num1.toFixed(2)); // 10.46
console.log(num1.toFixed(1)); // 10.5
console.log(num1.toFixed(0));  // 10


// Number.prototype.toString()
let num2 = 10;
console.log(num2.toString()); // 10
console.log(num2.toString(2)); // 1010


// Number.prototype.toPrecision()
let num3 = 10.456;
console.log(num3.toPrecision(2)); // 10
console.log(num3.toPrecision(3)); // 10.5


// Number.prototype.valueOf()
let num4 = new Number(10);
console.log(num4.valueOf()); // 10


// currency and internationalization url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
// list of language like en-US, en-IN, en-ES, etc: https://www.w3schools.com/tags/ref_language_codes.asp
// currency code: https://www.iban.com/currency-codes

// Number.prototype.toLocaleString()  
let num5 = 10.456;
console.log(num5.toLocaleString()); // 10.456

console.log(num5.toLocaleString("en-US",{
    style: "currency",
    currency: "USD"
    })); // $10.46

console.log(num5.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  })); // ₹10.46

console.log(num5.toLocaleString("en-ES", {
    style: "currency",
    currency: "EUR",
  })); // €10.46

// all toLocaleString() options
console.log(num5.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    
  })); // $10.46
 

// Number.prototype.toExponential()
let num6 = 10.456;
console.log(num6.toExponential()); // 1.0456e+1



