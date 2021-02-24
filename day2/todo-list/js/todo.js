
let enterTaskTextBox = document.getElementById("enterTaskTextBox")
let btnAddTask = document.getElementById("btnAddTask")

let pendingUL = document.getElementById("pendingUL")
let completedUL = document.getElementById("completedUL")

btnAddTask.addEventListener("click", function() {

  let taskName = enterTaskTextBox.value 
  //clears textbox after adding task
  enterTaskTextBox.value = ""

  let liItem = document.createElement("li")

  let taskCheckBox = document.createElement("input")
  taskCheckBox.setAttribute("type", "checkbox")
  taskCheckBox.addEventListener("change", function() {
    if(this.checked) {
      console.log(this.parentElement)
      completedUL.appendChild(this.parentElement)
    } else {
      pendingUL.appendChild(this.parentElement)
    }
  })

  // create task label and set it to textbox value
  let taskLabel = document.createElement("label")
  taskLabel.innerHTML = taskName

  let removeButton = document.createElement("button")
  removeButton.innerHTML = "remove"
  removeButton.setAttribute("id", "remove")
  removeButton.addEventListener("click", function() {
    local = (this.parentElement).parentElement
    local.removeChild(this.parentElement)
  })
  // append taskCheckBox, taskLabel, removeButton,  to liItem
  liItem.appendChild(taskCheckBox)
  liItem.appendChild(taskLabel)
  liItem.appendChild(removeButton)

  pendingUL.appendChild(liItem)


})