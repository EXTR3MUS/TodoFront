import React from 'react'
import { useState } from 'react'

const AddTodoItem = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    let item = {title: '', description: ''}

    const handleChange = (e) => {
        const {name, value} = e.target
        if (name === 'input_title') {
            setTitle(value)
        } else if (name === 'input_description') {
            setDescription(value)
        }
    }

    const addTodoItem = () => {
        item.title = title
        item.description = description
        props.addTodoItem(item)
    }

  return (
    <div>
        <div>AddTodo</div>
        <input type="text" name="input_title" id="input_title" onChange={handleChange} value={title}/>
        <input type="text" name="input_description" id="input_description" onChange={handleChange} value={description}/>
        {title} {description}
        <button onClick={() => {addTodoItem({})}  }>Add</button>
    </div>
  )
}

export default AddTodoItem