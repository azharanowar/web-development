const date1 = new Date('1971-03-15');
const date2 = new Date('1971-03-15');
console.log(date1, date2);

if ( date1 === date2 ) {
    console.log("Both date are same!!!");
} else {
    console.log("Both date are not same!!!");
}
// The reason behind that is: anything involving '==' or '===' should use the '+' prefix. So let's compare with this way: