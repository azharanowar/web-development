// অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। 
// প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।

const numbers = [3, 4, 2, 3, 5, 8, 2, 1];
const multipliedNumber = numbers.map(number => number * 5);
console.log(multipliedNumber);

