import React from 'react'
import './Todo.css'
function Todo({name, description}) {
  return (
    <div className='todo'>
        <span>{name}</span><br />
        <span>{description}</span>
        <input className='delete-btn' type="button" value="Delete" />
        <input className='edit-btn' type="button" value="Edit" />
        <input className='done-btn' type="button" value="Done" />
    </div>
  )
}

export default Todo