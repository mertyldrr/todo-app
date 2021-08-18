import React, { useState } from 'react';
import { Form, Col, Container, FormControl, Row } from 'react-bootstrap';

const FormInput = ({ setInputText, todoList, setTodoList }) => {

  // const inputTextHandler = (e) => {
  //   let input = e.target.value;
  //   // console.log(input);
  //   setInputText(input);
  // }

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      setInputText(e.target.value);
      setTodoList([...todoList, e.target.value])
    }
  }

  return (
    <Container fluid >
      <Row>
        <Col>
          <FormControl 
          type="text"
          onChange={e => setInputText(e.target.value)} 
          onKeyPress={handleKeyPress} 
          placeholder="type here" />
        </Col>
        <Col>
          <FormControl as="select">
            <option value="Filter1">Filter1</option>
            <option value="Filter2">Filter2</option>
            <option value="Filter3">Filter3</option>
          </FormControl>
        </Col>
      </Row>
    </Container>
  )
}

export default FormInput;
