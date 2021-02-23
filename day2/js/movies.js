// THE ULTIMATE PARENT IS this 
console.log(this) // window object



let movieNameTextBox = document.getElementById("movieNameTextBox")
let moviePosterTextBox = document.getElementById("moviePosterTextBox")

let btnSubmit = document.getElementById("btnSubmit")
let moviesUL = document.getElementById("moviesUL")


btnSubmit.addEventListener("click", function() {
  console.log(this) //btnSubmit

  let movieName = movieNameTextBox.value 
  let moviePoster = moviePosterTextBox.value
  
  // create HTMLelement li
  let liItem = document.createElement("li")
  liItem.innerHTML = movieName
  
  //create IMG Tag
  let imgPoster = document.createElement("img")
  imgPoster.setAttribute("src", moviePoster)
  
  // create remove button
  let removeButton = document.createElement("button")
  removeButton.innerHTML = "remove"
  removeButton.addEventListener("click", function(){
   
    // Find parent of remove button
    console.log(this)
    console.log(this.parentElement) // Li

    // from moviesUL remove Li item
    moviesUL.removeChild(this.parentElement)
  })
  //adding image to LI
  liItem.appendChild(imgPoster)
  
  // adding remove button to LI
  liItem.appendChild(removeButton)
  
  // add LI to UL
  moviesUL.appendChild(liItem)

})