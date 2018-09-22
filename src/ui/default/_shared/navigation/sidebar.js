import React from 'react';
import { connect } from 'react-redux';
import NavItem from './navitem';
import { Translate } from 'modules/_shared';
import UserImage160x160 from 'assets/alt/img/user2-160x160.jpg';
import { ChangeLanguage } from 'modules/_shared';

const SideBar = props => {
  const showTenants = props.tenant ? false : true;
  const tenancyName = props.tenant ? props.tenant.tenancyName : 'Host';
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img src={UserImage160x160} className="img-circle" alt="User Image" />
          </div>
          <div className="pull-left info">
            <p>
              {props.user.name} ({tenancyName})
            </p>
            <a href="#">
              <i className="fa fa-circle text-success" /> Online
            </a>
          </div>
        </div>
        <form action="#" method="get" className="sidebar-form">
          <div>
            <ChangeLanguage />
          </div>
        </form>
        <ul className="sidebar-menu" data-widget="tree">
          <li className="header">MAIN NAVIGATION</li>
          <NavItem to={'/dashboard'}>
            <i className="fa fa-dashboard" />
            <Translate resource="Elromco.Dashboard.Dashboard" />
          </NavItem>
          {showTenants && (
            <NavItem to={'/tenants'}>
              <i className="fa fa-building-o" />
              <Translate resource="Elromco.Tenants.Tenants" />
            </NavItem>
          )}
          <NavItem to={'/users'}>
            <i className="fa fa-users" />
            <Translate resource="Elromco.Tenants.Tenants" />
          </NavItem>
          <NavItem to={'/roles'}>
            <i className="fa fa-user-circle" />
            <Translate resource="Elromco.Users.Users" />
          </NavItem>

          {/* request */}
          <li className="treeview menu-open">
            <a href="#">
              <i className="fa fa-folder" />
              <span>Requests</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right" />
              </span>
            </a>
            <ul className="treeview-menu" style={{ display: 'block' }}>
              <NavItem to={'/requests'}>
                <i className="fa fa-user-circle" />
                Want To Book
              </NavItem>
            </ul>
          </li>

          <NavItem to={'/settings/general/basic'}>
            <i className="fa fa-cog" />
            General Settings
          </NavItem>
          <NavItem to={'/departments'}>
            <i className="fa fa-user-circle" />
            <Translate resource="Elromco.Departments.Departments" />
          </NavItem>
          <NavItem to={'/messages'}>
            <i className="fa fa-user-circle" />
            <Translate resource="Elromco.Messages.Messages" />
          </NavItem>

          <li className="treeview menu-open">
            <a href="#">
              <i className="fa fa-folder" />
              <span>Storages</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right" />
              </span>
            </a>
            <ul className="treeview-menu" style={{ display: 'block' }}>
              <NavItem to={'/storages/pending'}>
                <i className="fa fa-user-circle" />
                <Translate resource="Elromco.Storages.PendingStorages.PendingStorages" />
              </NavItem>
              <NavItem to={'/storages/tenants'}>
                <i className="fa fa-user-circle" />
                <Translate resource="Elromco.Storages.StorageTenants.StorageTenants" />
              </NavItem>
              <NavItem to={'/storages/storage'}>
                <i className="fa fa-user-circle" />
                <Translate resource="Elromco.Storages.Storage.Storage" />
              </NavItem>
            </ul>
          </li>
        </ul>
      </section>
    </aside>
  );
};

const mapStateToProps = ({ session }) => ({
  tenant: session.tenant,
  user: session.user
});

export default connect(mapStateToProps)(SideBar);
