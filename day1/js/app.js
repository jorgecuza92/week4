console.log('Hello World');

let age = 45
// var name = "John" (don't worry about this method)
// value of const can not be changed once declared
const pi = 3.142

// pi = 5 // this will cause an error

isPublished = true; // camelCasing

// LOOPS //
//for index in range(0,11):
   // print(index)
for(let index = 0; index <= 10; index++) {
  console.log(index)
}

// index = index + 1 // index++

sayHello() // function hoisting 

function sayHello() {
  console.log('Say Hello Brah!')
}

sayHello();

function displayName(name) {
  console.log(name)
}

displayName('Jorge Cuza')


function add(firstNumber, secondNumber) {
  console.log(firstNumber, secondNumber)
  return firstNumber + secondNumber
}

 let result = add(3,4)
 console.log(result)

 // ARRAYS //
 let tasks = []

 tasks.push("Wash Car")
 tasks.push("Feed the dog")
 tasks.push("Feed the mutt")
 tasks.push("Feed the horses")
 tasks.push("Trim Leaves")
 tasks.push("Farting")

 console.log(tasks)

 // DELETING ITEM FROM ARRAY //
 let deletedItem = tasks.pop() // removes last item
 
 console.log(tasks)


 // DELETING ITEM BASED ON INDEX //
 delete tasks[1]
 
 console.log(tasks)

 // DELETING RANGE ITEMS
 tasks.splice(0, 3) // tasks.splice(startingIndex, numberOfItemsToRemove)

 console.log(tasks)


 // REMOVE ALL ITEMS
 tasks.splice(0)

 console.log(tasks)

// WHILE LOOP //
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

if (version == 1 && os == "windows") { //  && AND STATEMENT

} else if(version == 2 || os == "windows") { // || OR STATEMENT

} else {
  
}