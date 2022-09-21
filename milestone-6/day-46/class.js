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