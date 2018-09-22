import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserImage160x160 from '../../../assets/img/user2-160x160.jpg';
import AppActions from '../../../redux/app';
import NavItem from './NavItem';
import LeftSideBarActions from '../../../redux/leftSideBar';
import { Col, Row } from 'react-bootstrap';
import { Route } from 'react-router-dom';

class LeftSideBar extends Component {
  state = {
    show: false,
    menuIndex: 0,
    menuAdded: false
  };

  handleMenuClick = index => {
    let newIndex = index === this.state.menuIndex ? null : index;
    this.setState(
      {
        menuIndex: newIndex
      },
      () => {
        console.log(this.state);
      }
    );
  };

  moduleRouteMapping = {
    'Attendance/Leave': '/leaves',
    Organization: '/organization',
    People: '/people',
    Setup: '/setup'
  };

  routeMapping = {
    'Actions Needed': '#',
    'Approval Requests': '/leaves/applications',
    Dashboard: '/leaves',
    History: '/leaves/activity',
    Holidays: '/leaves/holidays',
    'To Be Approved': '/leaves/applications',
    'Fiscal Year': '/organization/fiscal',
    'Legal Entities': '/organization/legalentities',
    'Organization Unit': '/organization/orgUnit',
    'Organization Unit Type': '/organization/unittype',
    Organizations: '/organization',
    WorkPlace: '/organization/workplace',
    Employees: '/people/employees',
    'Assign Role': '/setup/person',
    Profiles: '/people/profiletypes',
    'Roles Constraint': '/setup/roles-constraint',
    'Role-Permission': '/setup/permission',
    'Permission Details': '/setup/permission-details',
    'Activity SubType': '/setup/activity-type',
    'Credit-Approval': '/leaves/credit-approval',
    Policy: '/setup/policy',
    'Exception Resolution': '/leaves/exceptions'
  };

  componentWillMount() {
    // this.props.leftSideBarRequest();
  }

  checkIfActive = i => i === this.state.menuIndex;

  changeActiveIndex = (match, index) => {
    if (match && index !== this.state.menuIndex && !this.state.menuAdded) {
      this.setState({
        menuIndex: index,
        menuAdded: true
      });
    }
    return true;
  };

  render() {
    let sideBar = this.props.sideBarMenu ? this.props.sideBarMenu : {};
    return (
      // TODO: Fix css for font awesome icons ('far')
      <aside className="main-sidebar" style={{ width: this.props.collapsed ? '100px' : '230px' }}>
        <section className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel">
            <div className="pull-left image">
              <img src={UserImage160x160} className="img-circle" alt="User Image" />
              {/* <img src={UserImage160x160} className="img-circle" alt="User Image" /> */}
            </div>
            <div className="pull-left info">
              {/* <p>{props.userData.name}</p> */}
              <a href="#">
                <i className="fa fa-circle text-success" /> Online
              </a>
            </div>
          </div>
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..." />
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                  <i className="fa fa-search" />
                </button>
              </span>
            </div>
          </form>
          <ul className="sidebar-menu" style={{ width: '100%' }} data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li>
              {Object.keys(sideBar).map(
                (menuKey, i) =>
                  sideBar[menuKey].hidden ? (
                    <React.Fragment key={i} />
                  ) : (
                    <Route
                      key={i}
                      path={this.moduleRouteMapping[menuKey]}
                      children={({ match }) =>
                        this.changeActiveIndex(match, i) && (
                          <React.Fragment>
                            <Row
                              className={['sidebar-item', this.checkIfActive(i) ? 'item-active' : ''].join(' ')}
                              onClick={() => this.handleMenuClick(i)}
                            >
                              <Col sm={1}>
                                <i className="fa fa-dashboard" style={{ marginRight: '10px' }} />
                              </Col>
                              <Col sm={6} className="menu-font">
                                {menuKey.toUpperCase()}
                              </Col>
                              <Col sm={3} className="pull-right">
                                <i
                                  className={['fa', this.checkIfActive(i) ? 'fa-chevron-down' : 'fa-chevron-up'].join(
                                    ' '
                                  )}
                                />
                              </Col>
                            </Row>

                            {this.checkIfActive(i) && (
                              <ul className="treeview menu-open">
                                {sideBar[menuKey]['properties']
                                  ? Object.keys(sideBar[menuKey]['properties']).map((subMenu, i) => {
                                      if (sideBar[menuKey]['properties'][subMenu] == 'V') {
                                        return subMenu == 'To Be Approved' ? (
                                          <NavItem
                                            className="sidemenu-subItem"
                                            key={i}
                                            to={{
                                              pathname: this.routeMapping[subMenu] ? this.routeMapping[subMenu] : '#',
                                              state: { key: 'ToBeApproved' }
                                            }}
                                            className="treeview-menu"
                                            exact={true}
                                          >
                                            {subMenu}
                                          </NavItem>
                                        ) : (
                                          <NavItem
                                            key={i}
                                            to={this.routeMapping[subMenu] ? this.routeMapping[subMenu] : ''}
                                            className="treeview-menu"
                                            exact={true}
                                          >
                                            {subMenu}
                                          </NavItem>
                                        );
                                      }
                                    })
                                  : ''}
                              </ul>
                            )}
                          </React.Fragment>
                        )
                      }
                    />
                  )
              )}
            </li>
          </ul>
        </section>
      </aside>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.app.userData,
    sideBarMenu: state.leftSideBar.sideBarMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(AppActions.logoutRequest());
    },
    leftSideBarRequest: () => {
      dispatch(LeftSideBarActions.leftSideBarRequest());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftSideBar);
