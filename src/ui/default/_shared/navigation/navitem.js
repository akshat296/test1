import React from 'react';
import { Route, Link } from 'react-router-dom';

// Refered from https://stackoverflow.com/a/43263057/2335514
export default function NavItem({ children, to, exact }) {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => (
        <li style={{ listStyle: 'none' }} className={match ? 'active' : null}>
          <Link to={to}>{children}</Link>
        </li>
      )}
    />
  );
}
