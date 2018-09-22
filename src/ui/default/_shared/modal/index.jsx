import React from 'react';
import { Modal } from 'react-bootstrap';

var TSModalInstance = null;
class TSModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    TSModalInstance = this;
    this._onHide = this._onHide.bind(this);
    this.size = this.props.size || 'large';
    this.heading = this.props.header || 'Alert';
    this.footer = this.props.footer || (
      <button onClick={this._onHide} className="btn bg-olive">
        Close
      </button>
    );
  }

  _onHide() {
    if (this.props.onHide) {
      this.props.onHide();
    } else {
      this.setState(previousState => {
        return {
          open: !previousState.open
        };
      });
    }
  }

  static open() {
    TSModalInstance.setState({ open: true });
  }

  static close() {
    TSModalInstance.setState({ open: false });
  }

  render() {
    return (
      <Modal show={this.state.open} onHide={this._onHide} bsSize={this.size} aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">{this.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.children}</Modal.Body>
        <Modal.Footer>{this.footer}</Modal.Footer>
      </Modal>
    );
  }
}

export default TSModal;
