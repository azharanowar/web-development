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
    name;
    email;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    classPresentation(date) {
        const message = `${this.name} was present in the class of ${date}, his email address is ${this.email}`;
        console.log(message);
    }

    classAssignment(assignmentNumber) {
        const message = `${this.name} has successfully submitted his assignment number - ${assignmentNumber}, his email address is ${this.email}`;
        console.log(message);
    }
}


const collageWorkObj = new CollageWork("Azhar Anowar", "azharanowar@gmail.com");
collageWorkObj.classPresentation("21-09-2022");
collageWorkObj.classAssignment("05");