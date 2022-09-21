class PersonalInfo {
    name;
    email;
    address;
    constructor(name, email, address) {
        this.name = name;
        this.email = email;
        this.address = address;
    }

    feedback() {
        const message = `Name: ${this.name}, Email Address: ${this.email}, Address: ${this.address} Was present on the seminar.`;
        console.log(message);
    }
}

class StudentWork extends PersonalInfo {
    constructor(name, email, address) {
        super(name, email, address);
    }

    
}

class TeacherWork extends PersonalInfo {
    constructor(name, email, address) {
        super(name, email, address);
    }

    classPresent() {
        console.log(`${this.name} was present into the class on time.`);
    }
}


const studentOneObj = new StudentWork("Azhar Anowar", "azharanowar@gmail.com", "Dhaka, Bangladesh");
studentOneObj.feedback();

const studentTwoObj = new StudentWork("Fozle Arafat", "fozlearafat@gmail.com", "Feni, Bangladesh");
studentTwoObj.feedback();


const teacherOneObj = new TeacherWork("Ali Hosen", "alihosen@gmail.com", "Satkhira, Bangladesh");
teacherOneObj.classPresent();
teacherOneObj.feedback();
