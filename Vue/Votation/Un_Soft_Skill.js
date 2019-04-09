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
      <View>
        <Text style={styles.text}>{this.props.nom_t_personne}</Text>
        <View style={styles.container}>
          <TouchableOpacity style={styles.touchable}>            
              <Text style={styles.button}>+</Text>                    
          </TouchableOpacity>
          <TouchableOpacity>            
              <Text style={styles.button}>-</Text>                    
          </TouchableOpacity>  
        </View>              
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row'
  },
  touchable: {
      height: '70%',
      width: '100%',
      justifyContent: 'center',
      margin: 10
  },
  text : {
    textAlign: 'center',
    width: '100%',
  },
  button: {
    width: 50,
    height: 40,
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
  }
});

