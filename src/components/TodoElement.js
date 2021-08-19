import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import './TodoElement.css';
import { TiTickOutline } from 'react-icons/ti'
import { ImCross } from 'react-icons/im'

const TodoElement = ({text}) => {
    return (
      <Container>
        <Row className="todoelement-wrapper justify-content-center align-items-center">
          <Col xs lg="4">
            <p className="mt-4">{text}</p> 
          </Col>
          <Col xs lg="1">
            <button className="button">
              <TiTickOutline className="tick"/>
            </button>
          </Col>
          <Col xs lg="1">
            <button className="button">
              <ImCross className="cross"/>
            </button>
          </Col>
          {/* <button className="button"><Image src={tickLogo}></Image></button> */}
        </Row>
      </Container>
    )
}

export default TodoElement;