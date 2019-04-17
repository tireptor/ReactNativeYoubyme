import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, AsyncStorage, ActivityIndicator  } from 'react-native';
import { AppRegistry, TextInput } from 'react-native';
import Avatar from './Avatar/Avatar.js';


import styles from './Bienvenue_styles'

export default class Bienvenue extends React.Component {
  static navigationOptions = { title: 'Bienvenue', header: null }; 
  constructor(props) {
    super(props);
    this.state = { 
      Email: 'Email', 
      Password: 'Password', 
      nom : 'bidon', 
      picture : '', 
      token: "",
      imageLoaded: false,
    };
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
      console.log('erreur lors de la récuperation de données')
    }
    try {
      const valuePicture = await AsyncStorage.getItem('picture');
      if (valuePicture !== null) {
        this.setState({
          picture : valuePicture,
          imageLoaded: true,
        }
        ); 
      }
    } catch (error) {
      console.log("erreur pour afficher l'image")
    }
    try {
      const tryToken = await AsyncStorage.getItem('token');
      if (tryToken !== null) {
        this.setState({
          token : tryToken
        }
        ); 
      }
    } catch (error) {
      console.log("erreur pour recuperer le token")
    }
  };
  _removeCredentialData = async (result) => {
    try {
        console.log('Token est undefined')
        await AsyncStorage.removeItem('token')
        await AsyncStorage.removeItem('nom')
        await AsyncStorage.removeItem('prenom')
        await AsyncStorage.removeItem('email')
        await AsyncStorage.removeItem('picture')
        await AsyncStorage.removeItem('promo')
        await AsyncStorage.removeItem('id')
        await AsyncStorage.removeItem('groupe')
    } catch (error) {
      console.log('erreur pour écraser les données de connexion' + error)
    }
  };
  Bidon = () => {
    return 'bidon'
  }
  Deconnexion = () => {
    this._removeCredentialData()
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
  ListeTopSoftSkill = () => {
    this.props.navigation.navigate("Liste_Top_Soft_Skill", {
      userId: this.state.id_user,
    });
  }
  renderAvatar(avatarPath) {
    return <Avatar avatar_path={avatarPath} />;
  }  

  render() {
    const {nom,picture} = this.state;
    const { navigate } = this.props.navigation;
    if((!this.state.imageLoaded)){
      return(
        <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
       </View>
      );
      
    }
    else {
      return (
        <View style={styles.container}>     
          <View style={styles.returnButton}>
            <TouchableOpacity onPress={this.Deconnexion}>
              <Image source={require('./../assets/Image/retour.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.pictureContainer}>
            {this.renderAvatar(picture)}    
            <Text style={styles.title}>Bienvenue {nom}</Text>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={this.ListeBadge}>
              <Text>Liste des badges obtenus</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.ListeTopSoftSkill}>
              <Text>Top Softskill !</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.ListeSession}>
              <Text>Voter</Text>
            </TouchableOpacity>
          </View>       
        </View>     
      );
    }
  }
}