function makeAvarage( assignmentOneMarks, assignmentTwoMarks, assignmentThreeMarks ) {
    var sumOfMarks = assignmentOneMarks + assignmentTwoMarks + assignmentThreeMarks;
    var avarageMarks = sumOfMarks / 3;
    return avarageMarks;
}


var avarageMarks = makeAvarage( 60, 60, 50 );
console.log(parseFloat(avarageMarks.toFixed(2)));