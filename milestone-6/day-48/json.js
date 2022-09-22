// JSON - JavaScript Object Notation

// JSON is used to store or transmit data from a server to client application. 


const userInfo = {
    id: 1,
    name: "Azhar Anowar",
    username: "azharanowar",
    website: 'www.azharanowar.com',
};

console.log(userInfo);  // JavaScript Object Formate

const userStringified = JSON.stringify(userInfo);   // Convert JavaScript Object to JSON String.

console.log(userStringified);


/* 
JavaScript Object: 
{
  id: 1,
  name: 'Azhar Anowar',
  username: 'azharanowar',
  website: 'www.azharanowar.com'
}

JSON String: 
{"id":1,"name":"Azhar Anowar","username":"azharanowar","website":"www.azharanowar.com"}

*/

