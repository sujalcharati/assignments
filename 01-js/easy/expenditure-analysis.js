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

function calculateTotalSpentByCategory(transactions) {
  let result = []
  transactions.forEach((transaction) => {
    let index = result.findIndex((item) => item.category === transaction.category)
    if (index === -1) {
      result.push({ category: transaction.category, totalSpent: transaction.price })
    } else {
      result[index].totalSpent += transaction.price
    }
  })
  return result;
  // let result = []
  // for (let transaction = 0;transaction<transactions.length;transaction++){
  //   let index = -1;
  //   for(let item = 0;item<result.length;item++){
  //     if(result[item].category === transactions[transaction].category){
  //       index = item;
  //       break;
  //     }
  //   }
  //   if(index === -1){
  //     result.push({category:transactions[transaction].category,totalspent:transactions[transaction].price})
  //   }else{
  //     result[index].totalspent+= transactions[transaction].price;
  //   }
  // }
  // return result;
  
}
  


 
module.exports = calculateTotalSpentByCategory;
   
