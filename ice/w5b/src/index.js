import Task from "./components/Task/index.js"
let element;
let input;
function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    input = document.getElementById("taskText");
    // Handle adding a new task
    var addTaskButton = document.getElementById("addTask");
    addTaskButton.addEventListener("click", onClick)
    return input;
}

function onClick() {
    console.log("clicked!");
    var newTask = new Task({content:input.value,done:false});
    if (input.value == "") {
        console.log("please enter a task");
    }
    else {
        element.appendChild(newTask.render());
        input.value =  "";
    }
}

window.addEventListener("DOMContentLoaded", runOnLoad);