import React, { useState, useEffect } from 'react'
import Todo from '../Todo/Todo'

function TodoList() {
  const [todoitems, setTodoitems] = useState([]);

  useEffect(() => {
    setTodoitems([
      { name: "potatoes", description: "boil the potatoes until soft, then mash em. Serve on the plate next to other food." },
      { name: "cucumber", description: "Slice and add to the salad" },
      { name: "lettuce", description: "Wash with cold water, then add to the salad" },
      { name: "Onion", description: "Dice one onion and put on the stove pan at medium heat" },
      { name: "Brown onion soup", description: "Mix one packet of brown onion soup with 250ml boiling water, then add to the onions in the pan." },
    ]);
  }, []); 

  return (
    <div className='todo-list'>
      <h2>Todo List:</h2>
      {todoitems.map((item, index) => (
        <Todo key={index} name={item.name} description={item.description} />
      ))}
    </div>
  );
}

export default TodoList;