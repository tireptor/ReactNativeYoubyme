import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text  } from 'react-native';
import { TextInput } from 'react-native';




export default class Session extends React.Component {
  static navigationOptions = { title: 'Session', header: null }; 


  constructor(props) {
    super(props);
    this.state = {
      dateFormated: '',
    };
    this.ParseDate()
  }

  VoteUser = () => {
    this.props.customProps.navigate('Liste_User_Vote');
  }

  ParseDate = () => {
    var d = new Date(this.props.date_Fin);
    var dateFin = d.getUTCDate() +  "/" + d.getMonth() + "/" + d.getUTCFullYear();
    this.state.dateFormated = dateFin;
    console.log("Date : " + this.state.dateFormated);
  }





  render() {
    const { navigate } = this.props.customProps;
    return (
        <TouchableOpacity style={styles.container} onPress={this.VoteUser}>
          <Image source={{uri: this.props.photo_Pers_Session}} style={styles.photo}/>
          <View style={styles.otherContainer} >
            <Text>{this.props.nom_t_personne} {this.props.prenom_t_personne}</Text>
            <Text>Date Fin : {this.state.dateFormated}</Text>
          </View>                                 
        </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otherContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    height: 100,
    width: 100
  },
});

