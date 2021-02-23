
let firstNameTextBox = document.getElementById("firstNameTextBox")
let lastNameTextBox = document.getElementById("lastNameTextBox")

// H1 
let fullNameHeading = document.getElementById("fullNameHeading")


let btnSubmit = document.getElementById("btnSubmit")
btnSubmit.addEventListener("click", function() {

    let firstName = firstNameTextBox.value 
    let lastName = lastNameTextBox.value     

    fullNameHeading.innerHTML = firstName + " " + lastName 

})