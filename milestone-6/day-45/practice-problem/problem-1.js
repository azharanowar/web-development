// Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.

const mul = (numberOne, numberTwo, numberThree) => numberOne * numberTwo * numberThree;

console.log(mul(2,2,2));


// Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani.
const messeges = `I'm a web developer.
I love code.
I love to eat biriyani.`
console.log(messeges);


// Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

const sum = (numOne, numTwo = 20) => numOne + numTwo;
console.log(sum(30));
