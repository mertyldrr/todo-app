import React from 'react';
import TodoElement from './TodoElement';


const TodoList = ({ todoList, setTodoList, filtered }) => {

  const todos = filtered.map((item) => {
    return (
      <TodoElement
        id={item.id}
        key={item.id}
        text={item.text}
        todoList={todoList}
        setTodoList={setTodoList}
        todo={item}
      />
    )
  })

  return (
    <div className="mt-5">
      {todos}
    </div>

  )
}

export default TodoList;
