const products = [
    {name: "iPhone 14 Pro", price: 180000},
    {name: "Lava Iris 505", price: 5000},
    {name: "Samsung Galaxy Note 9", price: 85000},
];

const matchedProduct = products.find(product => product.price  === 5000);
console.log(matchedProduct);