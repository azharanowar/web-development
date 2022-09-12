// const date1 = new Date('1971-03-15');
// const date2 = new Date('1971-03-15');
// console.log(date1, date2);

// if ( date1 === date2 ) {
//     console.log("Both date are same!!!");
// } else {
//     console.log("Both date are not same!!!");
// }
// // JavaScript date comparison with date object not working because comparing of two values must be numbers.
// // The reason behind that is: anything involving '==' or '===' should use the '+' prefix. So let's compare with this way:



// // Let's solve this problem. Here is 2 way to fix that, both are same:
// console.log(+date1, +date2);
// console.log(date1.getTime(), date2.getTime());


// const date1 = new Date('1971-03-15');
// const date2 = new Date('1971-03-15');
// console.log(+date1, +date2);

// if ( +date1 === +date2 ) {
//     console.log("Both date are same!!!");
// } else {
//     console.log("Both date are not same!!!");
// } 
// // Now it working fine...

// const dateOne = new Date('1971-03-15');
// const dateTwo = new Date('1971-03-15');
// console.log(dateOne.getTime(), dateTwo.getTime());

// if ( dateOne.getTime() === dateTwo.getTime() ) {
//     console.log("Both date are same!!!");
// } else {
//     console.log("Both date are not same!!!");
// }
// // This way also working fine...



// NOTE: JavaScript getTime() Comparison will start from this date: 1970-01-01 So when date will be 1970-01-01 getTime() output will be 0



// const dateOne = new Date('1971-10-15');
// const dateTwo = new Date('1971-01-25');
// console.log(dateOne.getTime(), dateTwo.getTime());

// if ( dateOne.getTime() > dateTwo.getTime() ) {
//     console.log("Date one is bigger than date two!!!");
// } else {
//     console.log("Date two is bigger than date one!!!");
// }



const dateOne = new Date('1971-03-15');
const dateTwo = new Date('1971-10-25');
console.log(dateOne.getTime(), dateTwo.getTime());

if ( dateOne.getTime() < dateTwo.getTime() ) {
    console.log("March is before december!!!");
} else {
    console.log("December is before march!!!");
}
