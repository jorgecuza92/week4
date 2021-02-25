const intervalHeading = document.getElementById("intervalHeading")
let userTime = document.getElementById("userTime")
let btnStartTimer = document.getElementById("btnStartTimer")

btnStartTimer.addEventListener('click', () => {
  let counter = userTime.value
  const intervalId = window.setInterval(() => {
    intervalHeading.innerHTML = counter
    counter--
    if(counter < 0) {
      window.clearInterval(intervalId)
    }
  }, 1000)
})


function startTimer(onCounterUpdated) {
  console.log(onCounterUpdated)
  let counter = 10

  const intervalId = window.setInterval(() => {
    counter--
    if(counter <= 0) {
      window.clearInterval(intervalId)
    }
    onCounterUpdated(counter)

  }, 1000)

}
// function updateUI(ctr) {

// }
startTimer(function(ctr) {
  intervalHeading.innerHTML = ctr
})
// intervalHeading.innerHTML = value