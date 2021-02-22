

function isVowel(letter) {

    letter = letter.toLowerCase() 

    if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
        return true 
    } 

    return false 
}

console.log(isVowel("a"))
console.log(isVowel("b"))
console.log(isVowel("c"))
console.log(isVowel("u"))
console.log(isVowel("A"))