import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, userData, render, ...rest }) => {
  const RendererComponent = render;
  return (
    <Route
      {...rest}
      render={props => {
        if (userData && Object.keys(userData).length) {
          return render ? <RendererComponent {...props} /> : <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          );
        }
      }}
    />
  );
};

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
)(PrivateRoute);
