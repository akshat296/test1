import React, { Component } from 'react';

export default class Select extends Component {
  render() {
    let options;
    let test = false;
    if (this.props.options !== null && this.props.options.designations !== null && this.props.options.designations) {
      options = this.props.options.departments.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      });
      test = true;
    }
    if (this.props.options !== null && test === false) {
      options = this.props.options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      });
    }

    return (
      <div className="col-sm-3">
        <div className="pull-left" style={{ width: 300 }} id="example1_length">
          <label style={{ marginRight: 5 }}>{this.props.label}</label>
          <select
            name="example1_length"
            aria-controls="example1"
            className="input-sm"
            style={{
              background: 'white',
              marginRight: '3px',
              marginLeft: '3px',
              borderColor: '#d2d6de'
            }}
            onChange={this.props.onChange}
          >
            {options}
          </select>
        </div>
      </div>
    );
  }
}
