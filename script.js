function addTask(){

    let input = document.getElementById("taskInput");
    let task = input.value;

    if(task === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${task}</span>
        <div>
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function deleteTask(button){
    button.parentElement.parentElement.remove();
}

function editTask(button){

    let taskText = button.parentElement.parentElement.querySelector("span");
    let newTask = prompt("Edit task:", taskText.innerText);

    if(newTask !== null){
        taskText.innerText = newTask;
    }
}