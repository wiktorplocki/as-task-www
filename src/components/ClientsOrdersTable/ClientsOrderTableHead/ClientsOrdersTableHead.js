import React from 'react';

const ClientsOrdersTableHead = ({ path }) => (
  <tr>
    {path === '/clients-orders' ? (
      <React.Fragment>
        <th scope="col">Client ID</th>
        <th scope="col">Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Total Sum of All Orders</th>
      </React.Fragment>
    ) : path === '/clients' ? (
      <React.Fragment>
        <th scope="col">Client ID</th>
        <th scope="col">Name</th>
        <th scope="col">Surname</th>
      </React.Fragment>
    ) : path === '/orders' ? (
      <React.Fragment>
        <th scope="col">Order ID</th>
        <th scope="col">Client ID</th>
        <th scope="col">Amount</th>
      </React.Fragment>
    ) : null}
  </tr>
);

export default ClientsOrdersTableHead;
