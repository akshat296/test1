import React from 'react';
import { connect } from 'react-redux';
import NavItem from './navitem';
import MainSidebarNavItem from './MainSidebarNavItem';
import { user2 } from '../../../temp/images';

class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      navItems: [
        {
          displayName: 'Dashboard',
          to: '/dashboard',
          icon: 'fa fa-dashboard'
        },
        {
          displayName: 'Requests',
          to: '/requests',
          icon: 'fa fa-th-list'
        },
        {
          displayName: 'Messages',
          to: '/messages',
          icon: 'fa fa-comments-o',
          badges: [
            {
              text: 5,
              color: 'bg-blue'
            }
          ]
        },
        {
          displayName: 'Storage',
          icon: 'fa fa-archive',
          expanded: false,
          subnav: [
            {
              displayName: 'Pending Storage',
              to: '/storages/pending'
            },
            {
              displayName: 'Storage Tenants',
              to: '/storages/tenants'
            },
            {
              displayName: 'Storage',
              to: '/storages/storage'
            }
          ]
        },
        {
          displayName: 'Settings',
          icon: 'fa fa-cogs',
          expanded: false,
          subnav: [
            {
              displayName: 'General',
              to: '/settings/general/basic'
            },
            {
              displayName: 'Calculator',
              to: '/settings/calculator/calculator-settings'
            },
            {
              displayName: 'Template Builder',
              to: '/settings/template-builder'
            },
            {
              displayName: 'Long Distance',
              to: '/settings/long-distance'
            },
            {
              displayName: 'Account Page',
              to: '/settings/account-page'
            },
            {
              displayName: 'Departments',
              to: '/settings/departments'
            },
            {
              displayName: 'Miscellaneous',
              to: '/settings/miscellaneous'
            },
            {
              displayName: 'Inventory',
              to: '/settings/inventory'
            },
            {
              displayName: 'Lead Scorings',
              to: '/settings/lead-scorings'
            },
            {
              displayName: 'Notifications',
              to: '/settings/notifications'
            }
          ]
        },
        {
          displayName: 'Administration',
          icon: 'fa fa-wrench',
          expanded: false,
          subnav: [
            {
              displayName: 'Tenants',
              to: '/tenants',
              permission: 'Pages.Tenants'
            },
            {
              displayName: 'Users',
              to: '/administration/users'
            },
            {
              displayName: 'Roles',
              to: '/administration/roles'
            }
          ]
        }
      ]
    };
  }

  handleSubNavToggle({ displayName }) {
    const newNavItems = this.state.navItems.map(navItem => {
      if (navItem.displayName === displayName) {
        navItem.expanded = !navItem.expanded;
      } else {
        navItem.expanded = false;
      }
      return navItem;
    });
    this.setState({
      navItems: newNavItems
    });
  }

  render() {
    const showTenants = this.props.tenant ? false : true;
    const tenancyName = this.props.tenant ? this.props.tenant.tenancyName : 'Host';
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src={user2} className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>
                {this.props.user.name} ({this.tenancyName})
              </p>
              <a href="#">
                <i className="fa fa-circle text-success" /> Online
              </a>
            </div>
          </div>
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            {this.state.navItems.map((navItem, idx) => (
              <MainSidebarNavItem
                permissions={this.props.permissions}
                onToggleSubNav={() => this.handleSubNavToggle(navItem)}
                navItem={navItem}
                key={idx}
              />
            ))}
          </ul>
        </section>
      </aside>
    );
  }
}

const mapStateToProps = ({ session, configurations, tempData }) => ({
  tempData: tempData,
  tenant: session.tenant,
  user: session.user,
  permissions: configurations.auth.grantedPermissions
});

export default connect(mapStateToProps)(SideBar);
