const categories = [
    {id: 1, name: "Whatch", availableProducts: 20},
    {id: 2, name: "T-Shirt", availableProducts: 12},
    {id: 3, name: "Mobile", availableProducts: 16},
    {id: 3, name: "Laptop", availableProducts: 9},
];



const categoriesName = categories.map(category => category.name);
console.log(categoriesName);

const categoriesAvailableProducts = categories.map(category => category.availableProducts);
console.log(categoriesAvailableProducts);


