

function isVowel(letter) {
  letter = letter.toLowerCase()
  if(letter == "a" || letter =="e" || letter == "i" || letter  == "o"  || letter == "u") {
    return true
  } else {
    return false
  }
}


console.log(isVowel("a"))
console.log(isVowel("e"))
console.log(isVowel("I"))
console.log(isVowel("u"))
