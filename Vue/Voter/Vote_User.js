import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text  } from 'react-native';
import { TextInput } from 'react-native';




export default class Vote_User extends React.Component {
  static navigationOptions = { title: 'VoteUser', header: null }; 


  constructor(props) {
    super(props);
  }

  VoteSoftSkill = () => {
    this.props.customProps.navigate("Liste_Soft_Skill", {
      name: this.props.nom_t_personne + " " + this.props.prenom_t_personne,
    });
    this.props.customProps.navigate('Liste_Soft_Skill');
  }

  render() {
    const { navigate } = this.props.customProps;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.VoteSoftSkill}>
            <Image source={{uri: this.props.photo}} style={styles.touchable}/>                
            <Text style={styles.text}>{this.props.nom_t_personne} {this.props.prenom_t_personne}</Text>           
        </TouchableOpacity>       
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxStyle: {
    height: 200, 
    width: '40%', 
    margin: 5,
  },
  touchable: {
      height: 100,
      width: 100,
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

