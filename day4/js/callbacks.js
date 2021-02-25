// setInterval is used to call function repeatedly after a designated number of time(mSec)
// window.setInterval(incrementCounter, 1000) // setInterval(reference Function, time milliseconds)

const intervalHeading = document.getElementById("intervalHeading")

let counter = 0

// Callback function
let intervalId = window.setInterval(function() {
  counter++
  console.log(counter)
  intervalHeading.innerHTML = `${counter}`
  if(counter == 10) {
    window.clearInterval(intervalId)
  }
}, 1000)

console.log(intervalId)



// function incrementCounter() {
//   console.log('increment Counter')
// }

// incrementCounter() // NOT ALLOWED; set as Anonymous function to not allow function to be used anywhere

// // setTimeout is fired once!
// window.setTimeout(incrementCounter, 1000)