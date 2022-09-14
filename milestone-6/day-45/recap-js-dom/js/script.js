document.getElementById("addNewFriendBtn").addEventListener('click', function() {
    const newFriend = document.createElement("div");
    newFriend.setAttribute("class", "friend");
    newFriend.innerHTML = `
    <h2>New Friend Addeded</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, ea. Facere consectetur quae praesentium eum itaque.
    </p>`;
    document.getElementById("listOfFriends").appendChild(newFriend)
    
});

document.getElementById("appyBackgroundBtn").addEventListener('click', function() {
    const friends = document.getElementsByClassName("friend");
    for ( const friend of friends ) {
        friend.style.backgroundColor = "coral";
    }
});

document.getElementById("alignCenterBtn").addEventListener('click', function() {
    document.getElementById("listOfFriends").style.textAlign = "center";
});