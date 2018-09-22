import React from 'react';

export default ({ renderLeft, renderRight, onClick = () => {}, children }) => {
  return (
    <div>
      <div className="row div-hover-color" onClick={onClick}>
        <div className="col-sm-6">{renderLeft()}</div>
        <div className="col-sm-6">{renderRight()}</div>
      </div>
      {children}
    </div>
  );
};
