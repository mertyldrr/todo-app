import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './TodoElement.css';
import { TiTickOutline } from 'react-icons/ti'
import { ImCross } from 'react-icons/im'

const TodoElement = ({text, todo, setTodoList, todoList}) => {

  const handleTick = () => {
    setTodoList(todoList.map((item) => {
      if(item.id === todo.id) {
        return {
          ...item, completed: true
        }
      }
      return item
    }))
 }

  const handleRemove = () => {
    setTodoList(todoList.filter(el => el.id !== todo.id))
  }

    return (
      <Container>
        <Row className="todoelement-wrapper justify-content-center align-items-center">
          <Col xs lg="4">
            <p className={`mt-4 ${todo.completed ? "completed" : ""}`}>{text}</p> 
          </Col>
          <Col xs lg="1">
            <button onClick={handleTick} className="button">
              <TiTickOutline className="tick"/>
            </button>
          </Col>
          <Col xs lg="1">
            <button onClick={handleRemove} className="button">
              <ImCross className="cross"/>
            </button>
          </Col>
        </Row>
      </Container>
    )
}

export default TodoElement;