import { useState } from 'react'
import Title from './Title'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SubHeading from './SubHeading';



function App() {

  return (
    <div className="w-100 text-center">
      <Container>

        <Row className="w-100" >
          <Title/>
        </Row>

        <Row className="w-100" >
          <SubHeading text="What are you greatful for?"/>
        </Row>
      
      </Container>
      
    </div>
  )
}

export default App
