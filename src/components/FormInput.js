import React from 'react';
import { Col, Container, FormControl, Row } from 'react-bootstrap';
import './FormInput.css';

const FormInput = ({ inputText, setInputText, todoList, setTodoList }) => {

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      setInputText(e.target.value);
      setTodoList([
        ...todoList, 
        {text: e.target.value,
        completed: false,
        id: Math.random() * 1000}])
      setInputText("");
      console.log(todoList);
    }
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
          <FormControl as="select">
            <option value="Filter1">All</option>
            <option value="Filter2">Completed</option>
            <option value="Filter3">Uncompleted</option>
          </FormControl>
        </Col>
      </Row>
    </Container>
  )
}

export default FormInput;
