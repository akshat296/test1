import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppActions from '../../../redux/app';
import Logo from './Logo';

import UserImage160x160 from '../../../assets/img/user2-160x160.jpg';

import UserMenu from './UserMenu';
import GenericHeaderMenu from './GenericHeaderMenu';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserMenu: false,
      messages: [
        {
          id: 1,
          from: 'Support Team',
          body: 'Why not buy a new awesome theme?',
          fromPic: UserImage160x160
        },
        {
          id: 2,
          from: 'AdminLTE Design Team',
          body: 'Why not buy a new awesome theme?',
          fromPic: UserImage160x160
        },
        {
          id: 3,
          from: 'Developer Team',
          body: 'Why not buy a new awesome theme?',
          fromPic: UserImage160x160
        },
        {
          id: 4,
          from: 'John Doe',
          body: 'Why not buy a new awesome theme?',
          fromPic: UserImage160x160
        },
        {
          id: 5,
          from: 'Jane Doe',
          body: 'Why not buy a new awesome theme?',
          fromPic: UserImage160x160
        },
        {
          id: 6,
          from: 'Jane Doe',
          body: 'Why not buy a new awesome theme?',
          fromPic: UserImage160x160
        }
      ],
      notifications: [
        {
          iconClass: 'fa fa-users text-aqua',
          body: 'Very long description here that may not fit into the page and may cause design problems'
        },
        {
          iconClass: 'fa fa-shopping-cart text-yellow',
          body: 'Very long description here that may not fit into the page and may cause design problems'
        },
        {
          iconClass: 'fa fa-user text-red',
          body: 'Very long description here that may not fit into the page and may cause design problems'
        },
        {
          iconClass: 'fa fa-shopping-cart text-green',
          body: 'Very long description here that may not fit into the page and may cause design problems'
        },
        {
          iconClass: 'fa fa-user text-red',
          body: 'Very long description here that may not fit into the page and may cause design problems'
        },
        {
          iconClass: 'fa fa-user text-red',
          body: 'Very long description here that may not fit into the page and may cause design problems'
        }
      ]
    };
  }

  renderMessagesMenuItem({ item }) {
    return (
      <li>
        <a href="#">
          <div className="pull-left">
            <img src={item.fromPic} className="img-circle" alt="User Image" />
          </div>
          <h4>
            {item.from}
            <small>
              <i className="fa fa-clock-o" /> 5 mins
            </small>
          </h4>
          <p>{item.body}</p>
        </a>
      </li>
    );
  }

  renderNotificationsMenu({ item }) {
    return (
      <li>
        <a href="#">
          <i className={`${item.iconClass}`} /> {item.body}
        </a>
      </li>
    );
  }

  render() {
    return (
      <header className="main-header">
        <Logo collapsed={this.props.collapsed} />
        {/* Header Navbar: style can be found in header.less */}
        <nav className="navbar navbar-static-top" style={{ marginLeft: this.props.collapsed ? '100px' : '230px' }}>
          {/* Sidebar toggle button*/}
          <a
            href="#"
            className="sidebar-toggle"
            onClick={this.props.toggleCollapse}
            data-toggle="push-menu"
            role="button"
          >
            <span className="sr-only">Toggle navigation</span>
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <GenericHeaderMenu
                badgeClass="label label-success"
                count={this.state.messages.length}
                icon="fa fa-envelope-o"
                className="messages-menu"
                header={`You have ${this.state.messages.length} messages`}
                footer="See All Messages"
                items={this.state.messages}
                renderItem={this.renderMessagesMenuItem}
              />
              <GenericHeaderMenu
                badgeClass="label label-danger"
                count={this.state.notifications.length}
                icon="fa fa-bell-o"
                className="notifications-menu"
                header={`You have ${this.state.notifications.length} notifications`}
                footer="View All"
                items={this.state.notifications}
                renderItem={this.renderNotificationsMenu}
              />
              <UserMenu name={this.props.userData.name} image={UserImage160x160} onLogOutClick={this.props.logout} />
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = ({ app }) => {
  return {
    userData: app.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(AppActions.logoutRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
