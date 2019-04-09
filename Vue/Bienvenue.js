import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import { AppRegistry, TextInput } from 'react-native';


import styles from './Bienvenue_styles'

export default class Bienvenue extends React.Component {
  static navigationOptions = { title: 'Bienvenue', header: null }; 
  constructor(props) {
    super(props);
    this.state = { Email: 'Email', Password: 'Password' };
  }

  Deconnexion = () => {
    this.props.navigation.navigate('Login')
  }

  ListeBadge = () => {
    this.props.navigation.navigate('Liste_Badge')
  }

  UserVote = () => {
    this.props.navigation.navigate('Select_User_Vote')
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.returnButton}>
          <TouchableOpacity onPress={this.Deconnexion}>
            <Image source={require('./../assets/Image/retour.png')}/>
          </TouchableOpacity>
        </View>
        <Image style={styles.pictureContener} source={require('./../assets/Image/connexion.png')}/>

        <View style={styles.container}>
          <Text style={styles.title}>Bienvenue Utilisateur</Text>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this.ListeBadge}>
            <Text>Liste des badges obtenus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.UserVote}>
            <Text>Voter</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text>Merci de vous connecter !</Text>
        </View>
      </View>
      
    );
  }
}