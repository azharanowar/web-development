// [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা 
// বের করে নিয়ে আসার জন্য filter ইউজ করো

const numbers = [20, 31, 30, 10, 33, 12, 14, 7, 30, 3, 5, 9, 6];

const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers);