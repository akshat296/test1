import React from 'react';

export default ({ text, caption, children }) => (
  <div>
    <div className="row">
      <div className="col-sm-9">
        <h3 style={{ padding: 0, margin: 0 }}> {text} </h3>
      </div>
      <div className="col-sm-3">{children}</div>
    </div>
    <div className="row">
      <div className="col-sm-12">{caption ? <p> {caption} </p> : null}</div>
    </div>
  </div>
);
