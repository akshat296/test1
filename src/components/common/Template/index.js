import React, { Component } from 'react';
import { connect } from 'react-redux';
import Handlebars from 'handlebars';
import Parser from 'html-react-parser';

const obj = {};

class Template extends Component {
  templateReplaceFn = domNode => {
    if (domNode.attribs && domNode.attribs.id === 'App_Link') {
      const linkItems =
        this.props.keys &&
        this.props.keys.App_Link.length > 0 &&
        this.props.keys.App_Link.map((ele, i) => (
          <li
            className="leave-app-link"
            onClick={this.props.controlFunc}
            key={ele}
            id={ele}
            style={{ color: '#00c0ff' }}
          >
            {`LeaveApp${i + 1}`}
          </li>
        ));
      return (
        <React.Fragment>
          <ul>{linkItems}</ul>
          {domNode.children && domNode.children.length && domNode.children.map(child => this.templateReplaceFn(child))}
        </React.Fragment>
      );
    }
    if (domNode.attribs && domNode.attribs.id === 'List_Of_Cancel_Link') {
      const linkItems =
        this.props.keys &&
        this.props.keys.List_Of_Cancel_Link.length > 0 &&
        this.props.keys.List_Of_Cancel_Link.map((ele, i) => (
          <li
            className="leave-app-link"
            onClick={this.props.controlFunc}
            key={ele}
            id={ele}
            style={{ color: '#00c0ff' }}
          >
            {`LeaveApp${i + 1}`}
          </li>
        ));
      return (
        <React.Fragment>
          <ul>{linkItems}</ul>
          {domNode.children && domNode.children.length && domNode.children.map(child => this.templateReplaceFn(child))}
        </React.Fragment>
      );
    }

    if (domNode.attribs && domNode.attribs.id === 'List_of_App_Links') {
      const linkItems =
        this.props.keys &&
        this.props.keys.List_of_App_Links.length > 0 &&
        this.props.keys.List_of_App_Links.map((ele, i) => (
          <li
            className="leave-app-link"
            onClick={this.props.controlFunc}
            key={ele}
            id={ele}
            style={{ color: '#00c0ff' }}
          >
            {`LeaveApp${i + 1}`}
          </li>
        ));
      return (
        <React.Fragment>
          <ul>{linkItems}</ul>
          {domNode.children && domNode.children.length && domNode.children.map(child => this.templateReplaceFn(child))}
        </React.Fragment>
      );
    }

    if (domNode.attribs && domNode.attribs.id === 'Leave_Id') {
      const linkItems =
        this.props.keys &&
        this.props.keys.Leave_Id.length > 0 &&
        this.props.keys.Leave_Id.map((ele, i) => (
          <li
            className="leave-app-link"
            key={ele}
            onClick={this.props.controlFunc}
            id={ele}
            style={{ color: '#00c0ff' }}
          >
            {`LeaveApp${i + 1}`}
          </li>
        ));
      return (
        <React.Fragment>
          <ul>{linkItems}</ul>
          {domNode.children && domNode.children.length && domNode.children.map(child => this.templateReplaceFn(child))}
        </React.Fragment>
      );
    }
    if (domNode.type === 'text') {
      return <span> {domNode.data} </span>;
    }
    if (domNode.children && domNode.children.length) {
      return domNode.children.map(child => this.templateReplaceFn(child));
    }
  };

  render() {
    this.props.tempId
      ? (this.template = Handlebars.compile(obj[this.props.tempId]))
      : (this.template = Handlebars.compile(this.props.exceptionTemplate));
    const template = this.template(this.props.keys);
    return Parser(`<p>${template}</p>`, {
      replace: this.templateReplaceFn
    });
    // return <span key={Math.random()}>{this.template(this.props.keys)}</span>;
  }
}

const mapStateToProps = ({ template }) => {
  template.map(t => {
    obj[t.type] = t.content;
  });
  return {
    obj
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Template);
