import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView, Text, ActivityIndicator,AsyncStorage } from 'react-native';
import { TextInput } from 'react-native';




export default class Login extends React.Component {
  static navigationOptions = { title: 'Login', header: null }; 


  constructor(props) {
    super(props);
    this.state = { Email: 'marc.olivier@gmail.com', Password: '741', items: [], IsConnected : false, ConnectionEnCours : false, IsLoaded : false, BadCredential : false };
    this.CheckUserIsAlreadyConnected()
  }
  _storeCredentialData = async (result) => {
    try {
      if (result.token == undefined)
      {
        console.log('Token est undefined')
        await AsyncStorage.removeItem('token')
        await AsyncStorage.removeItem('nom')
        await AsyncStorage.removeItem('prenom')
        await AsyncStorage.removeItem('email')
        await AsyncStorage.removeItem('picture')
        await AsyncStorage.removeItem('promo')
        await AsyncStorage.removeItem('id')
        await AsyncStorage.removeItem('groupe')
      }
      else {
        await AsyncStorage.setItem('token', result.token);
        await AsyncStorage.setItem('nom', result.nom);
        await AsyncStorage.setItem('prenom', result.prenom);
        await AsyncStorage.setItem('email', result.email);
        await AsyncStorage.setItem('picture', result.picture);
        await AsyncStorage.setItem('promo', result.promos[0].id);
        chId = result.id.toString()
        chGroupe = result.id.toString()
        await AsyncStorage.setItem('id', chId);
        await AsyncStorage.setItem('groupe', chGroupe);
      }

    } catch (error) {
      console.log('erreur pour stocker les données' + error)
    }
  };
  CheckUserIsAlreadyConnected = async (result) => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // We have data!!
        console.log('Vérification si user déjà connecté : '+value);
        this.props.navigation.navigate('Bienvenue')
      }
    } catch (error) {
      console.log('erreur pour afficher le token' + error)
    }
  }
  _retrieveData = async (result) => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
      }
    } catch (error) {
      console.log('erreur pour afficher le token' + error)
    }
  };
  Connexion = () => {
    this.setState({
      ConnectionEnCours: true,
    }
    );  
    if (this.CheckConnection())
    {
      this.props.navigation.navigate('Bienvenue')
    }
  }
  Traitement = (result) => {
    if (result.token != undefined)
    {
      this.setState({
        IsConnected : true,
        ConnectionEnCours : false,
        BadCredential : false
      }
      ); 
      this.props.navigation.navigate('Bienvenue')
    }
    else
    {
      this.setState({
        IsConnected : false,
        ConnectionEnCours : false,
        BadCredential : true
      }
      ); 
    }
  }
  CheckConnection = () => {
    fetch('http://192.168.43.206:1337/user/login', {
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    email: this.state.Email,
    password: this.state.Password,
    }),
  })
  .then(res => res.json())
  .then (
     async (result) => {
      await this._storeCredentialData(result)
      console.log('On vat faire le traitement !')
      this.Traitement(result)
    })
  return this.IsConnected
  }

  render() {
    const {ConnectionEnCours, IsConnected, BadCredential } = this.state;
    const { navigate } = this.props.navigation;
    if (ConnectionEnCours) {
      return <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
     </View>
    }
    else if (BadCredential)
    {
      return (
        <View style={styles.container}>
          <View style={styles.container}>
           <Image source={require('./../assets/Image/YouByMe_Logo.png')}/>
          </View>
          <Text style={styles.title}>Connectez vous</Text>
          <View style={styles.containerCredential}>
          <Text style={styles.title}>Email</Text>
            <TextInput style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, margin: '1%', textAlign:"center"}}
              onChangeText={(Email) => this.setState({Email})}
              value={this.state.Email}
            />
            <Text style={styles.title}>Mot de passe</Text>
            <TextInput secureTextEntry={true} style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, margin: '1%', textAlign:"center"}}
              onChangeText={(Password) => this.setState({Password})} defaultValue = {'coucou'}
              value={this.state.Password}
            />
          <Text style = {styles.badCredential}>Adresse Email ou Mot de passe incorrect !</Text>
          </View>
          <View style={styles.container}>
            <TouchableOpacity style={{height: 40, width: 300, borderColor: 'black',margin: '1%'}} onPress={this.Connexion}>
              <Image source={require('./../assets/Image/btn_connexion.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    else{return (
      <View style={styles.container}>
        <View style={styles.container}>
         <Image source={require('./../assets/Image/YouByMe_Logo.png')}/>
        </View>
        <Text style={styles.title}>Connectez vous</Text>
        <View style={styles.containerCredential}>
        <Text style={styles.title}>Email</Text>
          <TextInput style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, margin: '1%', textAlign:"center"}}
          onChangeText={(Email) => this.setState({Email})}
          value={this.state.Email}
        />
        <Text style={styles.title}>Mot de passe</Text>
        <TextInput secureTextEntry={true} style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, margin: '1%', textAlign:"center"}}
          onChangeText={(Password) => this.setState({Password})}
          value={this.state.Password}
        />
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={{height: 40, width: 300, borderColor: 'black',margin: '1%'}} onPress={this.Connexion}>
            <Image source={require('./../assets/Image/btn_connexion.png')}/>
          </TouchableOpacity>
        </View>
      </View>
      
    );}
    
  }
}

const styles = StyleSheet.create({
  containerCredential: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  badCredential: {
    color: 'red',
  },
  title: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
