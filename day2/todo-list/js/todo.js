
// setting my variables
let enterTaskTextBox = document.getElementById("enterTaskTextBox")
let btnAddTask = document.getElementById("btnAddTask")

let pendingUL = document.getElementById("pendingUL")
// let pendingCheckBox = document.getElementById("pendingCheckBox")

let completedUL = document.getElementById("completedUL")
// let completedCheckBox = document.getElementById("completedCheckBox")

//submit 'click' functions() //
btnAddTask.addEventListener("click", function() {

  let pendingTask = enterTaskTextBox.value 

  // create HTMLelement li and checkbox
  let liItem = document.createElement("li")
  let pendingCheckBox = document.createElement("input") 
  pendingCheckBox.setAttribute("type", "checkbox")
  liItem.innerHTML = pendingTask
  // console.log(pendingTask)
  
  // add Li/checkbox to Ul // 
  liItem.appendChild(pendingCheckBox)
  pendingUL.appendChild(liItem)
  

  // create remove button //
  let removeButton = document.createElement("button")
  removeButton.innerHTML = "Remove"
  removeButton.addEventListener("click", function() {
    
    // from pendingUL remove LI item
    pendingUL.removeChild(this.ParentElement)

  })



})