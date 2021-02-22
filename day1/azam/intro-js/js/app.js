
console.log("Hello World!")

let age = 45 
var name = "John"
// value of const cannot be changed once it has been declared 
const pi = 3.142 

// pi = 5 // this will cause an error

isPublished = true // camel casing 

//is_published = true // not JS convention 

// LOOPS 

// Python 
//for index in range(0,11): 
//    print(index)
friends = ["Alex", "Mary"] 

for(let index = 0; index <= 10; index++) {
    console.log(index)
}

//index++ = index + 1 
//index = index + 1 // index++ 

sayHello() // function hoisting 

function sayHello() {
    console.log("Say Hello!")
}

sayHello() 

function displayName(name) {
    console.log(name)
}

displayName("John Doe")

function add(firstNumber, secondNumber) {
    console.log(firstNumber, secondNumber)
    return firstNumber + secondNumber 
}

let result = add(3,4)
console.log(result)

// ARRAYS 

let tasks = [] 

tasks.push("Wash car")
tasks.push("Feed dog")
tasks.push("Mow lawn")
tasks.push("Trim Leaves")
tasks.push("Mail envelope")
tasks.push("Take a walk")

console.log(tasks)

// deleting item from an array 
let deletedItem = tasks.pop() // remove the last item 
console.log(tasks)

// deleting item based on an index 
delete tasks[1] // delete item on index 1 

console.log(tasks)

// deleting range of items 
tasks.splice(0, 3) // tasks.splice(starting index, number of items to remove)

console.log(tasks)

tasks.splice(0) // removes everything from an array 
console.log(tasks)

// WHILE LOOP 

let counter = 0 
while(counter <= 10) {
    
    if(counter % 2 == 0) {
        break 
    }
}

// CONDITIONS 
let version = 3 
let os = "windows"

if(version == 3) {

} else if(version == 2) {

} else {

}

if(version == 1 && os == "windows") { // && AND 

} else if(version == 2 || os == "windows") { // || OR 

} else {
    
}


