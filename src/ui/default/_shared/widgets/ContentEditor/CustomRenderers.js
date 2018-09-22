import React from 'react';

export class LinkRenderer extends React.Component {
  render() {
    return <p className="link-wrapper">{this.props.children}</p>;
  }
}

export class ImageRenderer extends React.Component {
  render() {
    return <h1>IMAGE</h1>;
  }
}
