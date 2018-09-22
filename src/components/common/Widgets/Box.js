import React from 'react';

export const Box = ({ className, children }) => {
  return <div className={`box ${className}`}>{children}</div>;
};

export const Header = ({
  hasBorder,
  title,
  minimizeButton,
  cancelButton,
  cancelControl,
  minimizeControl,
  iconClass,
  children
}) => {
  const options = {
    hasBorder: hasBorder ? hasBorder : true,
    minimizeButton: minimizeButton ? minimizeButton : false,
    cancelButton: cancelButton ? cancelButton : false
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
            {options.minimizeButton && (
              <button type="button" className="btn btn-box-tool" onClick={minimizeControl}>
                <i className="fa fa-minus" />
              </button>
            )}
            {options.cancelButton && (
              <button type="button" className="btn btn-box-tool" data-widget="collapse" onClick={cancelControl}>
                <i className="fa fa-close" />
              </button>
            )}
          </div>
        </React.Fragment>
      );
    }
  };

  return <div className={`box-header ${options.hasBorder ? 'with-border' : ''}`}>{renderHeader()}</div>;
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
