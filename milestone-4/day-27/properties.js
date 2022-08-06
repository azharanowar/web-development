var studentInfo = {
    roll: 181040,
    name: "Azhar Anowar",
    depertment: "Computer",
    shift: "2nd",
    group: "B"
}


// Get object value way-1 by (.) dot object sign with keys or properties name:
console.log(studentInfo.name);
console.log(studentInfo.roll);
var studentName = studentInfo.name;
console.log(studentName);

// Get object value way-2 by array sign [] with keys or peroperties name:
console.log(studentInfo['depertment']);
var group = 'group';
console.log(studentInfo[group]);


// Get object all properties/keys name by Object.keys():
var studentInfoKeys = Object.keys(studentInfo);
console.log(studentInfoKeys);
