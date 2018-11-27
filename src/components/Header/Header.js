import React from 'react';
import {
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledCollapse
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const items = [
    {
      label: 'Clients',
      path: '/clients'
    },
    {
      label: 'Orders',
      path: '/orders'
    },
    {
      label: 'Total Sum of All Orders',
      path: '/clients-orders'
    }
  ];
  return (
    <Navbar color="faded" light expand="md">
      <NavbarToggler id="toggler" />
      <UncontrolledCollapse navbar noValidate toggler="#toggler">
        <Nav className="ml-auto" navbar>
          {items.map(navItem => (
            <NavItem key={Math.random()}>
              <NavLink tag={Link} to={navItem.path}>
                {navItem.label}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </UncontrolledCollapse>
    </Navbar>
  );
};

export default Header;
