import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./Vue/Login.js";
import Bienvenue from "./Vue/Bienvenue.js";
import Liste_Badge from "./Vue/Liste_Badge.js";

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  Bienvenue: { screen: Bienvenue},
  Liste_Badge: { screen: Liste_Badge}
});

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
