

const timerTextBox = document.getElementById("timerTextBox")
const btnStartTimer = document.getElementById("btnStartTimer")
const timerHeading = document.getElementById("timerHeading")

btnStartTimer.addEventListener("click", () => {

    let counter = timerTextBox.value 

    const intervalId = window.setInterval(() => {

        timerHeading.innerHTML = counter 
        counter--
        if(counter < 0) {
            // stops the interval 
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

    },1000)

}


function updateUI(ctr) {
    timerHeading.innerHTML = ctr 
} 

//startTimer(updateUI) 

/*
startTimer(function(ctr) {
    timerHeading.innerHTML = ctr 
}) */

startTimer(function(ctr) {

    // update ui 
    updateUI(ctr)

    if(ctr == 5) {
        document.body.style.backgroundColor = "blue"
    }
})

//timerHeading.innerHTML = value 


function getMovies(onMoviesLoaded) {

    fetch("http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa")
    .then(response => response.json())
    .then(result => {
        //console.log(result.Search)
        let movies = result.Search 
        onMoviesLoaded(movies)
    })

}

getMovies(function(movies) {
    console.log(movies)
}) 


