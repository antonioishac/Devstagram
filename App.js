import React, { Component } from 'react';
//import { Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';
import Preload from './src/screens/Preload';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

console.disableYellowBox = true;

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const AppNavigator = createStackNavigator({
  preload: {
    screen:Preload
  },
  Home: {
    screen:Home
  },
  Login: {
    screen: Login
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