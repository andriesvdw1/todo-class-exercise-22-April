import React from 'react'
import './TodoForm.css'
function TodoForm() {
  return (
    <div className='todo-container'>
        <form className='todo-form'>
            <label>Todo Name</label>
            <input type="text" placeholder='Enter Todo Name'/>
            <label>Todo Description</label>
            <input className='description-text' type="text" placeholder='Enter Todo Description'/>
            <input className='add-todo-btn' type="button" value="Add Todo" />

        </form>
    </div>
  )
}

export default TodoForm