import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';

const propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

const defaultProps = {
  label: 'Minimize'
};

class MinimizeButton extends React.Component {
  render() {
    const { label, onClick } = this.props;
    return (
      <Button bsClass="btn btn-xs" onClick={onClick}>
        <span aria-hidden="true">
          <i className="fa fa-chevron-down" />
        </span>
        <span className="sr-only">{label}</span>
      </Button>
    );
  }
}

MinimizeButton.propTypes = propTypes;
MinimizeButton.defaultProps = defaultProps;

export default MinimizeButton;
