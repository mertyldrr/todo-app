import React from 'react';
import TodoElement from './TodoElement';


const TodoList = ({ inputText, todoList }) => {

  const todos = todoList.map((item) => {
    return (
      <TodoElement key={item.id} text={item.text} />
    )
  })

  return (
    <div className="mt-5">
      {todos}
    </div>
  )
}

export default TodoList;
