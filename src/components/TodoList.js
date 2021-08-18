import React, {useState} from 'react';

const TodoList = ({ inputText, todoList }) => {

  const todos = todoList.map((item, index) => {
    return (
      <p key={index}>{item}</p>
    )
  })

  return (
    <div>
      {todos}
    </div>
  )
}

export default TodoList;
