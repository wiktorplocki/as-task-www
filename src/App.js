import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import './stylesheets/main.scss';

import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
// import ClientsOrdersTableContainer from './containers/ClientsOrdersTableContainer/ClientsOrdersTableContainer';

const ClientsOrdersTableContainer = lazy(() =>
  import('./containers/ClientsOrdersTableContainer/ClientsOrdersTableContainer')
);

const App = () => (
  <Container fluid>
    <Row>
      <Col>
        <Router>
          <Suspense fallback={<Loading />}>
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
          </Suspense>
        </Router>
      </Col>
    </Row>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('app'));
export default App;
