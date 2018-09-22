import React from 'react';
import { FormControl, ControlLabel, HelpBlock, FormGroup } from 'react-bootstrap';

// TODO: Find better name than form.
export default function({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
