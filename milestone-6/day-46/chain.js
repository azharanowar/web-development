const studentsInfo = [
    {
        name: "Azhar Anowar",
        roll: 181040,
        registration: 1500980692,
        depertment: "Computer Science and Technology",
        shift: "2nd",
        group: "B",
        address: {
            street: {
                firstLine: "Kalim Uddin Hazi Bari, MohammadPur",
                secondLine: "Senbag, Noakhali."
            },
            postOffice: 3861,
            district: "Noakhali",
            country: "Bangladesh"
        }
    },
    {
        name: "Fozle Arafat",
        roll: 169756,
        registration: 1500000000,
        depertment: "Computer Science and Technology",
        shift: "2nd",
        group: "A"
    },
    {
        name: "Ariful Islam Nihad",
        roll: 169748,
        registration: 1500980000,
        depertment: "Computer Science and Technology",
        shift: "2nd",
        group: "A"
    }
];


// Array 0 index has value of address so here everything will work fine.
console.log(studentsInfo[0].name);
console.log(studentsInfo[0].roll);
console.log(studentsInfo[0].registration);
console.log(studentsInfo[0].depertment);
console.log(studentsInfo[0].shift);
console.log(studentsInfo[0].group);
console.log(studentsInfo[0].address.street.firstLine);
console.log(studentsInfo[0].address.street.secondLine);
console.log(studentsInfo[0].address.postOffice);
console.log(studentsInfo[0].address.district);
console.log(studentsInfo[0].address.country);



// But array 1/2 index has no key/attribute of address. So we will get TypeError when we will try to read a attribute that accually not exist:
console.log(studentsInfo[1].name);
console.log(studentsInfo[1].roll);
console.log(studentsInfo[1].registration);
console.log(studentsInfo[1].depertment);
console.log(studentsInfo[1].shift);
console.log(studentsInfo[1].group);
console.log(studentsInfo[1].address?.street.firstLine);
console.log(studentsInfo[1].address?.street.secondLine);
console.log(studentsInfo[1].address?.postOffice);
console.log(studentsInfo[1].address?.district);
console.log(studentsInfo[1].address?.country);