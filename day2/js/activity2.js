// let redButton = document.getElementById("redButton")
// let blueButton = document.getElementById("blueButton")

// redButton.addEventListener("click", backgroundColor('red') {
//   document.body.style.background = red;
// })


let btnRed = document.getElementById('btnRed')
let btnBlue = document.getElementById('btnBlue')

btnRed.addEventListener('click', function() {
  document.body.style.background = 'red'
  document.body.className = 'redColor'

})
btnBlue.addEventListener('click', function() {
  document.body.style.background = 'blue'

})