// Keys, values, entries, delete, seal, freeze

const student = {
    name: "Azhar Anowar",
    roll: 181040,
    reg: 1500980692,
    semester: '8th',
    shift: '2nd',
    group: 'B',
    subjectsList: ["Mathematics", "Physics", "Chemistry", "English", "Microprocessor", "Programming", "Data Structure", "Database"],
    exam: function() {
        console.log(this.name + ' is sitting the final year exam of diploma ' + this.semester + ' semester.');
    }
}


// Get a array with all keys from a object.
const studentKeys = Object.keys(student);
console.log(studentKeys);
for (const studentKey of studentKeys) {
    console.log(student[studentKey]);
}


// Get a array of all values from a object
const studentValues = Object.values(student);
console.log(studentValues);
for (const studentValue of studentValues) {
    console.log(studentValue);
}


// Get a two dimensional array with keys and value from a object
const studentKeysValues = Object.entries(student);
console.log(studentKeysValues);

for (const studentKeyValue of studentKeysValues) {
    for (const item of studentKeyValue) {
        console.log(item)
    }
}