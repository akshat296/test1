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

class MaximizeButton extends React.Component {
  render() {
    const { label, onClick } = this.props;
    return (
      <Button bsClass="btn btn-xs" onClick={onClick}>
        <span aria-hidden="true">
          <i className="fa fa-window-maximize" />
        </span>
        <span className="sr-only">{label}</span>
      </Button>
    );
  }
}

MaximizeButton.propTypes = propTypes;
MaximizeButton.defaultProps = defaultProps;

export default MaximizeButton;
