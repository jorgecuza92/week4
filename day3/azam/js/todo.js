


const taskNameTextBox = document.getElementById("taskNameTextBox")
const btnAddTask = document.getElementById("btnAddTask")

// form 
const taskForm = document.getElementById("taskForm")

taskForm.addEventListener("submit", function(e) {
    console.log(e)
    e.preventDefault() // preventing the form from submitting 
})

btnAddTask.addEventListener("click", function() {

    const taskName = taskNameTextBox.value 

    // save the task 

    // clear the textbox 

    taskNameTextBox.value = ""

})

