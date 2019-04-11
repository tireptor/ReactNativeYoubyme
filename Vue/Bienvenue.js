import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, AsyncStorage  } from 'react-native';
import { AppRegistry, TextInput } from 'react-native';
import Avatar from './Avatar/Avatar.js';


import styles from './Bienvenue_styles'

export default class Bienvenue extends React.Component {
  static navigationOptions = { title: 'Bienvenue', header: null }; 
  constructor(props) {
    super(props);
    this.state = { Email: 'Email', Password: 'Password', nom : '', id_user: '' };
    this._retrieveData()
  }
  _retrieveData = async (result) => {
    try {
      const value = await AsyncStorage.getItem('nom');
      if (value !== null) {
        this.setState({
          nom : value
        }
        ); 
      }
      const idUser = await AsyncStorage.getItem('id');
      if (idUser !== null) {
        this.setState({
          id_user : idUser
        }
        ); 
      }
    } catch (error) {
      console.log('erreur lors de la recuperation de donnee (retrieveDate)')
    }
  };
  Bidon = () => {
    return 'bidon'
  }
  Deconnexion = () => {
    this.props.navigation.navigate('Login')
  }

  ListeBadge = () => {
    this.props.navigation.navigate('Liste_Badge')
  }

  ListeSession = () => {
    this.props.navigation.navigate("Liste_Session", {
      id_user: this.state.id_user
    });
  }
  renderAvatar(avatarPath) {
    return <Avatar avatar_path={avatarPath} />;
  }  

  render() {
    const {nom} = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>      
        <View style={styles.returnButton}>
          <TouchableOpacity onPress={this.Deconnexion}>
            <Image source={require('./../assets/Image/retour.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          {this.renderAvatar('http://192.168.43.206:1337/images/images_youbyme/badge1.png')}
          
          <Text style={styles.title}>Bienvenue {nom}</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this.ListeBadge}>
            <Text>Liste des badges obtenus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.ListeSession}>
            <Text>Voter</Text>
          </TouchableOpacity>
        </View>       
        <Text>Merci de vous connecter !</Text>
      </View>     
    );
  }
}