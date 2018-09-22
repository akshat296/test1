import React, { Component } from 'react';

export default class EditableCell extends Component {
  render() {
    return (
      <input
        type="text"
        name={this.props.cellData.type}
        id={this.props.cellData.id}
        value={this.props.cellData.value}
        onChange={this.props.onProductTableUpdate}
      />
    );
  }
}
