import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { utils, Button, ButtonGroup } from 'react-bootstrap';
import CloseButton from './CloseButton';
import MinimizeButton from './MinimizeButton';
import MaximizeButton from './MaximizeButton';

const {
  bootstrapUtils: { bsClass, getClassSet, splitBsProps },
  createChainedFunction
} = utils;

const propTypes = {
  /**
   * Provides an accessible label for the close
   * button. It is used for Assistive Technology when the label text is not
   * readable.
   */
  closeLabel: PropTypes.string,

  /**
   * Specify whether the Component should contain a close button
   */
  closeButton: PropTypes.bool,

  /**
   * A Callback fired when the close button is clicked. If used directly inside
   * a Modal component, the onHide will automatically be propagated up to the
   * parent Modal `onHide`.
   */
  onHide: PropTypes.func
};

const defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};

const contextTypes = {
  $bs_modal: PropTypes.shape({
    onHide: PropTypes.func
  })
};

// TODO: Attach with skin if possible, check right buttons
class ModalHeader extends React.Component {
  render() {
    const {
      closeLabel,
      closeButton,
      minimizeButton,
      maximizeButton,
      onHide,
      onMinimize,
      onMaximize,
      className,
      children,
      ...props
    } = this.props;

    const modal = this.context.$bs_modal;

    const [bsProps, elementProps] = splitBsProps(props);

    const classes = getClassSet(bsProps);

    return (
      <div {...elementProps} className={classNames(className, classes)}>
        <ButtonGroup bsClass="pull-right box-tools">
          {minimizeButton && (
            <MinimizeButton label={closeLabel} onClick={createChainedFunction(modal && modal.onHide, onMinimize)} />
          )}
          {maximizeButton && <MaximizeButton label={closeLabel} onClick={onMaximize} />}
          {closeButton && (
            <CloseButton label={closeLabel} onClick={createChainedFunction(modal && modal.onHide, onHide)} />
          )}
        </ButtonGroup>
        {children}
      </div>
    );
  }
}

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;
ModalHeader.contextTypes = contextTypes;

export default bsClass('modal-header', ModalHeader);
