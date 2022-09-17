/* 
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.
 */

const cal = (numbers) => {
    let sumOfSquareNumbers = 0;
    for (const number of numbers) {
        squareOfNumber = number * number;
        // console.log(number, squareOfNumber);
        sumOfSquareNumbers += number;
        console.log(sumOfSquareNumbers);
    }

    const avarageOfSum = sumOfSquareNumbers / numbers.length;

    return avarageOfSum;
}

const numbers = [4, 2, 2, 3, 4, 5, 3, 7, 10];
const result = cal(numbers);
console.log(result);