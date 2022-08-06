// function trafficSignal(signal) {
//     var result;
//     if ( signal == "red" ) {
//         result = "Don't cross the road now, It will be DANGER!!!";
//     } else if ( signal == "yellow" ) {
//         result = "Better you should stop now!!! Later you can cross the road.";
//     } else {
//         result = "Now you can safely cross the road. Have a great day.";
//     }

//     return result;
// }


// var result = trafficSignal("green");
// console.log(result);




// Random signals change function:
function trafficSignals(singals) {
    var signal = Math.floor( Math.random() * singals.length );
    var result;
    if ( signal == 0 ) {
        result = "Don't cross the road now, It will be DANGER!!!";
    } else if ( signal == 1 ) {
        result = "Better you should stop now!!! Later you can cross the road.";
    } else if ( signal == 2) {
        result = "Now you can safely cross the road. Have a great day.";
    }

    return result;
}

var singals = [ "red", "yellow", "green" ];
var result = trafficSignals(singals);
console.log(result);