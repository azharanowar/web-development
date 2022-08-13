let products = [
    { id: 1, name: "Xiaomi Phone Note 9 Pro", price: 22000 },
    { id: 2, name: "Dell Laptop Inspiron 3155", price: 75000 },
    { id: 3, name: "Samsung Note 7 Phone", price: 76000 },
    { id: 4, name: "iPhone 12 Pro", price: 110000 },
    { id: 5, name: "Macbook Pro M1 Chip Laptop", price: 275000 },
    { id: 6, name: "Nothing Phone 1", price: 35000 },
    { id: 7, name: "HP Elitebook 840 G2 Laptop", price: 65000 },
    { id: 8, name: "HP Elitebook 840 G3 Laptop", price: 70000 },
    { id: 8, name: "Oneplus 5 Phone", price: 45000 },
];

const search = "laptop";
let  matchedProducts = [];
for ( let product of products ) {
    if ( product.name.toLowerCase().includes( search.toLowerCase() ) ) {
        matchedProducts.push(product);
    }
}

console.log( matchedProducts );