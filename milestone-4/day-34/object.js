let studentInfo = {
    name: "Azhar Anowar",
    roll: 181040,
    gpa: 3.80,
    depertment: "Computer",
    shift: "2nd",
    group: "B",
    mobile: {
        name: "Note 9 Pro",
        brand: "Xiaomi",
        price: 22000
    },
    friends: [ "Arafat", "Forid", "Shorip", "Nihad", "Asif", "Ali" ],
    project: azharAnowarProject(),

}

function azharAnowarProject() {
    return "Hello";
}

console.log( studentInfo );
console.log( Object.keys( studentInfo ) );
console.log( Object.values( studentInfo ) );

