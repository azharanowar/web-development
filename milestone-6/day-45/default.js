// Parameter Undefined Value Validation

/* function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

// const result = add(20); // Output: NaN
const result = add(); // Output: NaN
console.log(result); */

// The reason behind that is when we are not providing any value for arguments the parameter value will be undefined. And when we do + operation with a undefined value result will be NaN (Not a Number).



// Solving this problem with parameter validation:

// Way - 1 ( Old way, we will not use that. ):
function add(firstNumber, secondNumber) {
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
