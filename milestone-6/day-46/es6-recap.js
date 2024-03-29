// ES6 Practice and Recap...


// 1. Difference Between var, let and const:

// 2. Default Parameter Value:

// 3. Spread Operator:

// 4. Arrow Function:

// 5. Template Literature:

// 6. Object/Array Destructuring:




// 1. Difference Between var, let and const:

/* console.log(testVar);
var testVar = "Var is a not block scope element, That's mean it has hoisting feature. We will not use var anymore.";
console.log(testVar); */

/* // console.log(testLet); // We can't call let variable before declaration.
let testLet = "Let is a block scope element, That's meant there is no hoisting feature. We can't re-declare let variable but we can re-assign let variable value.";
console.log(testLet);
// let testLet = "Re-declaring let"; // We can't re-declare let but we can re-assign value:
testLet = "Re-assigned let variable value."
console.log(testLet); */

// const testConst = "Const is a block-scope elements, that meant there is no hoisting feature. Const can't be re-decalre or re-assign.";
// console.log(testConst);



// 2. Default Parameter Value:

/* function sum(numberOne = 10, numberTwo = 10) {
    return numberOne + numberTwo;
}

console.log(sum(20, 30));
console.log(sum(10)); // Here we didn't pass second argument value. so it will take default value as 10.  */



// 3. Spread Operator:

/* console.log(Math.max(20, 43, 30, 40, 40, 20, 60, 3, 50, 34));
// But what if we have an array of numbers to be compared? Then it will not work:
const numbers = [20, 43, 30, 40, 40, 20, 60, 3, 50, 34];
console.log(Math.max(numbers)); // Because we need here to provide numbers list or an array. Here spread syntax/operator come:
console.log(Math.max(...numbers));
 */

// Another usecase, For example we have an array where array all elements will be a function arguments:

/* 
function mul(num1, num2, num3) {
    return num1 * num2 * num3;
}

console.log(mul(2, 3, 4));

const numbers = [2, 3, 4];
console.log(mul(numbers));
console.log(mul(...numbers)); 
*/


// 4. Arrow Function:
/* const sum = () => "Return from a simple arrow function.";
console.log(sum());

const square = number => number * number;
console.log(square(3));

const mul = (num1, num2) => num1 * num2;
console.log(mul(2, 4));

const message = () => {
    console.log("Message one...");
    console.log("Message two...");
    console.log("Message three...");
    return "Final Message!";
}
console.log(message()); */


// Immediately Invoked Function Expressions (IIFE Function):
( () => {
    console.log("Hello from another type of function (IIFE Function)!!! This function is not needed to call anymore, This type of function calls automatically when javascript interpret start.");
})();




// 5. Template Literature:

const value = 500;
const dynamicCode = `<div>
    <h1>This is heading one!!!</h1>
    <h2>This is heading two!!!</h2>
    <p>This is heading a paragraph</p>
    <h3>Dynamic value = ${value}</h3>
</div>`

console.log(dynamicCode);




// 6. Object/Array Destructuring:
const userInfo = {
    fullName: "Azhar Anowar",
    emailAddress: "azharanowar@gmail.com",
    phoneNumber: "01875967162",
    websiteURL: "https://azharanowar.com"
}

const {fullName, emailAddress, ...moreInfo} = userInfo;

console.log(fullName);
console.log(emailAddress);
console.log(moreInfo);


const userNames = ["azharanowar", "fozlearafat", "asifulislam"];
const [username1, username2, username3] = userNames;
console.log(username1, username2);
