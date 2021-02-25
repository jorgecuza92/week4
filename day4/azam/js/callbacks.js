

const intervalHeading = document.getElementById("intervalHeading")

// setInterval is used to call a function repeatedly after a designated number of milliseconds 

let counter = 0 

let intervalId = window.setInterval(function() {
    counter++
    console.log(counter)

    intervalHeading.innerHTML = `${counter}`

    if(counter == 10) {
        // stop the interval 
        window.clearInterval(intervalId)
    }

}, 1000) // 1000 milliseconds = 1 second 

console.log(intervalId)

/*
window.setInterval(incrementCounter, 2000)

function incrementCounter() {
    console.log("increment Counter")
}  */

//incrementCounter() // NOT ALLOWED 

// setTimeout is fired once! 
//window.setTimeout(incrementCounter, 1000)