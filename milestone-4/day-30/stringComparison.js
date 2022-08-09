// Valid Username Check Program

const userName = "azharAnowar";
function userNameValidCheck( providedUserName ) {
    userNameLower = userName.toLowerCase();
    let providedUserNameLower = providedUserName.toLowerCase();
    
    let result;

    if ( userNameLower !== providedUserNameLower ) {
        result = "Username didn't exist!";
    } else {
        result = "Username is valid!"
    }

    return result;
}


const result1 = userNameValidCheck( "azharAnowar" );
console.log(result1);
const result2 = userNameValidCheck( "anowarazhar" );
console.log(result2);
const result3 = userNameValidCheck( "AzharAnowar" );
console.log(result3);