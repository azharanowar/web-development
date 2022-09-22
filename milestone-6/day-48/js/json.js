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


const userStringifiedToObject = JSON.parse(userStringified);    // Convert JSON String to JavaScript Object.
console.log(userStringifiedToObject);


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




console.log("\n================\n");
const shopInfo = {
    name: "Anowar Store",
    ownerName: "Azhar Anowar" ,
    address: {
        street: "Mizan Road, Mizan Para",
        city: "Feni",
        postNumber: 3900,
        country: "Bangladesh"
    },
    productsList: ["Mobile", "Laptop", "Charger", "Headphone", "Watch"],
    monthlyRevenue: 50000,
    employee: 6,
    isOpen: true
};

console.log(shopInfo);


const shopInfoJSON = JSON.stringify(shopInfo);
console.log(shopInfoJSON);


const shopInfoObj = JSON.parse(shopInfoJSON);
console.log(shopInfoObj);