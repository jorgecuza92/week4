
let btnRed = document.getElementById('btnRed')
let btnBlue = document.getElementById('btnBlue')

btnRed.addEventListener('click', function() {
    //document.body.style.background = "red"
    document.body.className = "redColor"
})

btnBlue.addEventListener('click', function() {
    document.body.className = "blueColor"
    //document.body.style.background = "blue"
})
