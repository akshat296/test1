import React from 'react';
import NavItem from './navitem';

export default ({ title, items }) => (
  <div className="box box-solid">
    <div className="box-body no-padding">
      <ul className="nav nav-pills nav-stacked">
        {items.map((item, index) => (
          <NavItem key={index} to={item.url}>
            <i className={item.icon} />
            {item.name}
          </NavItem>
        ))}
      </ul>
    </div>
  </div>
);
