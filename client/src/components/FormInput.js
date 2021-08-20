import React from 'react';
import { Col, Container, FormControl, Row } from 'react-bootstrap';
import './FormInput.css';

const FormInput = ({ inputText, setInputText, todoList, setTodoList, setOption }) => {

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      setInputText(e.target.value);
      setTodoList([
        ...todoList, 
        {text: e.target.value,
        completed: false,
        id: Math.random() * 1000}])
      setInputText("");
    }
  }

  const optionHandler = (e) => {
    setOption(e.target.value)
  }

  return (
    <Container className="form-wrapper">
      <Row className="justify-content-center p-5">
        <h1 className="header">Todo App</h1>
      </Row>
      <Row className="h-50 justify-content-center align-items-center">
        
        <Col xs lg="4">
          <FormControl
          value={inputText}
          type="text"
          onChange={e => setInputText(e.target.value)} 
          onKeyPress={handleKeyPress}   
          placeholder="type here" />
        </Col>
        <Col xs lg="2">
          <FormControl onChange={optionHandler} as="select">
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Uncompleted">Uncompleted</option>
          </FormControl>
        </Col>
      </Row>
    </Container>
  )
}

export default FormInput;
