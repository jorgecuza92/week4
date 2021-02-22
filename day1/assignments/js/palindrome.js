
// function palindrome(str) {
//   return str == str.split("").reverse().join("") ? true : false;
// }
// alert(palindrome('hi'))
// console.log(palindrome('noon'))


function isPalindrome(string) {
  if(string == string.split("").reverse().join("")) {
    return true
  } else {
      return false
  }
}

console.log(isPalindrome("fart"))


function isPalindrome(word) {
  if(word == word.split("").reverse().join("")) {
    return true
  } else {
    return console.log(word + " is not a palindrome")
  }
}

console.log(isPalindrome('noon'))