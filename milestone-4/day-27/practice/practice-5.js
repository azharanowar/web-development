function trafficSignals(signal) {
    var result;
    if ( signal == "red" ) {
        result = "Don't cross the road now, It will be DANGER!!!";
    } else if ( signal == "yellow" ) {
        result = "Better you should stop now!!! Later you can cross the road."
    } else {
        result = "Now you can safely cross the road. Have a great day."
    }

    return result;
}


var result = trafficSignals("green");
console.log(result);



