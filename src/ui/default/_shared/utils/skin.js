import React from 'react';
import { connect } from 'react-redux';

const Skin = ({ scheme, children, sidebarCollapsed }) => (
  <div className={`skin-${scheme} fixed sidebar-mini ${sidebarCollapsed ? 'sidebar-collapse' : ''}`}>{children}</div>
);

const mapStateToProps = ({ configurations, tempData }) => {
  return {
    scheme: configurations.setting.values['Tenant.Skin'],
    sidebarCollapsed: tempData.sidebarCollapsed ? true : false
  };
};

export default connect(mapStateToProps)(Skin);
