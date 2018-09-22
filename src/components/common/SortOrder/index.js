import React, { Component } from 'react';

export default class SortOrder extends Component {
  render() {
    return (
      <span className={'fa fa-fw fa-sort-alpha-' + this.props.value + ' pull-right'} onClick={this.props.onChange} />
    );
  }
}
