// Greets user when you click on the header button
function greetUser() {
    alert("Hello, user!");
}


// Adds up the total price of the items purchased
const prices = [19.99, 29.99, 49.99];

function getTotalPrice() {
    return prices.reduce((total, price) => total + price, 0);
  }
  console.log(`Total price: $${getTotalPrice()}`);


// Applies a 20% discount to an item
const itemprice = 100;
  
function salePrice() {
    salePrice = itemprice * 0.8;
    return salePrice
}
console.log(`Sale price: $${salePrice()}`);



// Stores feedback and messages left on the contact page
let comment = [];

function addComment(message) {
  comment.push(message);
  return comment;
}
console.log(addComment("Great customer service!"));
