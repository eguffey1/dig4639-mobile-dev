import './index.css';
import Card from './components/Card/index.js'
let element
function runOnLoad () {
  // Create a container for us
  element = document.createElement('div')
  element.id = 'container'
  document.body.appendChild(element)
  var newTask = new Card({ content: 'This is a card!'})
  element.appendChild(newTask.render())
}

window.addEventListener('DOMContentLoaded', runOnLoad)
