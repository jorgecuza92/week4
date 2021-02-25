
// let/var/const 

const pi = 3.142 

//pi = 4 // error 

// var vs let 
function doSomething() {

    let counter = 10 

    for(let index = 0; index <= 10; index++) {
        let counter = 20 
    }

    console.log(counter)
}

doSomething() 

const btnSubmit = document.getElementById("btnSubmit")

/*
// The value of this is the button object 
btnSubmit.addEventListener("click", function() {
    console.log(this) // button
}) */ 


// The value of this will be window object 
btnSubmit.addEventListener("click", (e) => {
    console.log(e)
    //console.log(e.target) // e.target is the element that caused the event 
}) 