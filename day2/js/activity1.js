

// let fullNameTextBox = document.getElementById("fullNameTextBox")
// console.log(fullNameTextBox)


// let fullNameHeading = document.getElementById("fullNameHeading")

// let btnSubmit = document.getElementById("btnSubmit")
// btnSubmit.addEventListener("click", function() {
//   // console.log("Btn Submit has been clicked") // just to see if things are not erroring 
//   // console.log(fullNameTextBox.value)
//   fullNameHeading.innerHTML = fullNameTextBox.value 
// })



let firstNameTextBox = document.getElementById("firstNameTextBox")
let lastNameTextBox = document.getElementById("lastNameTextBox")

let fullNameHeading = document.getElementById("fullNameHeading")

let btnSubmit = document.getElementById("btnSubmit")
btnSubmit.addEventListener("click", function() {
  
  let firstName = firstNameTextBox.value
  let lastName = lastNameTextBox.value

  fullNameHeading.innerHTML = firstName+ " " + lastName

})

// get elements by tag name
// pay attention to plural name of function
// let buttons = document.getElementsByTagName("button")
//console.log(buttons)