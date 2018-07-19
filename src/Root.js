import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configure';
import FramesAppDrawer from './frames/App/Drawer';

class Root extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <FramesAppDrawer />
      </Provider>
    );
  }
}

export default Root;
