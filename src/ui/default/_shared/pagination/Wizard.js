import React from 'react';
import './Wizard.scss';
import { Row, Col } from 'react-bootstrap';

const Icon = ({ selected, title, index, onClick, canSwitch, onInterChangeIconClick }) => (
  <React.Fragment>
    <Col sm={2} className="text-center">
      <p>
        <b> {title.toUpperCase()} </b>
      </p>
      <i
        onClick={onClick}
        className={
          !selected
            ? 'fa fa-circle-thin wizard-icon wizard-unselected'
            : 'fa fa-check-circle wizard-icon wizard-selected'
        }
      />
    </Col>
    <Col sm={1} className="text-center">
      {canSwitch && <i className="fa fa-exchange pointer" onClick={() => onInterChangeIconClick(index)} />}
    </Col>
  </React.Fragment>
);

class Wizard extends React.Component {
  state = {
    active: 0,
    childrenLists: []
  };

  handleClick = index => {
    this.setState({
      active: index
    });
  };

  componentWillMount() {
    const { children } = this.props;
    let childrenLists = [];
    if (Array.isArray(children)) {
      childrenLists = children;
    } else {
      childrenLists = [children];
    }
    this.setState({
      childrenLists
    });
  }

  handleInterChange = index => {
    const childrenLists = this.state.childrenLists.slice();
    const elm = childrenLists[index];
    //   debugger;
    childrenLists[index] = {
      ...childrenLists[index + 1],
      props: { ...childrenLists[index + 1].props, canSwitch: true }
    };
    childrenLists[index + 1] = { ...elm, props: { ...elm.props, canSwitch: false } };
    this.setState(
      {
        childrenLists
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    const { children, ...props } = this.props;

    const ActiveChild = this.state.childrenLists[this.state.active].props.Component;
    return (
      <React.Fragment>
        <Row className="form-group">
          {this.state.childrenLists.map(({ props }, i) => (
            <Icon
              key={i}
              index={i}
              onInterChangeIconClick={this.handleInterChange}
              onClick={() => this.handleClick(i)}
              canSwitch={props.canSwitch}
              selected={this.state.active >= i}
              title={props.title}
            />
          ))}
        </Row>
        <ActiveChild {...props} />
      </React.Fragment>
    );
  }
}

const Page = ({ title, Component }) => <React.Fragment />;

export default Object.assign(Wizard, {
  Page
});
