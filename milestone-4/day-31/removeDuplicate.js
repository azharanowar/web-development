// Remove duplicate values from an array

function removeDuplicateValues( studentsName ) {
    let uniqueStudentsName = [];
    for ( let studentName of studentsName ) {
        if (!uniqueStudentsName.includes(studentName)) {
            uniqueStudentsName.push(studentName);
        }
    }

    return uniqueStudentsName;
}


const studentsName = [ "Ali", "Arafat", "Shorip", "Anowar", "Nihad", "Omar", "Arafat", "Said", "Shorip", "Anowar", "Shakhawat", "Shakhawat", "Omar", "Shakhawat", "Omar", "Omar", "Ali" ];
const uniqueStudentsName = removeDuplicateValues( studentsName );
console.log( uniqueStudentsName );









// function removeDuplicateValues( studentsName ) {
//     let count = 0;
//     for ( i = 0; i < studentsName.length; i++ ) {
//         for ( j = 0; j < i; j++ ) {
//             if ( studentsName[i] === studentsName[j] ) {
//                 studentsName[i] = undefined;
//                 [ studentsName[j], studentsName[j+1] ] = [ studentsName[j+1], studentsName[j] ];
//             }
//         }

//         if ( studentsName[i] == undefined ) {
//             count++;
//         }
//     }

//     console.log(studentsName.length);
//     console.log(count);
//     console.log(studentsName);

//     // studentsName.length -= count;
//     // return studentsName;
// }


// const studentsName = [ "Ali", "Arafat", "Shorip", "Anowar", "Nihad", "Omar", "Arafat", "Said", "Shorip", "Anowar", "Shakhawat", "Shakhawat", "Omar", "Shakhawat", "Omar", "Omar", "Ali" ];
// const uniqueStudentsName = removeDuplicateValues( studentsName );
// console.log( uniqueStudentsName );
