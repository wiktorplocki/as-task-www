import React from 'react';
import { Col, Row, Table } from 'reactstrap';
import { fetchService } from '../../helpers/fetchService';

import ClientsOrdersTableCell from './ClientsOrdersTableCell';
import ClientsOrdersTableHead from './ClientsOrderTableHead/ClientsOrdersTableHead';

class ClientsOrdersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const { location } = this.props;
    fetchService(`http://localhost:3000${location.pathname}`, 'GET')
      .then(data => {
        if (location.pathname === '/clients-orders') {
          this.setState({ data: data.reverse() });
        } else {
          this.setState({ data });
        }
      })
      .catch(err => console.error(err));
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      fetchService(`http://localhost:3000${location.pathname}`, 'GET')
        .then(data => {
          if (location.pathname === '/clients-orders') {
            this.setState({ data: data.reverse() });
          } else {
            this.setState({ data });
          }
        })
        .catch(err => console.error(err));
    }
  }

  render() {
    const { data } = this.state;
    const { location } = this.props;
    return (
      <Row>
        <Col>
          <div className="ClientsOrdersTableContainer">
            <Table>
              <thead>
                <ClientsOrdersTableHead path={location.pathname} />
              </thead>
              <tbody>
                {data.reverse().map(item => (
                  <ClientsOrdersTableCell
                    list={item}
                    path={location.pathname}
                    key={Math.random()}
                  />
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    );
  }
}

export default ClientsOrdersTable;
