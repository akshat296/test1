import React from 'react';
import { connect } from 'react-redux';
import LeftSideBarActions from '../../redux/leftSideBar';
import PrivateRoute from '../common/Navigation/PrivateRoute';
import { Route, Switch } from 'react-router';
import Loader from '../common/PageLoader';
import PageNotFound from '../common/PageNotFound';

const ModuleRoute = ({ path, component, module, exact }) => <React.Fragment />;
const ModuleSubRoute = ({ path, component, subModule, exact }) => <React.Fragment />;

class AsyncModuleLoader extends React.Component {
  state = {
    component: null,
    parent: ({ children }) => <React.Fragment> {children} </React.Fragment>
  };

  async componentDidMount() {
    let parent = this.state.parent;
    if (this.props.loadParent) {
      parent = await this.props.loadParent();
      parent = parent.default;
    }
    const component = await this.props.loadComponent();
    this.setState({
      parent: parent,
      component: component.default
    });
  }

  render() {
    const C = this.state.component;
    const P = this.state.parent;
    return C ? (
      <P {...this.prop}>
        {' '}
        <C {...this.props} />{' '}
      </P>
    ) : (
      <Loader />
    );
  }
}

const getRoutes = (sideBarMenu, routes, modulesToLoad) => {
  if (!routes.length) {
    routes = [routes];
  }
  const mapping = routes.reduce((prev, route) => {
    const { module, path, exact, component, children } = route.props;
    if (sideBarMenu[module] && !sideBarMenu[module].hidden) {
      if (exact) {
        prev.push(
          <PrivateRoute
            path={path}
            key={prev.length}
            exact
            render={props => <AsyncModuleLoader {...props} loadComponent={modulesToLoad[component]} />}
          />
        );
      } else {
        const subRoutes = children instanceof Array ? children : [children];
        const ParentComponent = modulesToLoad[component];
        subRoutes.forEach(subRoute => {
          const { subModule, path: subPath, exact, component: subComponent } = subRoute.props;

          if (sideBarMenu[module] && sideBarMenu[module].properties[subModule] !== 'H') {
            prev.push(
              <PrivateRoute
                path={`${path}${subPath}`}
                key={prev.length}
                exact
                render={props => (
                  <AsyncModuleLoader
                    {...props}
                    loadParent={ParentComponent}
                    loadComponent={modulesToLoad[subComponent]}
                  />
                )}
              />
            );
          }
        });
      }
    }
    return prev;
  }, []);
  mapping.push(<Route key={mapping.length} component={PageNotFound} />);
  return mapping;
};

class ModuleLoader extends React.Component {
  state = {
    mapping: []
  };

  componentDidMount() {
    if (Object.keys(this.props.userData).length) {
      this.props.leftSideBar();
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log(this.props, nextProps)
    if (Object.keys(nextProps.userData).length && !Object.keys(this.props.userData).length) {
      this.props.leftSideBar();
    }
    if (!nextProps.processing && Object.keys(nextProps.sideBarMenu).length && !this.state.mapping.length) {
      const mapping = getRoutes(nextProps.sideBarMenu, this.props.children, this.props.modulesToLoad);
      this.setState({
        mapping
      });
    }
  }

  render() {
    return Object.keys(this.props.userData).length && this.state.mapping.length ? (
      <Switch>{this.state.mapping}</Switch>
    ) : null;
  }
}

const mapStateToProps = state => ({
  sideBarMenu: state.leftSideBar || [],
  processing: state.leftSideBar || false,
  //   redirectToReferrer: state.login.redirectToReferrer,
  userData: state.app.userData || {}
});

const mapDispatch = dispatch => ({
  leftSideBar: () => dispatch(LeftSideBarActions.leftSideBarRequest())
});

export default Object.assign(
  connect(
    mapStateToProps,
    mapDispatch
  )(ModuleLoader),
  {
    Route: ModuleRoute,
    SubRoute: ModuleSubRoute
  }
);
