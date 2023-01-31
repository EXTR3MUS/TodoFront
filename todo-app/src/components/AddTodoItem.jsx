import React from 'react'
import { useState } from 'react'
import './AddTodoItem.css'

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

    const on_submit = (e) => {
        e.preventDefault()
        addTodoItem()
    }

  return (
    <form className='form' onSubmit={on_submit}>
        <input type="text" placeholder='title' name="input_title" id="input_title" onChange={handleChange} value={title}/>
        <input type="text" placeholder='description' name="input_description" id="input_description" onChange={handleChange} value={description}/>
        <button type="submit">Add Item</button>
    </form>
  )
}

export default AddTodoItem