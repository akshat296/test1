import React, { Component } from 'react';
const enhanceWithClickOutside = require('react-click-outside');

class GenericHeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleClickOutside() {
    this.setState({
      show: false
    });
  }

  render() {
    const HeaderMenuItem = this.props.renderItem;
    return (
      <li className={`dropdown ${this.props.className}`}>
        <a href="#" className="dropdown-toggle" onClick={e => this.setState({ show: !this.state.show })}>
          <i className={this.props.icon} />
          <span className={this.props.badgeClass}>{this.props.count}</span>
        </a>
        <ul style={{ display: this.state.show ? 'block' : 'none' }} className="dropdown-menu">
          <li className="header">{this.props.header}</li>
          <li>
            <ul className="menu">
              {this.props.items.map((item, index) => (
                <HeaderMenuItem key={index} item={item} />
              ))}
            </ul>
          </li>
          <li className="footer">
            <a href="#">{this.props.footer}</a>
          </li>
        </ul>
      </li>
    );
  }
}

export default enhanceWithClickOutside(GenericHeaderMenu);
