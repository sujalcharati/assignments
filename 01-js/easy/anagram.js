/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1="sujal";
  str2="jalus";
  if(str1==str2){
    return false;
  }
  else{
    return true;
  }
}

module.exports = isAnagram;
console
