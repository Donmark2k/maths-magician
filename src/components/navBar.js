import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => (
  <nav>
    <h1> Maths Magicians</h1>

    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>|</li>

      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>|</li>

      <li>
        <Link to="/quotes">Quote</Link>
      </li>

    </ul>
  </nav>
);

export default NavBar;
