const dishesUL = document.getElementById("dishesUL")

const courseSelect = document.getElementById("courseSelect")

courseSelect.addEventListener("change", function() {
    console.log("change")
    console.log(this.value)
    const selectedCourse = this.value

    if (selectedCourse == "All") {
        displayDishes(dishes)
    } else {
        const filteredDishes = dishes.filter(function(dish) {
            return dish.course == selectedCourse
        })

        displayDishes(filteredDishes)
    }

})

function displayDishes(dishesToDisplay) {

    dishesUL.innerHTML = "" // clear out all dishes 

    const dishItems = dishesToDisplay.map(function(dish) {
        return `<li>
                   <label>${dish.title}</label>
                   <p>${dish.description}</p>
                   <img class="dish-image" src="${dish.imageURL}" />
                   <p>$${dish.price}</p>
                </li>`
    })

    dishesUL.innerHTML = dishItems.join("")
}

displayDishes(dishes)