import React, { useState } from 'react';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';
import './App.css';


function App() {

  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="wrapper">
      <FormInput
        inputText={inputText}
        setInputText={setInputText}
        todoList={todoList}
        setTodoList={setTodoList}
      />

      <TodoList
        inputText={inputText}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </div>
  );
}

export default App;
