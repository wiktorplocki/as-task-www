import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';

import Header from './components/Header/Header';
import ClientsOrdersTableContainer from './components/ClientsOrdersTable/ClientsOrdersTable';

const App = () => (
  <Container fluid>
    <Row>
      <Col>
        <Router>
          <React.Fragment>
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/clients-orders" />}
              />
              <Route
                exact
                path="/clients-orders"
                render={props => <ClientsOrdersTableContainer {...props} />}
              />
              <Route
                exact
                path="/clients"
                render={props => <ClientsOrdersTableContainer {...props} />}
              />
              <Route
                exact
                path="/orders"
                render={props => <ClientsOrdersTableContainer {...props} />}
              />
              <Route
                exact
                path="*"
                render={() => <Redirect to="/clients-orders" />}
              />
            </Switch>
          </React.Fragment>
        </Router>
      </Col>
    </Row>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('app'));
export default App;
