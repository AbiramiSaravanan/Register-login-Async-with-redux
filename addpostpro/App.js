import React, { Component } from 'react'
import Login from './Login';
import Registration from './Registration';
import { Provider } from "react-redux";
import store from "./Store";

import {View} from 'react-native';
//import AppContainer from './Login'
import {createAppContainer, createStackNavigator} from 'react-navigation'

const Rootstack = createStackNavigator({
  login: Login,
  registration: Registration,
  
},
{ 
  initialRouteName: 'login',
}

);


const AppContainer = createAppContainer(Rootstack);

export default class App extends Component {
   
  render() {
    return (
      <Provider store={store}>
    <AppContainer />
    </Provider>
    )
  }
}


