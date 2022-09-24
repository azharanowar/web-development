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
    const allPosts = document.getElementById("allPosts");
    posts.forEach(post => {
        const newPostDiv = document.createElement('div');
        newPostDiv.setAttribute('class', 'post');
        newPostDiv.innerHTML = `<h3>Title: ${post.title}</h3><p>Description: ${post.body}</p>`
        allPosts.appendChild(newPostDiv);
    });
}



const createNewPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
      .then((response) => response.json())
      .then((json) => console.log(json));
}