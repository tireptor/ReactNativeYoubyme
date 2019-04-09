import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert  } from 'react-native';
import { TextInput } from 'react-native';




export default class Login extends React.Component {
  static navigationOptions = { title: 'Login', header: null }; 


  constructor(props) {
    super(props);
    this.state = { Email: 'Email', Password: 'Password' };
  }

  Connexion = () => {
    this.props.navigation.navigate('Bienvenue')
  }

  render() {
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
