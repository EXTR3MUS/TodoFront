import React, {useState, useEffect} from 'react'
import EditableText from './EditableText'
import { MdClose, MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'

import './TodoItem.css'

const TodoItem = (props) => {
  const item = props.item
  const [title, setTitle] = useState(item.title)
  const [description, setDescription] = useState(item.description)

  useEffect(() => {
    setTitle(item.title)
    setDescription(item.description)
  }, [item])

  const on_change = (name, value) => {
    if (name === 'title' && value !== item.title) {
      setTitle(value)
      item.title = value
    } else if (name === 'description' && value !== item.description) {
      setDescription(value)
      item.description = value
    }
  }

  const on_complete_edit = () => {
    props.on_complete_edit(item)
  }

  return (
    <div className={item.is_on ? 'todo-item completed' : 'todo-item'} onClick={() => {props.on_item_click(item)} }>
        {item.is_on ? <MdCheckBox className="check-icon" size={"20px"}/> : <MdCheckBoxOutlineBlank className="check-icon" size={"20px"}/>}
        <div className="title"><EditableText style={{textAlign: "start"}} name={"title"} on_change={on_change} on_complete_edit={on_complete_edit}>{title}</EditableText></div>
        <div className="description" style={{flex: 1}}><EditableText className={"todo-item-description"} style={{textAlign: "end"}} name={"description"} on_change={on_change} on_complete_edit={on_complete_edit}>{description}</EditableText></div>
        <MdClose className="delete-icon" onClick={() => {props.on_delete_click(item)} }/>
    </div>
  )
}

export default TodoItem
