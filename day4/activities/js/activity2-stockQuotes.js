const displayStockNameAndPrice = document.getElementById("displayStockNameAndPrice")
const userTextBox = document.getElementById("userTextBox")
const btnShowQuotes = document.getElementById("btnShowQuotes")

btnShowQuotes.addEventListener("click", function() {
  let symbol = userTextBox.value
  let quote = getStockQuote(symbol)
  console.log(quote)
  let intervalId = window.setInterval(() =>{
    getStockQuote(symbol)
    displayStockNameAndPrice.innerHTML = quote.name + " " + quote.price
  }, 2000)
})

