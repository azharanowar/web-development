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

const displayUsers = data => {
    const usersName = data.map(user => user.name);
    console.log(usersName);
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
