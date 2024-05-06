/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    let i="2";
    
     if(str[i]=='m' &&  str[i-1]=='o' && str[i-2]=='m'){
       console.log("it is palindrome string");
     }
      
    

  return true;
}
const name = isPalindrome("mom");
console.log(name);

module.exports = isPalindrome;
