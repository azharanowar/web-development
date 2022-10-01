// const obj1 = { a: 20, b: 30, c: 50 };
// const obj2 = { a: 20, b: 30, c: 50 };

// This two object are look same but there reference are different. So that's why javascript treat this two obj are different.
/* 
if (obj1 === obj2) {
    console.log("Same!!!");
} else {
    console.log("Different!!!");
}
*/




// Let's see few way to compare two objects.


// Way-1 (Not a standard way, we will not use that):

// It's works fine when object order is same: 
// const obj1 = { a: 20, b: 30, c: 50 };
// const obj2 = { a: 20, b: 30, c: 50 };

// But what if there value is same but order are not same: 
const obj1 = { a: 20, b: 30, c: 50 };
const obj2 = { a: 20, c: 50, b: 30 };


const objString1 = JSON.stringify(obj1);
const objString2 = JSON.stringify(obj2);

// if (objString1 === objString2) {
//     console.log("Same!!!");
// } else {
//     console.log("Different!!!");
// }



// That's why we will use another way to compare two object:

const compareTwoObj = (obj1, obj2) => {
    if ( obj1.length === obj2.length ) {
        for (const objKey in obj1) {
            if (obj1[objKey] !== obj2[objKey]) {
                return "Different!!!";
            }
        }
        return "Same!!!";
    } else {
        return "Different!!!";
    }
}

const objOne = { a: 20, b: 30, c: 50 };
const objTwo = { a: 20, c: 50, b: 30 };

const result = compareTwoObj(objOne, objTwo);
console.log(result)
