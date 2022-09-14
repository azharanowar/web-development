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