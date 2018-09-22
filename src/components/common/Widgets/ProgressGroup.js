import React from 'react';

export default ({ title, now, max, size, color, stripped }) => {
  return (
    <div className="progress-group">
      <span className="progress-text">{title}</span>
      <span className="progress-number">
        <b>{now}</b>/{max}
      </span>
      <div className={`progress ${size ? size : 'sm'}`}>
        <div
          className={`progress-bar ${stripped ? 'progress-bar-striped' : ''} progress-bar-${color}`}
          style={{ width: ((now / max) * 100).toString() + '%' }}
        />
      </div>
    </div>
  );
};
