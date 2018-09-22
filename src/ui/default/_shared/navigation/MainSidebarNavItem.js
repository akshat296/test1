import React from 'react';
import { Route, Link } from 'react-router-dom';

const NavItem = ({ navItem, permissions }) => {
  if (navItem.permission && !permissions[navItem.permission]) {
    return <React.Fragment />;
  }

  const renderBadges = () => {
    if (navItem.badges) {
      return (
        <span className="pull-right-container">
          {navItem.badges.map((badge, idx) => (
            <small key={idx} className={`label pull-right ${badge.color}`}>
              {badge.text}
            </small>
          ))}
        </span>
      );
    }
    return <React.Fragment />;
  };

  return (
    <Route
      exact={false}
      path={navItem.to}
      children={({ match }) => (
        <li className={match ? 'active' : null}>
          <Link to={navItem.to}>
            {navItem.icon && <i className={navItem.icon} />}

            <span>{navItem.displayName}</span>
            {renderBadges()}
          </Link>
        </li>
      )}
    />
  );
};

export default ({ permissions, navItem, onToggleSubNav }) => {
  if (navItem.subnav) {
    return (
      <li className={`treeview ${navItem.expanded ? 'menu-open' : ''}`}>
        <a href="#" onClick={onToggleSubNav}>
          <i className={navItem.icon} />
          <span>{navItem.displayName}</span>
          <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right" />
          </span>
        </a>
        <ul style={{ display: navItem.expanded ? 'block' : 'none' }} className="treeview-menu">
          {navItem.subnav.map((subnavItem, idx) => (
            <NavItem permissions={permissions} key={idx} navItem={subnavItem} />
          ))}
        </ul>
      </li>
    );
  } else {
    return <NavItem permissions={permissions} navItem={navItem} />;
  }
};
