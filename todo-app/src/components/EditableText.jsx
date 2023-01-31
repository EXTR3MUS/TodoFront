import React, { useState, useEffect } from 'react'
import './EditableText.css'

const EditableText = (props) => {
    //  this is an editable text component
    // getting value from children
    const [value, setValue] = useState(props.children)
    const [isEditing, setIsEditing] = useState(false)

    // selecting input element
    const inputRef = React.createRef()

    // setting initial width according to text length
    useEffect(() => {
        inputRef.current.style.width = `${inputRef.current.value.length + 1}ch`
    }, []) // empty array means this effect will run only once

    const on_click = (event) => {
        // preventing cascading event
        event.stopPropagation()
    }

    const on_change = (event) => {
        // setting width according to text length
        event.target.style.width = `${event.target.value.length + 1}ch`

        // setting value
        props.on_change(props.name, event.target.value)
    }


  return (
    <div>
        {/* {isEditing ? (
            <input 
                type="text" 
                autoFocus 
                className='editable-text-input'
                value={value} 
                onChange={(e) => {setValue(e.target.value)}} 
                onBlur={(event) => {setIsEditing(false)}} 
            />
        ) : (
            <div 
                onClick={(event) => {setIsEditing(true)}}
                className='editable-text'
            >{value}</div>
        )} */}

            <input 
                style={props.style}
                type="text" 
                className={'editable-text-input '+props.className}
                ref={inputRef}
                onChange={on_change}
                onClick={on_click}
                value={props.children}  
                onBlur={(event) => {props.on_complete_edit()}}
                onKeyUp={(event) => {
                    if (event.key === 'Enter') {
                        props.on_complete_edit()
                        // set out of focus
                        event.target.blur()
                    }
                }}
            />
    </div>
  )
}

export default EditableText