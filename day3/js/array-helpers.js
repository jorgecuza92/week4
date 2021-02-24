// ARRAY HELPERS
// Array Helper functions ONLY work on an array

const numbers = [1, 2, 3, 4, 5, 6]
let doubleNumbers = []


for(let index = 0; index < numbers.length; index++) {
  let number = numbers[index]
  doubleNumbers.push(number * 2)
}

console.log(numbers)
console.log(doubleNumbers)


// MAP - Helpers to transform an array into something else
// map function returns a BRAND NEW ARRAY
// map function also known as transformation function
let result = numbers.map(function(no) {
  return no * 2
})

console.log(result)


// FILTER

let someNumbers = [3, 2, 35, 6, 1, 2, 65, -2, -2, -1]

let positiveNumbers = someNumbers.filter(function(no) {
  return no > 0
})

console.log(positiveNumbers)


const dishes = [
  {name: "meatballs", course: "entree"},
  {name: "fish", course: "entree"},
  {name: "icecream", course: "dessert"}
]

let entrees = dishes.filter(function(dish) {
  return dish.course == "entree"
})

console.log(entrees)