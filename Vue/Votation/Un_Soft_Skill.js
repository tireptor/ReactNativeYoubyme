import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text  } from 'react-native';
import { TextInput } from 'react-native';




export default class Un_Soft_Skill extends React.Component {
  static navigationOptions = { title: 'UnSoftSkill', header: null }; 


  constructor(props) {
    super(props);
  }

  ajoutPoint(idSoftSkill){
    console.log("Ajout, id softSkill : " + idSoftSkill);
  }

  retirePoint(idSoftSkill){
    console.log("Retire, id softSkill : " + idSoftSkill);
  }

  ListeBadge = (nom) => {
    console.log("yolo" + nom);
  }

  render() {
    return (
      <View  style={styles.container}>
        <Text style={styles.text}>{this.props.nom_t_personne}</Text>
        <View  style={styles.otherContainer}>
          <TouchableOpacity style={styles.touchable} onPress={this.ListeBadge("lol")}>            
            <Text style={styles.button}>+</Text>                    
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={this.retirePoint(this.props.idSoftSkill)}>            
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
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  otherContainer: {
    flexDirection: 'row'
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
    alignItems: 'center',
    margin: 10,
    lineHeight:35,
    fontSize:20,
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

