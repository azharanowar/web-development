// 1. Global Contexts:

// // Here this contains global object (Window for browser)
// function exploringThis() {
//     console.log(this);
// }


// Here this contains global object (Window for browser)
const exploringThis = () => {
    console.log(this);
}


// // Here this contains clicked element for onclick assigned function
// document.getElementById("thisBtn").onclick = function() {
//     console.log(this);
// };


// Here this contains clicked element for addEventListener
document.getElementById("thisBtn").addEventListener('click', function() {
    console.log(this);
});



function test() {
    console.log(this);
}
// Here this contains global object (Window for browser)
test();


const arrowFunction = () => {
    console.log(this);
}
// Here this contains global object (Window for browser)
arrowFunction();




// 1. Custom Object:

const myObj = {
    name: "Azhar Anowar",
    profession: "Student",
    normalFunc: function() {
        console.log("From custom object normal function", this);
    },
    arrowFunc: () => {
        console.log("From custom object arrow function", this);
    }
}

// Here this contains custom object in normal function case.
myObj.normalFunc();

// Here this contains global object(Window for browser) in arrow function case.
myObj.arrowFunc();