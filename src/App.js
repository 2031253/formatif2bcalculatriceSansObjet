import logo from './logo.svg';
import './App.css';

import React from 'react';
import TaxeQC from './components/TaxeQC'
import Ciel from './images/Ciel'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
function App() {
return( 
  <div className = "App-header">
  <Container>
    <Row>
      <Col><Ciel/></Col>
      <Col></Col>
      <Col></Col>
    </Row>
    <Row>
      <Col></Col>
      <Col></Col>
      <Col></Col>
    </Row>
    <Row>
      <Col></Col>
      <Col><TaxeQC/></Col>
      <Col></Col>
      
    </Row>

    <p >@ cégep limoilou - 2023 - Othniel Mawussé</p>

  </Container>

</div>
)
}
export default App;
