import React, { Component, useState } from 'react'
import Title from './Title'
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SubHeading from './SubHeading';

class App extends Component {
  state = {
      data: null
    };
  
    componentDidMount() {
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
      
    callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };
  
    render() {
      return (
            <div className="w-100 text-center">
              <Container>
        
                <Row className="w-100" >
                  <Title/>
                </Row>
        
                <Row className="w-100" >
                  <SubHeading text="What are you greatful for?"/>
                </Row>
        
                <Row className="w-100" >
                  <Form/>
                </Row>
              
              </Container>
              
            </div>
          );
    }
  }
  
  export default App;
