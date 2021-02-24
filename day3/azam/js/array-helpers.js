
// ARRAY HELPERS 
// Array Helper functions ONLY work on an array 

const numbers = [1,2,3,4,5,6]
let doubleNumbers = [] 

for(let index = 0; index < numbers.length; index++) {
    let number = numbers[index]
    doubleNumbers.push(number * 2)
}

console.log(numbers)
console.log(doubleNumbers)

// MAP - Helpers to transform an array into something else 

/*
function performDouble(no) {

}  */

//numbers.map(performDouble) 

// map function returns a BRAND NEW ARRAY 
// map function is also known as transformation function 
let result = numbers.map(function(no) {
    return no * 2
})

console.log(result)

// FILTER 

let someNumbers = [3,5,6,7,8,-1,4,5,-6]

let positiveNumbers = someNumbers.filter(function(no) {
    return no > 0 
})

console.log("POSITIVE NUMBERS")
console.log(positiveNumbers)

const dishes = [
    {name: "Meat Balls", course: "Entree"},
    {name: "Pudding", course: "Dessert"}, 
    {name: "Fish Fillet", course: "Entree"}, 
    {name: "Ice cream", course: "Dessert"}
]

let entrees = dishes.filter(function(dish) {
    return dish.course == "Entree"
})

console.log(entrees)
