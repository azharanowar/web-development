document.getElementById("addNewFriend").addEventListener('click', function() {
    alert("hello")
});

document.getElementById("appyBackground").addEventListener('click', function() {
    const friends = document.getElementsByClassName("friends");
    console.log(friends)
    for ( const friend of friends ) {
        friend.style.backgroundColor = "coral";
    }
});