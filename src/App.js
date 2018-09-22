// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// AdminLTE
import './assets/less/AdminLTE.css';
// AdminLTE Skin
import './assets/less/skins/all-skins.css';
// Custom CSS
import './App.css';

// Datepicker
import 'react-datepicker/dist/react-datepicker.css';

import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Skin from './components/common/Utils/Skin';

import RootModule from './components/modules';

import createStore from './redux';
 import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const { store, persistor, history } = createStore({});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastContainer />
          <Skin>
            <ConnectedRouter history={history}>
              <Switch>
                {/* <Route exact path="/" render={() => <Redirect to="/dashboard" />} /> */}
                <Route path="/" component={RootModule} />
              </Switch>
            </ConnectedRouter>
          </Skin>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
