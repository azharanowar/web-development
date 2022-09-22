function loadData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
}


const loadUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => displayUsers(data))
}

const displayUsers = users => {
    const userNameUl = document.getElementById("usersName");
    users.forEach(user => {
        const newUserLiTag = document.createElement('li');
        newUserLiTag.innerText = user.name;
        userNameUl.appendChild(newUserLiTag);
    })
}


const loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => displayPosts(data))
}

const displayPosts = posts => {
    posts.forEach(post => {
        const newLiTag = document.createElement('li');
        newLiTag.innerText = post.title;
        document.getElementById("postsTitle").appendChild(newLiTag);
    });
}
