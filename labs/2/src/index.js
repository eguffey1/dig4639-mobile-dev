
import Card from "../components/Card/index.js";
let element;
function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    var newTask = new Card({content:"Sample value provided"});
    element.appendChild(newTask.render());
}

window.addEventListener("DOMContentLoaded", runOnLoad);