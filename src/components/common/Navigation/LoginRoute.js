import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';

const LoginRoute = ({ component: Component, userData, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!userData || !Object.keys(userData).length) {
        return <Component {...props} />;
      } else {
        return (
          <Redirect
            to={{
              pathname: '/'
            }}
          />
        );
      }
    }}
  />
);

const mapStateToProps = ({ app }) => ({
  userData: app.userData
});

export default connect(
  mapStateToProps,
  null,
  null,
  {
    pure: false
  }
)(LoginRoute);
