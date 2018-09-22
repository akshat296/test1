import React from 'react';

const DescriptionBlock = ({ children, border }) => {
  border = border || [];
  const borderClass = border.map(b => `border-${b}`);
  return <div className={`description-block ${borderClass.join(' ')}`}>{children}</div>;
};

const Header = ({ children }) => {
  return <h5 className="description-header">{children}</h5>;
};

const Text = ({ children }) => {
  return <span className="description-text">{children}</span>;
};

export default Object.assign(DescriptionBlock, {
  Header,
  Text
});
