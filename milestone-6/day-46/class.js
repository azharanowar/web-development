// Syntactic Sugar

class Student {
    name = "Azhar Anowar";
    roll = 181040;
    registration = 1500980692;
    gpaCalculator() {
        return 95+86+90+79+89 / 5;
    }
}

const studentObj = new Student;
console.log(studentObj);
console.log(studentObj.name);
console.log(studentObj.roll);
console.log(studentObj.gpaCalculator());





class CollageWork {
    classPresentation(name, date) {
        const message = `${name} was present in the class of ${date}`;
        console.log(message);
    }

    classAssignment(name, assignmentNumber) {
        const message = `${name} has successfully submitted his assignment number - ${assignmentNumber}`;
        console.log(message);
    }
}


const collageWorkObj = new CollageWork;
collageWorkObj.classPresentation("Azhar Anowar", "21-09-2022");
collageWorkObj.classAssignment("Azhar Anowar", "05");