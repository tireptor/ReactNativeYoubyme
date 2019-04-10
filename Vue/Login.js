import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView, Text, ActivityIndicator,AsyncStorage } from 'react-native';
import { TextInput } from 'react-native';




export default class Login extends React.Component {
  static navigationOptions = { title: 'Login', header: null }; 


  constructor(props) {
    super(props);
    this.state = { Email: 'marc.olivier@gmail.com', Password: '741', items: [] };
  }

  Connexion = () => {
    console.log('Coucou du connexion');
    this.CheckConnection()
    this.props.navigation.navigate('Bienvenue')
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
      AsyncStorage.setItemAsync('token',result.token,keychainService('Alias'))
      tokenTmp = AsyncStorage.getItemAsync('token',keychainService('Alias'))
      console.log(tokenTmp)
    })
  console.log('CRUD saisie : ' + this.state.Email + ' ' + this.state.Password);
  }

  render() {
    console.log("Coucou du render");
    const { navigate } = this.props.navigation;
    return (
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
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
