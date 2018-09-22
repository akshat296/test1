import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div className="input-group input-group-sm pull-right" style={{ width: 150 }}>
        <input
          type="text"
          name="table_search"
          className="form-control pull-right"
          onChange={this.props.onChange}
          value={this.props.search}
          placeholder="Search"
        />
        <div className="input-group-btn">
          <button type="submit" className="btn btn-default">
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
    );
  }
}
