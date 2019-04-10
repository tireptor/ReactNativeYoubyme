import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView, Text, ActivityIndicator,AsyncStorage } from 'react-native';
import { TextInput } from 'react-native';




export default class Login extends React.Component {
  static navigationOptions = { title: 'Login', header: null }; 


  constructor(props) {
    super(props);
    this.state = { Email: 'marc.olivier@gmail.com', Password: '741', items: [], IsConnected : false, ConnectionEnCours : false, IsLoaded : false };
  }
  _storeCredentialData = async (result) => {
    try {
      console.log('on passe dans store data');
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
    } catch (error) {
      console.log('erreur pour stocker les données' + error)
    }
  };
  _retrieveData = async (result) => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // We have data!!
        console.log(value);
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
    console.log('Coucou du connexion');
    if (this.CheckConnection())
    {
      this.props.navigation.navigate('Bienvenue')
    }
  }
  Traitement = (result) => {
    if (result.token != undefined)
    {
      console.log('Le token est saisie');
      this.setState({
        IsConnected : true,
        ConnectionEnCours : false
      }
      ); 
      this.props.navigation.navigate('Bienvenue')
    }
    else
    {
      console.log('Le token est undefined');
      this.setState({
        IsConnected : false,
        ConnectionEnCours : false
      }
      ); 
    }
  }
  CheckConnection = () => {
    console.log('Coucou du contrôle de connexion');
    //http://192.168.43.206:1337/user/login
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
  .then(
     async (result) => {
      console.log('token : ' + result.token);
      //
      this._storeCredentialData(result)
      this.Traitement(result)

      //

    })
  console.log('CRUD saisie : ' + this.state.Email + ' ' + this.state.Password);
  console.log(this.IsConnected)
  return this.IsConnected
  }

  render() {
    const {ConnectionEnCours, IsConnected } = this.state;
    console.log("Coucou du render");
    const { navigate } = this.props.navigation;
    if (ConnectionEnCours) {
      return <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
     </View>
    }
    else{return (
      <View style={styles.container}>
        <View style={styles.container}>
         <Image source={require('./../assets/Image/YouByMe_Logo.png')}/>
        </View>
        <View style={styles.container}>
          <TextInput style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, margin: '1%', textAlign:"center"}}
          onChangeText={(Email) => this.setState({Email})}
          value={this.state.Email}
        />
        <TextInput style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, margin: '1%', textAlign:"center"}}
          onChangeText={(Password) => this.setState({Password})}
          value={this.state.Password}
        />
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={{height: 40, width: 300, borderColor: 'black'}} onPress={this.Connexion}>
          <Image style={styles.button} source={require('./../assets/Image/btn_connexion.png')}/>
        </TouchableOpacity>
        </View>
      </View>
      
    );}
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});
