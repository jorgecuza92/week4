

// function btnSubmitClick() {
//   console.log("Btn Submit has been clicked.") // do not need this if we use anonymous function
// }

let movieNameTextBox = document.getElementById("movieNameTextBox") // always assign to variable because it will simplify rendering
console.log(movieNameTextBox)

let movieNameHeading = document.getElementById("movieNameHeading")

let btnSubmit = document.getElementById("btnSubmit") // access to element ID
btnSubmit.addEventListener("click", function() {    // anonymous function()
  console.log("Btn Submit has been clicked")
  console.log(movieNameTextBox.value)
  movieNameHeading.innerHTML = movieNameTextBox.value
})
btnSubmit.addEventListener("mouvseover", function() {    // mouseover, hover over the button to see an animation
  console.log("Btn Submit has been clicked")
})


console.log(btnSubmit)
// get elements by tag name.
// pay attention to the plural name of the function
// let buttons = document.getElementsByTagName("button")
// console.log(buttons)

// IMPORTANT //
// WHEN PUBLISHING APP, MAKE SURE TO REMOVE ALL CONSOLE.LOGS (THESE ARE FOR THE DEVELOPER)