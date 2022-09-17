/* 
    Write an arrow function where it will do the following:
    a) It will take an array where the array elements will be the
    name of your friends
    b) Check if the length of each element is even, push elements
    with even length to a new array and return the result
    Print the result.
*/

const friends = ["Arafat", "Shorip", "Nihad", "Ali", "Forid", "Asif", "Shakhawat"];

const firendsNameEventOdd = (friends) => {
    const evenFriendsName = [];
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            evenFriendsName.push(friend);
        }
    }

    return evenFriendsName;
}

const evenFriendsName = firendsNameEventOdd(friends);
console.log("Even Name Friends: ", evenFriendsName);