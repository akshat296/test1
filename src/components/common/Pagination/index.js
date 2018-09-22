import React from 'react';

class Pagination extends React.Component {
  render() {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.totalCount / this.props.maxPerPage); i++) {
      pageNumbers.push(i);
    }
    const len = pageNumbers.length;
    if (pageNumbers.length <= 1) {
      return null;
    } else if (len > 3) {
      return (
        <div className="pagination pagination-sm inline">
          <li key={this.props.active - 1} onClick={this.props.controlFunc}>
            <a id={this.props.active - 1}>«</a>
          </li>
          <li key={this.props.active} onClick={this.props.controlFunc}>
            <a id={this.props.active}>{this.props.active}</a>
          </li>
          <li key={parseInt(this.props.active) + parseInt(1)} onClick={this.props.controlFunc}>
            <a id={parseInt(this.props.active) + parseInt(1)}>»</a>
          </li>
        </div>
      );
    } else {
      return (
        <div className="pagination pagination-sm inline">
          {pageNumbers.map(number => {
            return (
              <li key={number} onClick={this.props.controlFunc}>
                <a id={number}>{number}</a>
              </li>
            );
          })}
        </div>
      );
    }
  }
}
export default Pagination;
