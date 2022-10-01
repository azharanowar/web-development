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



// Delete a property or method from a object:

const person1 = {
    name: "Abu Bakar",
    email: "abubakar@gmail.com"
}

console.log(person1);
delete person1.email;   // Delete a object property by delete keyword.
console.log(person1);


const person2 = {
    name: "Mehedi Hasan",
    email: "mehedi@gmail.com",
    run: () => {
        console.log("This person can run so fast.");
    }
}

console.log(person2);
delete person2.run;     // Remove object method by delete keyword.
console.log(person2);




// seal, freeze practice:

const student2 = {
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

student2.name = "Fozle Arafat";
student2.roll = 169756;
delete student2.reg;

console.log(student2);

// Let's seal student2 and see what happens.
Object.seal(student2);

student2.name = "Ai Nihad";     // seal() method allow to update but can't delete.
student2.roll = 169748;
delete student2.shift;      // can't delete a property or method with seal().

console.log(student2);




// Let's see how freeze() works:
const student3 = {
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

student3.name = "Ai Nihad";
student3.roll = 169748;
delete student3.reg;

console.log(student3);

// Let's freeze student2 and see what happens.
Object.freeze(student3);

student3.name = "Shakhawat Sabbir";     // freeze() method not allow to update.
student3.roll = 169775;
delete student3.shift;      // freeze() method not allow to delete.

console.log(student3);