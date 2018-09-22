import React from 'react';
import { Row, Col, Pager } from 'react-bootstrap';

export default class PageSwitcher extends React.Component {
  state = {
    active: 0
  };

  changeActivePage = type => {
    this.setState(
      state => {
        const active = type === 'prev' ? state.active - 1 : state.active + 1;
        return { ...state, active };
      },
      () => {
        type === 'prev'
          ? (this.props.onPrevClick || (() => {}))(this.state.active)
          : (this.props.onNextClick || (() => {}))(this.state.active);
      }
    );
  };

  render() {
    const { pages, ...props } = this.props;
    const ActivePage = pages[this.state.active];

    return (
      <React.Fragment>
        <Row>
          <Col sm={12}>
            <Pager>
              <Pager.Item
                previous
                disabled={this.state.active === 0}
                onClick={() => this.changeActivePage('prev')}
                href="#"
              >
                Previous
              </Pager.Item>
              <Pager.Item
                next
                disabled={this.state.active === pages.length - 1}
                onClick={() => this.changeActivePage('next')}
                href="#"
              >
                Next
              </Pager.Item>
            </Pager>
          </Col>
        </Row>
        <ActivePage {...props} />
      </React.Fragment>
    );
  }
}
