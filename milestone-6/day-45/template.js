// There is a way to use multiline code with js but not recommended way.
const single = "Hello Bangladesh!!!";

const multiline = "Hello Bangladesh!!!\n" +
    "Hello World!!!\n" +
    "Hello Turkey!!!\n" +
    "Hello Finland!!!\n";

console.log(multiline);


// Standard way to write multiline code with js template with backtick/backquote:

const multilineCode = `
Hello World!!!
Hello Turkey!!!
Hello Finland!!!
Hello Bangladesh!!!
`;
console.log(multilineCode);




// Advanced benifit of javascript template to make string dynamic:

// This is very complex way to make a string dynamic with normal single quote ( ' ' ) and double quote ( " " ). Example: 
const a = 10;
const b = 20;
const c = a+b;
const result = "a = " + a + "; b = " + b + "; a + b = " + c + ";";
console.log(result);


//  We can do that as simple with javascript template and backtick:
const x = 10;
const y = 30;
const result1 = `x = ${x}; y = ${y}; x + y = ${x+y};`;
console.log(result1);
