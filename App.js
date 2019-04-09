import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./Vue/Login.js";
import Bienvenue from "./Vue/Bienvenue.js";

import Liste_Badge from "./Vue/Liste_Badge_Obtenue/Liste_Badge.js";
import Liste_User_Vote from "./Vue/Voter/Liste_User_Vote.js";
import Liste_Soft_Skill from "./Vue/Votation/Liste_Soft_Skill.js";

import Vote_User from "./Vue/Voter/Vote_User.js";

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  Bienvenue: { screen: Bienvenue},

  Liste_Badge: { screen: Liste_Badge},
  Liste_User_Vote: { screen: Liste_User_Vote},
  Liste_Soft_Skill: { screen: Liste_Soft_Skill},


});

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
