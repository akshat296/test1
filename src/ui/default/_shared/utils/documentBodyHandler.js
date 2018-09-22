import React from 'react';

export default class DocumentBodyHandler extends React.Component {
  componentDidMount() {
    document.body.classList.add(this.props.className);
  }
  componentWillUnmount() {
    document.body.classList.remove(this.props.className);
  }
  render() {
    return this.props.children;
  }
}
