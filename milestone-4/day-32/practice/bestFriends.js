function bestFrieds( friendsName ) {
    let biggestName = friendsName[0];
    for ( let friendName of friendsName ) {
        if ( friendName.length > biggestName.length ) {
            biggestName = friendName;
        }
    }

    return biggestName;
}

const biggestFriendName = bestFrieds( [ "Azhar Anowar", "Shorip Rahman", "Ariful Islam Nihad", "Mohammad Ali", "Fozle Arafat Chowdhury", "Asiful Islam Refat" ] );

console.log( biggestFriendName );