import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Col, Row } from 'reactstrap';

const App = () => (
  <Container fluid>
    <Row>
      <Col>
        <h1>Hello World!</h1>
      </Col>
    </Row>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('app'));
export default App;
