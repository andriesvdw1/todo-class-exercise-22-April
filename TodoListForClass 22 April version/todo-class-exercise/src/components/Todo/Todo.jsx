import React from 'react'
import './Todo.css'
function Todo({name, description}) {
  return (
    <div className='todo'>
        <div className='todo-attribute'>{name}</div><br />
        <div className='todo-attribute'>{description}</div> <br />
        <input className='delete-btn' type="button" value="Delete" />
        <input className='edit-btn' type="button" value="Edit" />
        <input className='done-btn' type="button" value="Done" />
    </div>
  )
}

export default Todo