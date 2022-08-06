let student = {
    id: 134,
    name: "Azhar Anowar",
    mobile: "01875967162",
    city: "Noakhali"
}


let mobile = {
    name: "Apple 12 Pro",
    price: 1200,
    brand_name: "Apple",
    storage: "500GB",
    ram: "32GB"
}


console.log( student );
console.log( student.name );


// Object value update:
console.log(mobile);
mobile.ram = "62GB";
console.log(mobile); // Updated object values



// Array with objects
let students = [
    {
        roll: 181040,
        name: "Azhar Anowar",
        depertment: "Computer",
        shift: "2nd",
        group: "B"
    },
    {
        roll: 181040,
        name: "Fozle Arafat",
        depertment: "Computer",
        shift: "2nd",
        group: "A"
    },
    {
        roll: 181040,
        name: "Ariful Islam",
        depertment: "Computer",
        shift: "2nd",
        group: "A"
    },
    {
        roll: 181040,
        name: "Shakhawat Hossen",
        depertment: "Computer",
        shift: "2nd",
        group: "B"
    },
    {
        roll: 181040,
        name: "Mohammad Ali",
        depertment: "Computer",
        shift: "2nd",
        group: "A"
    },
];

// console.log(students[1].name);

for ( i = 0; i < students.length; i++) {
    var roll        = students[i].roll;
    var name        = students[i].name;
    var depertment  = students[i].depertment;
    var shift       = students[i].shift;
    var group       = students[i].group;

    console.log( "Student name is: ", name );
    console.log( "Roll number is: ", roll );
    console.log( "Depertment: ", depertment );
    console.log( "Shift: ", shift );
    console.log( "Group: ", group, "\n" );
}