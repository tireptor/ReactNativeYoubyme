import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text  } from 'react-native';
import { TextInput } from 'react-native';




export default class Vote_User extends React.Component {
  static navigationOptions = { title: 'VoteUser', header: null }; 


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View >
          <Image source={{uri: this.props.photo}} style={styles.touchable}/>       
          <TouchableOpacity>
              <Text style={styles.text}>{this.props.nom_t_personne} {this.props.prenom_t_personne}</Text>
              <Image source={require('./../../assets/Image/btn_Vote.png')} style={styles.vote_button}/>              
          </TouchableOpacity>       
      </View>
    );
  }
}


const styles = StyleSheet.create({
  boxStyle: {
    height: 200, 
    width: '40%', 
    margin: 5,
  },
  touchable: {
      height: '70%',
      width: '100%',
      justifyContent: 'center'
  },
  vote_button: {
      height: 40, 
      width: '100%', 
      marginTop: 10
  },
  text : {
    textAlign: 'center',
    width: '100%',
  }
});

