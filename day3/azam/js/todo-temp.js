
const taskNameTextBox = document.getElementById("taskNameTextBox")
const taskPriorityTextBox = document.getElementById("taskPriorityTextBox")
const btnAddTask = document.getElementById("btnAddTask")
const pendingUL = document.getElementById("pendingUL")


function removeTask(element) {
    console.log(element.parentElement)

    pendingUL.removeChild(element.parentElement)
}

btnAddTask.addEventListener("click", function() {
    
    const taskName = taskNameTextBox.value 
    const taskPriority = taskPriorityTextBox.value 

    // WITH TEMPLATE LITERALS 
    const liItem = `<li> 
                        <p>This is "important"</p>
                        <b>${taskName}</b>
                        <i>${taskPriority}</i>
                        <button onclick="removeTask(this)">Remove</button>
                    </li>
    `

    //pendingUL.innerHTML += liItem // This can become expensive if you list has a lot of items 

    // recommended approach for adding new LI item 
    pendingUL.insertAdjacentHTML('beforeend', liItem)

    console.log(liItem)


    /* WITHOUT TEMPLATE LITERALS 
    const liItem = document.createElement("li")
    const boldItem = document.createElement("b")

    boldItem.innerHTML = taskName

    const italicItem = document.createElement("i")
    italicItem.innerHTML = taskPriority

    liItem.appendChild(boldItem)
    liItem.appendChild(italicItem)
   
    pendingUL.appendChild(liItem)
    */

})

/*
 <li>
            <b>Mow the lawn</b>
            <i>High</i>
        </li>
*/