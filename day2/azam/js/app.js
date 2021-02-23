
/*
function btnSubmitClick() {
    console.log("Btn Submit has been clicked")
}*/

let movieNameTextBox = document.getElementById("movieNameTextBox")
console.log(movieNameTextBox)

let movieNameHeading = document.getElementById("movieNameHeading")

let btnSubmit = document.getElementById("btnSubmit")
btnSubmit.addEventListener("click",function() {

    // this will cause DOM to search again for the element by the id movieNameTextBox. 
    // This can take time depending on the complexity of your HTML structure 
    //console.log(document.getElementById("movieNameTextBox").value) 

    console.log(movieNameTextBox.value) 
    movieNameHeading.innerHTML = movieNameTextBox.value 
})

// inner HTML is any content between the open and closed tags of the html element 

console.log(btnSubmit)

// get elements by tag name. 
// pay attention to the plural name of the function 
//let buttons = document.getElementsByTagName("button")
//console.log(buttons)

// IMPORTANT 
// When publishing your app make sure to REMOVE all console.logs 