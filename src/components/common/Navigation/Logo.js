import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Logo = ({ tenantName, collapsed }) => (
  <Link to="/" className="logo" style={{ width: collapsed ? '100px' : '230px' }}>
    {/* mini logo for sidebar mini 50x50 pixels */}
    <span className="logo-mini">
      <b>HR</b>P
    </span>
    {/* logo for regular state and mobile devices */}
    <span className="logo-lg">{tenantName}</span>
  </Link>
);

const mapStateToProps = ({ userConfiguration }) => ({
  tenantName: userConfiguration.custom.tenantName
});

export default connect(mapStateToProps)(Logo);
