// Parameter Undefined Value Validation

/* function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

// const result = add(20); // Output: NaN
const result = add(); // Output: NaN
console.log(result); */

// The reason behind that is when we are not providing any value for arguments the parameter value will be undefined. And when we do + operation with a undefined value result will be NaN (Not a Number).





// Solving this problem with parameter validation:


// Way - 1 ( Old way, we will not use that anymore ):

/* function add(firstNumber, secondNumber) {
    if (firstNumber === undefined) {
        firstNumber = 0;
    }
    if (secondNumber === undefined) {
        secondNumber = 0;
    }
    return firstNumber + secondNumber;
}
const result = add();
console.log(result); */



// Way - 2 ( New and best way to solve this issue with ES6 ):

function add(firstNumber = 0, secondNumber = 0) {
    if (firstNumber === undefined) {
        firstNumber = 0;
    }
    if (secondNumber === undefined) {
        secondNumber = 0;
    }
    return firstNumber + secondNumber;
}
const result = add();
console.log(result);

// When we will not provide any value with arguments then it will apply parameter default value. But when there is a value with argument default value will not used anymore.