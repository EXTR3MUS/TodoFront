import React from 'react'
import './TodoItem.css'

const TodoItem = (props) => {
  return (
    <div className={props.isDone ? 'todo-item completed' : 'todo-item'} onClick={props.on_item_click}>
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
    </div>
  )
}

export default TodoItem
