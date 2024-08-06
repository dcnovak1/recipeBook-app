import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Login = () => {
  return (
    <Container style={{marginTop:'40px'}}>
    <Row>
      <Col>

      </Col>
      <Col>
      <h1>Please Log In</h1>
        <form>
          <Row>
            <label>
              <p>Username</p>
              <input type="text" required='true'/>
            </label>
          </Row>
          <Row>
            <label>
              <p>Password</p>
              <input type="password" required='true'/>
            </label>
          </Row>
          <Row>
            <Col>

            </Col>
            <Col >
              <button style={{marginTop:'10px'}}className='btn btn-success' type="submit">Submit</button>
            </Col>
            <Col>
              
            </Col>
          </Row>
        </form>
      </Col>
      <Col>
        
      </Col>
    </Row>
    </Container>
  )
}

export default Login