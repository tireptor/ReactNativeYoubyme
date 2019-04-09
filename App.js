import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./Vue/Login.js";
import Bienvenue from "./Vue/Bienvenue.js";
import Liste_Badge from "./Vue/Liste_Badge_Obtenue/Liste_Badge.js";
import Liste_User_Vote from "./Vue/Voter/Liste_User_Vote.js";
import Vote_User from "./Vue/Voter/Vote_User.js";

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  Bienvenue: { screen: Bienvenue},
  Liste_Badge: { screen: Liste_Badge},
  Liste_User_Vote: { screen: Liste_User_Vote},
  Vote_User: { screen: Vote_User}
});

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
