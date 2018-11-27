import React from 'react';
import _ from 'lodash';
import { fetchService } from '../../helpers/fetchService';

class ClientsOrdersTableCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: null
    };
  }

  componentDidMount() {
    const { list, path } = this.props;
    if (!_.isEmpty(list) && path === '/clients-orders') {
      fetchService(`http://localhost:3000/clients/${list._id}`)
        .then(detail => this.setState({ detail }))
        .catch(err => console.error(err));
    }
  }

  render() {
    const { detail } = this.state;
    const { list } = this.props;
    if (!_.isEmpty(detail) && !_.isEmpty(list)) {
      return (
        <tr>
          {Object.values(detail).map(value => (
            <td key={Math.random()}>{value}</td>
          ))}
          <td key={Math.random()}>{list.total}</td>
        </tr>
      );
    }
    return (
      <tr>
        {Object.values(list).map(value => (
          <td key={Math.random()}>{value}</td>
        ))}
      </tr>
    );
  }
}

export default ClientsOrdersTableCell;
