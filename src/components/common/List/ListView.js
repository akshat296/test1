import React, { Component } from 'react';

export default class ListView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderHeader = () =>
      this.props.columns && this.props.columns.map((c, idx) => this.props.renderHeaderCell(c, idx));

    return (
      <table className={`table ${this.props.className}`}>
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>
          {this.props.data && this.props.data.map((r, index) => this.props.renderRow(r, this.props.columns, index))}
        </tbody>
      </table>
    );
  }

  // render() {
  //   return <ul className="products-list product-list-in-box">{this.props.renderList}</ul>;
  // }
}
