import React, { useState, useEffect } from 'react';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';
import './App.css';


function App() {
  
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [option, setOption] = useState("All");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todoList, option])

  const filterHandler = () => {
    console.log(option);
    switch (option) {
      case "Completed":
        setFiltered(todoList.filter(todo => todo.completed === true));
        break;
      case "Uncompleted":
        setFiltered(todoList.filter(todo => todo.completed === false));
        break;
      default:
        setFiltered(todoList);
    }
  };

  return (
    <div className="wrapper">
      <FormInput
        inputText={inputText}
        setInputText={setInputText}
        todoList={todoList}
        setTodoList={setTodoList}
        setOption={setOption}
      />

      <TodoList
        inputText={inputText}
        todoList={todoList}
        setTodoList={setTodoList}
        filtered={filtered}
      />
    </div>
  );
}

export default App;
