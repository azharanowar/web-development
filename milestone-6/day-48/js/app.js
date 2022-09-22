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
