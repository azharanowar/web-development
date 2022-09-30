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
};

console.log(student);

// console.log(student.roll);

// We can't use for of in a object. Because for of isn't iterable like array is.
// for(const item of student) {
//     console.log(item);
// }

// Access object value by for in
for (const itemKey in student) {
    // console.log(itemKey);
    console.log(student[itemKey]);
}