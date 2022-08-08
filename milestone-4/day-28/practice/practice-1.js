function convertMinute( hours ) {
    let minutes = hours * 60;
    return minutes;
}


let hours = 5;
let result = convertMinute( hours );

console.log(result);