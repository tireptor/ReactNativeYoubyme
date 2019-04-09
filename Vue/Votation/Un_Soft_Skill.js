import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text  } from 'react-native';
import { TextInput } from 'react-native';




export default class Un_Soft_Skill extends React.Component {
  static navigationOptions = { title: 'UnSoftSkill', header: null }; 


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View  style={styles.container}>
        <Text style={styles.text}>{this.props.nom_t_personne}</Text>
          <TouchableOpacity style={styles.touchable}>            
              <Text style={styles.button}>+</Text>                    
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}>            
              <Text style={styles.button}>-</Text>                    
          </TouchableOpacity>           
      </View>
    );
  }
}


const styles = StyleSheet.create({
  ccontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
      height: '70%',
      width: '40%',
      justifyContent: 'center',
      backgroundColor: 'red',
  },
  text : {
    textAlign: 'center',
    width: '100%',
    margin: 10
  },
  button: {
    width: 50,
    height: 40,
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
  }
});

