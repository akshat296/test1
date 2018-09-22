import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ app }) => {
  return {
    skin: app.skin
  };
};

const Skin = ({ skin, children }) => <div className={`${skin} fixed`}>{children}</div>;

export default connect(mapStateToProps)(Skin);
