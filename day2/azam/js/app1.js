
let taskNameTextBox = document.getElementById("taskNameTextBox")
let addTaskButton = document.getElementById("addTaskButton")

let completedUL = document.getElementById("completedUL")
let pendingUL = document.getElementById("pendingUL")

addTaskButton.addEventListener("click", function() {

    let taskName = taskNameTextBox.value 

    let liItem = document.createElement("li")

    let taskCheckBox = document.createElement("input")
    taskCheckBox.setAttribute("type", "checkbox")
    taskCheckBox.addEventListener("change", function() {
        if(this.checked) {
            // add the task to the completed list 
            console.log(this.parentElement) 
            completedUL.appendChild(this.parentElement)
        }
    })

    let taskLabel = document.createElement("label")
    taskLabel.innerHTML = taskName

    let removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"

    liItem.appendChild(taskCheckBox)
    liItem.appendChild(taskLabel)
    liItem.appendChild(removeButton)

    pendingUL.appendChild(liItem)

})


/*
<li>
    <input type="checkbox" />
    <label>Mow the lawn</label>
    <button>Remove</button>
</li>
*/