import React from 'react';
import { Checkbox, Row, Col } from 'react-bootstrap';
import { Box } from '../../_shared';
export default ({ title = '', children, checkbox = false, checked, onCheckBoxToggle, renderRight }) => (
  <Box
    style={{ backgroundColor: checkbox && checked ? '#ddd' : 'white', color: checkbox && checked ? '#bbb' : 'black' }}
  >
    <Box.Header title={title.toUpperCase()} />
    <Box.Body>
      <Row>
        <Col sm={1}> {checkbox ? <Checkbox checked={checked} onChange={onCheckBoxToggle} /> : null}</Col>
        <Col sm={6}>{renderRight && renderRight()}</Col>
      </Row>
      {children}
    </Box.Body>
  </Box>
);
