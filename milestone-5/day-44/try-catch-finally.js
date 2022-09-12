/*

console.log("Starting from here...");

const num1 = 50;
console.log(num1);
// From here everything working fine.

console.log(num2);      // Here will be ReferenceError because we called num2 before initialization.
const num2 = 20;

console.log("Hello World!");    // For our previous error that occurred, The JavaScript interpreter will stop working that's why this line will not be run.

*/


console.log("Starting from here...");

const num1 = 50;
console.log(num1);
// From here everything working fine.

// If we suspect/guess there can be an error then we should use the code in the try block.
try {
    console.log(num2);
    const num2 = 20;
} catch( error ) {
    console.log(error);     // Here we can print the error or we don't, This control is in out hand.
} finally {
    const num2 = 20;
    console.log(num2);
}

// We have used try-catch for suspicious code and now if there is any error in this code next line will be executed.
console.log("Hello World!");