import React from 'react'
import { useState } from 'react'

const AddTodoItem = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [item, setItem] = useState({title: '', description: ''})

    const handleChange = (e) => {
        const {name, value} = e.target
        if (name === 'input_title') {
            setTitle(value)
        } else if (name === 'input_description') {
            setDescription(value)
        }
        setItem({title: title, description: description})
    }

  return (
    <div>
        <div>AddTodo</div>
        <input type="text" name="input_title" id="input_title" onChange={handleChange} />
        <input type="text" name="input_description" id="input_description" onChange={handleChange} />
        <button onClick={() => {props.addTodoItem(item)}  }>Add</button>
    </div>
  )
}

export default AddTodoItem