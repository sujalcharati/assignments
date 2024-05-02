/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
// 
// }
const obj1 = {
  category: 'Food',
  totalSpent: 10

}
let transaction = [obj1]

function calculateTotalSpentByCategory(p){

let pt= p;

  return pt;
}

let a = calculateTotalSpentByCategory([{category:"food",totalSpent:10},{category:"clothes",totalSpent:1000}]);
console.log(a);

module.exports = calculateTotalSpentByCategory;
   
