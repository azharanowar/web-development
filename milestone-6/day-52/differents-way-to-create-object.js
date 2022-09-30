// Create object using object literals: 
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

// console.log(student);
student.exam();

// Create object using new keyword with Object constructor:
const institute = new Object;
console.log(institute);

institute.name = "Feni Polytechnic Institute";
institute.location = "Feni Pourshava, Feni";
institute.code = "00000";

console.log(institute);


// By Object.create() method:

const person = Object.create(student);  // Here we will get all properties and methods from student.
console.log(person);
person.fathersName = "Jaynal Abedin";
console.log(person.fathersName);
console.log(person.name);   // Here with person object we don't have any property call name but it still getting azhar anowar. That's mean we made connection with person object to student object.