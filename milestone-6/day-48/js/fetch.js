/* 
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
*/

/* 
const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
  .then(response => response.json())
  .then(json => console.log(json))
*/


function loadData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
}

loadData('https://jsonplaceholder.typicode.com/todos/1');





/* 
// Load all posts from an API/URL:
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json));

*/