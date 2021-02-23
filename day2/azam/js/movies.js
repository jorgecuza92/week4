
console.log(this) // window object 

// window.document 

let movieNameTextBox = document.getElementById("movieNameTextBox")
let moviePosterTextBox = document.getElementById("moviePosterTextBox")

let btnSubmit = document.getElementById("btnSubmit")
let moviesUL = document.getElementById("moviesUL")

btnSubmit.addEventListener("click", function() {

    console.log(this) // btnSubmit 

    let movieName = movieNameTextBox.value 
    let moviePoster = moviePosterTextBox.value 

    // create HTMLElement li 
    let liItem = document.createElement("li")
    // <li>Spiderman</li>
    liItem.innerHTML = movieName 

    // create IMG tag 
    let imgPoster = document.createElement("img")
    imgPoster.setAttribute("src", moviePoster)
    imgPoster.className = "poster"
    
    // create remove button 
    let removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    removeButton.addEventListener("click", function() {
        // find the parent of remove Button 
        console.log(this)
        console.log(this.parentElement) // LI 

        // From moviesUL remove LI item
        moviesUL.removeChild(this.parentElement)

    })

    // adding image to LI 
    liItem.appendChild(imgPoster)
    // adding remove button to LI 
    liItem.appendChild(removeButton)

    // add LI to UL 
    moviesUL.appendChild(liItem)

})


/*
 <img src="https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"></img>
*/