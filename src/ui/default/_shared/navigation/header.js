import React from 'react';
import { connect } from 'react-redux';
import { user2 } from '../../../temp/images';
import { setTempData } from '../../../../redux/actions/tempData';

const Header = props => {
  const tenantName = props.tenant ? props.tenant.name : 'Host';

  const toggleSidebar = () => {
    if (props.sidebarCollapsed) {
      props.openSidebar();
    } else {
      props.closeSidebar();
    }
  };

  return (
    <header className="main-header">
      {/* Logo */}
      <a href={'/dashboard'} className="logo">
        {/* mini logo for sidebar mini 50x50 pixels */}
        <span className="logo-mini">{tenantName.slice(0, 3)}</span>
        {/* logo for regular state and mobile devices */}
        <span className="logo-lg">
          <b>{tenantName}</b>
        </span>
      </a>
      {/* Header Navbar: style can be found in header.less */}
      <nav className="navbar navbar-static-top">
        {/* Sidebar toggle button*/}
        <a onClick={toggleSidebar} className="sidebar-toggle" data-toggle="push-menu" role="button">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </a>
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            {/* Messages: style can be found in dropdown.less*/}
            <li className="dropdown messages-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-envelope-o" />
                <span className="label label-success">4</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 4 messages</li>
                <li>
                  {/* inner menu: contains the actual data */}
                  <ul className="menu">
                    <li>
                      {/* start message */}
                      <a href="#">
                        <div className="pull-left">
                          <img src={user2} className="img-circle" alt="User Image" />
                        </div>
                        <h4>
                          Support Team
                          <small>
                            <i className="fa fa-clock-o" /> 5 mins
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>
                    {/* end message */}
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">See All Messages</a>
                </li>
              </ul>
            </li>
            {/* Notifications: style can be found in dropdown.less */}
            <li className="dropdown notifications-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-bell-o" />
                <span className="label label-warning">10</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 10 notifications</li>
                <li>
                  {/* inner menu: contains the actual data */}
                  <ul className="menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-users text-aqua" /> 5 new members joined today
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">View all</a>
                </li>
              </ul>
            </li>
            {/* Tasks: style can be found in dropdown.less */}
            <li className="dropdown tasks-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-flag-o" />
                <span className="label label-danger">9</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 9 tasks</li>
                <li>
                  {/* inner menu: contains the actual data */}
                  <ul className="menu">
                    <li>
                      {/* Task item */}
                      <a href="#">
                        <h3>
                          Design some buttons
                          <small className="pull-right">20%</small>
                        </h3>
                        <div className="progress xs">
                          <div
                            className="progress-bar progress-bar-aqua"
                            style={{ width: '20%' }}
                            role="progressbar"
                            aria-valuenow={20}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">20% Complete</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* end task item */}
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">View all tasks</a>
                </li>
              </ul>
            </li>
            {/* User Account: style can be found in dropdown.less */}
            <li className="dropdown user user-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img src={user2} className="user-image" alt="User Image" />
                <span className="hidden-xs">{props.user.name}</span>
              </a>
              <ul className="dropdown-menu">
                {/* User image */}
                <li className="user-header">
                  <img src={user2} className="img-circle" alt="User Image" />
                  <p>{props.user.name}</p>
                </li>
                {/* Menu Body */}
                <li className="user-body">
                  <div className="row">
                    <div className="col-xs-4 text-center">
                      <a href="#">Followers</a>
                    </div>
                    <div className="col-xs-4 text-center">
                      <a href="#">Sales</a>
                    </div>
                    <div className="col-xs-4 text-center">
                      <a href="#">Friends</a>
                    </div>
                  </div>
                  {/* /.row */}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = ({ session, configurations, app, tempData }) => ({
  tenant: session.tenant,
  user: session.user,
  languages: configurations.localization.languages,
  currentLanguage: app.language,
  sidebarCollapsed: tempData.sidebarCollapsed
});

const mapDispatchToProps = dispatch => ({
  closeSidebar: () => dispatch(setTempData({ key: 'sidebarCollapsed', val: true })),
  openSidebar: () => dispatch(setTempData({ key: 'sidebarCollapsed', val: false }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
