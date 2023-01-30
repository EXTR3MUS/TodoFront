import React, {useState} from 'react'
import './TodoItem.css'

const TodoItem = (props) => {
  const item = props.item

  return (
    <div className={item.is_on ? 'todo-item completed' : 'todo-item'} onClick={() => {props.on_item_click(item)} }>
        <div className="title">{item.title}</div>
        <div className="description">{item.description}</div>
    </div>
  )
}

export default TodoItem
