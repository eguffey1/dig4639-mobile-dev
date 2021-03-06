const myArray = [2, 5, 8, 20, 18]
let sum = 0
console.log(myArray)
for (let i = 0; i < myArray.length; i++) {
  sum = sum + myArray[i]
}
console.log(sum)
sum = 0
for (const item of myArray) {
  sum = sum + item
}
console.log(sum)
console.log('before', myArray)
for (let i = 0; i < myArray.length; i++) {
  myArray[i] = myArray[i] / 2
}
console.log('after', myArray)

const newArray = []
console.log('before', myArray)
for (let i = 0; i < myArray.length; i++) {
  newArray.push(myArray[i] / 2)
}
console.log('after', newArray, 'original', myArray)
function addTwo (value) {
  return value + 2
}
const resultArray = myArray.map(addTwo)
console.log(resultArray)

const resultArray2 = myArray.map((value) => value + 2)
console.log(resultArray2)
function printItems (arrayInput) {
  const htmlArray = arrayInput.map((value) => `<p>${value}</p>`)
  console.log(htmlArray)
  return htmlArray
}
printItems(myArray)
function compareNumbers (a, b) {
  return a - b
}
printItems(myArray.sort(compareNumbers))
printItems(myArray.sort((a, b) => a - b))
const todoList = [
  {
    content: 'task 1', priority: 2, completed: true
  },
  {
    content: 'task 2', priority: 1, completed: true
  },
  {
    content: 'task 3', priority: 3, completed: false
  }
]
console.log(todoList)
function printTodo (arrayInput) {
  const htmlArray = arrayInput.map((value) =>
  `<p ${
    (value.completed) ? 'class="done"' : ''}>
  ${value.priority} : ${value.content}
  </p>`)
  return htmlArray
}
console.log(printTodo(todoList).join('\n'))

const filteredArray = []
for (const item of todoList) {
  if (!item.completed) {
    filteredArray.push(item)
  }
}
console.log(printTodo(filteredArray).join('\n'))
function evalItem (item) {
  return !item.completed
}
console.log(printTodo(todoList.filter(evalItem)).join('\n'))
console.log(printTodo(todoList.filter((item) => item.completed)).join(' \n'))
