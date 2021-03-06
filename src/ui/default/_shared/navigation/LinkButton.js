import React from 'react';
import { withRouter } from 'react-router';
import { Button } from 'react-bootstrap';

const LinkButton = props => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    children,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props;
  return (
    <Button
      {...rest} // `children` is just another prop!
      onClick={event => {
        onClick && onClick(event);
        history.push(to);
      }}
    >
      {children}
    </Button>
  );
};

// LinkButton.propTypes = {
//   to: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired
// };

export default withRouter(LinkButton);
