import React from 'react';
import _ from 'lodash';
import { fetchService } from '../../helpers/fetchService';

class ClientsOrdersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientState: null
    };
  }

  componentDidMount() {
    const { client, path } = this.props;
    if (!_.isEmpty(client) && path === '/clients-orders') {
      fetchService(`http://localhost:3000/clients/${client._id}`)
        .then(clientState => this.setState({ clientState }))
        .catch(err => console.error(err));
    }
  }

  render() {
    const { clientState } = this.state;
    const { client } = this.props;
    if (!_.isEmpty(clientState) && !_.isEmpty(client)) {
      return (
        <tr>
          {Object.values(clientState)
            .reverse()
            .map(value => (
              <td key={Math.random()}>{value}</td>
            ))}
          <td key={Math.random()}>{client.total}</td>
        </tr>
      );
    }
    return (
      <tr>
        {Object.values(client).map(value => (
          <td key={Math.random()}>{value}</td>
        ))}
      </tr>
    );
  }
}

export default ClientsOrdersTable;
