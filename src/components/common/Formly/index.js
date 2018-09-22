import React, { Component } from 'react';
import { Checkbox, ControlLabel, FormControl, HelpBlock, FormGroup, Glyphicon, Image, Radio } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import validate from '../../../validations';
import _ from 'lodash';

function FieldGroup({ id, label, help, feedback, validationState, ...props }) {
  return (
    <FormGroup controlId={id} validationState={validationState}>
      {label ? <ControlLabel>{label}</ControlLabel> : ''}
      {(props.type === 'text' || props.type === 'password') && <FormControl {...props} />}
      {props.type === 'textarea' && <FormControl {...props} componentClass={props.type} />}
      {props.type === 'number' && <FormControl {...props} />}
      {props.type === 'email' && <FormControl {...props} />}
      {props.type === 'checkbox' && <Checkbox {...props} />}
      {props.type === 'radio' && (
        <FormGroup {...props}>
          {props.options.map(value => (
            <Radio value={value} name={'radiogroup'}>
              {' '}
              {value}{' '}
            </Radio>
          ))}
        </FormGroup>
      )}
      {props.type === 'file' && <FormControl {...props} />}
      {props.type === 'src' && <FormControl {...props} />}
      {props.type === 'select' && (
        <FormControl {...props} componentClass={props.type}>
          <option value="" defaultValue>
            {' '}
            {'---SELECT---'}{' '}
          </option>
          {props.options.map(value => (
            <option key={value.id ? value.id : value.alhActivitySubTypeCode} value={value.name}>
              {value.name}
            </option>
          ))}
        </FormControl>
      )}
      {props.type === 'date' && <DatePicker {...props} />}
      {help && <HelpBlock>{help}</HelpBlock>}
      {feedback && (
        <FormControl.Feedback>
          <Glyphicon glyph={feedback} />
        </FormControl.Feedback>
      )}
    </FormGroup>
  );
}

const FieldTypes = {
  text: ({ ...props }) => <FieldGroup type="text" {...props} />,
  password: ({ ...props }) => <FieldGroup type="password" {...props} />,
  checkbox: ({ ...props }) => <FieldGroup type="checkbox" {...props} />,
  radio: ({ ...props }) => <FieldGroup type="radio" {...props} />,
  select: ({ ...props }) => <FieldGroup type="select" {...props} />,
  textarea: ({ ...props }) => <FieldGroup type="textarea" {...props} />,
  date: ({ ...props }) => <FieldGroup type="date" {...props} />,
  number: ({ ...props }) => <FieldGroup type="number" {...props} />,
  src: ({ ...props }) => <FieldGroup type="src" {...props} />,
  email: ({ ...props }) => <FieldGroup type="email" {...props} />,
  file: ({ ...props }) => <FieldGroup type="file" {...props} />
};
class Form extends Component {
  handleOnChange(key, val, schemaItem) {
    const model = this.generateModel(schemaItem, key, val);
    const modelState = this.generateModelState(model, key, val);
    this.props.onFormUpdate({
      model,
      modelState
    });
  }
  validate(showErrors) {
    const model = this.props.model;
    const modelState = this.generateModelState(model, null, null, showErrors);
    this.props.onFormUpdate({
      model,
      modelState
    });
    return _.flatten(
      Object.keys(modelState.fields).map(key => {
        return modelState.fields[key].errors;
      })
    );
  }

  // date_diff_indays(dt1, dt2, halfDay) {
  //   var leaveDays = Math.floor(
  //     (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
  //       Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
  //       (1000 * 60 * 60 * 24)
  //   );
  //   if (halfDay) return (leaveDays = leaveDays - 0.5);
  //   else return leaveDays;
  // }

  generateModel(schemaItem, key, val) {
    const model = { ...this.props.model };
    model[key] = val;
    // if (model['toDate'] && model['fromDate']) {
    //   model['leaveDays'] = this.date_diff_indays(
    //     new Date(model['fromDate']),
    //     new Date(model['toDate']),
    //     model['halfDay']
    //   );
    // }
    return model;
  }

  generateModelState(model, fieldKey, val, showErrors) {
    const modelState = { ...this.props.modelState };
    if (!modelState.fields) modelState.fields = {};

    this.props.schema.forEach(({ key, validationConstraints }) => {
      if (!modelState.fields[key]) modelState.fields[key] = {};
      if (fieldKey === key || showErrors) {
        modelState.fields[key].dirty = true;
      } else {
        modelState.fields[key].dirty = modelState.fields[key].dirty;
      }
      const errors = validate(model, { [key]: validationConstraints });
      if (errors) {
        modelState.fields[key].invalid = true;
        modelState.fields[key].errors = errors[key];
      } else {
        modelState.fields[key].invalid = false;
        modelState.fields[key].errors = [];
      }
    });
    return modelState;
  }

  // generateModelState(key, val, schemaItem) {
  //   const modelState = { ...this.props.modelState };
  //   modelState.dirty = true;
  //   if (!modelState.fields) modelState.fields = {};
  //   if (!modelState.fields[key]) modelState.fields[key] = {};
  //   modelState.fields[key].dirty = true;
  //   const errors = validate(
  //     { [key]: val },
  //     { [key]: schemaItem.validationConstraints }
  //   );
  //   if (errors) {
  //     modelState.fields[key].invalid = true;
  //     modelState.fields[key].errors = errors[key];
  //   } else {
  //     modelState.fields[key].invalid = false;
  //     modelState.fields[key].errors = [];
  //   }
  //   return modelState;
  // }

  getValidationState(key) {
    if (
      this.props.modelState.fields &&
      this.props.modelState.fields[key] &&
      this.props.modelState.fields[key].dirty &&
      this.props.modelState.fields[key].errors.length > 0
    ) {
      return 'error';
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.props.schema.map(schemaItem => {
          const Component = FieldTypes[schemaItem.type];
          const model = this.props.model[schemaItem.key];
          const modelState = this.props.modelState.fields && this.props.modelState.fields[schemaItem.key];
          const err = modelState && modelState.errors && modelState.errors.length > 0 ? modelState.errors[0] : '';
          return !schemaItem.hidden ? (
            <Component
              validationState={this.getValidationState(schemaItem.key)}
              key={schemaItem.key}
              id={schemaItem.key}
              name={schemaItem.key}
              label={schemaItem.label}
              style={schemaItem.style}
              placeholder={schemaItem.placeholder}
              help={schemaItem.help ? schemaItem.help : err}
              feedback={schemaItem.feedback}
              value={model}
              readOnly={schemaItem.readOnly}
              disabled={schemaItem.disabled}
              options={schemaItem.options}
              checked={schemaItem.type === 'checkbox' ? model : ''}
              onChange={e => {
                this.handleOnChange(
                  schemaItem.key,
                  e.target ? (schemaItem.type === 'checkbox' ? e.target.checked : e.target.value) : e._d.toString(),
                  schemaItem
                );
              }}
            />
          ) : null;
        })}
      </React.Fragment>
    );
  }
}
export default Form;
