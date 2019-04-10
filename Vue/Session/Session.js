import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text  } from 'react-native';
import { TextInput } from 'react-native';




export default class Session extends React.Component {
  static navigationOptions = { title: 'Session', header: null }; 


  constructor(props) {
    super(props);
  }

  VoteUser = () => {
    this.props.customProps.navigate('Liste_User_Vote');
  }

  render() {
    const { navigate } = this.props.customProps;
    return (
      <View>
        <TouchableOpacity style={styles.touchable} onPress={this.VoteUser}>            
            <Text style={styles.button}>Nom : {this.props.nom_t_personne}</Text>
            <Text style={styles.button}>Prenom : {this.props.prenom_t_personne}</Text> 
            <Text style={styles.button}>Photo : {this.props.photo}</Text> 
            <Text style={styles.button}>Date debut : {this.props.dateDebut}</Text> 
            <Text style={styles.button}>Date Fin : {this.props.dateFin}</Text>                     
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

