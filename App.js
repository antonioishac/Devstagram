import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';
import Preload from './src/Preload';

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const AppNavigator = createStackNavigator({
  preload: {
    screen:Preload
  }
});

const AppNav = createAppContainer(AppNavigator);

export default class App extends Component {

  render() {
    return(

      <Provider store={store}>
        <AppNav />
      </Provider>

    );
  }

}