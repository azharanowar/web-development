// Function declare and calling normal way in JS:

/* function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

const result = add(20, 30);
console.log(result); */


/* Function expression:
const result = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

console.log(result(20, 30)); */




// Arrow Function:

// const result = () => { return 30 + 40; }
// console.log(result());

const result = (firstNumber, secondNumber) => firstNumber + secondNumber;
console.log(result(20, 40));