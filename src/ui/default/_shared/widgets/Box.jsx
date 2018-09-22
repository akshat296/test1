import React from 'react';

export const Box = ({ style, className, children, loading }) => {
  return (
    <div style={style ? style : {}} className={`box ${className}`}>
      {children}
      {loading && (
        <div className="overlay">
          <i className="fa fa-refresh fa-spin" />
        </div>
      )}
    </div>
  );
};

export const Header = ({ className, hasBorder, title, minimizeButton, iconClass, children }) => {
  const options = {
    hasBorder: hasBorder ? hasBorder : true,
    minimizeButton: minimizeButton ? minimizeButton : false
  };

  const renderHeader = () => {
    if (children) {
      return children;
    } else {
      return (
        <React.Fragment>
          <i className={iconClass} />
          <h3 className="box-title">{title}</h3>
          <div className="box-tools pull-right">
            {options.minimizeButton ? (
              <button type="button" className="btn btn-box-tool" data-widget="collapse">
                <i className="fa fa-minus" />
              </button>
            ) : null}
          </div>
        </React.Fragment>
      );
    }
  };

  return <div className={`box-header ${className} ${options.hasBorder ? 'with-border' : ''}`}>{renderHeader()}</div>;
};

export const Body = ({ children, className }) => <div className={`box-body ${className}`}>{children}</div>;

export const Footer = ({ children, className }) => {
  return <div className={`box-footer ${className ? className : ''}`}>{children}</div>;
};

export default Object.assign(Box, {
  Body,
  Header,
  Footer
});
