const azharAnowar = {
    name: "Azhar Anowar",
    roll: 181040,
    reg: 1500980692,
    semester: '8th',
    shift: '2nd',
    group: 'B',
    subjectsList: ["Mathematics", "Physics", "Chemistry", "English", "Microprocessor", "Programming", "Data Structure", "Database"],
    exam: function(age) {
        console.log(`${this.name} is ${age} years old is sitting diploma in engineering ${this.semester} semester final year exam.`);
    }
};

azharAnowar.exam(22);

const fozleArafat = {
    name: "Fozle Arafat",
    roll: 169756,
    reg: 1500980000,
    semester: '8th',
    shift: '2nd',
    group: 'A'
};


azharAnowar.exam.call(fozleArafat, 21);

azharAnowar.exam.apply(fozleArafat, [21]);

const studentExam = azharAnowar.exam.bind(fozleArafat);

studentExam(22)