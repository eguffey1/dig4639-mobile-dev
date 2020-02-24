import React from 'react';
import './App.css';
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
function TodoItem(props) {
  return <p>{props.content}</p>
}
function App() {
  const todolistFiltered = todoList.filter((value) => value.completed)
  let todoArray = todolistFiltered.map(
    (value) => <TodoItem content={value.content} />
  )
  /*
  const todoArray = [
      <TodoItem content="item 1"/>,
      <TodoItem content="item 2"/>,
      <TodoItem content="item 3"/>
  ]*/
  return (
    
      todoList.filter((v) => v.completed).map((v) => <TodoItem priority={v.priority} content={v.content} completed={v.completed}/>)

  );
}

export default App;
