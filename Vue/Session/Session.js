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
    this.GatherDataFromBase()
  }

  VoteUser = () => {
    this.props.customProps.navigate("Liste_User_Vote", {
      id_user: this.props.id_user,
      id_periode: this.props.id_periode,
      RefreshSession: this.GatherDataFromBase,
    });
  }

  ParseDate = () => {
    var d = new Date(this.props.date_Fin);
    var chD
    if (d.getMonth() < 9) {
      var dCore = d.getMonth() +1
      chD = "0"+dCore
    }
    else
    {
      chD = d.getMonth() +1
    }
    var dCore = d.getMonth()
    var dateFin = d.getUTCDate() +  "/" + (chD) + "/" + d.getUTCFullYear();
    this.state.dateFormated = dateFin;
    console.log("Date : " + this.state.dateFormated);
  }

  // vote/checkIfUserVotedForSession/idUser/idSession

  GatherDataFromBase = () => {
    console.log("coucou")
    console.log(this.props.id_user )
    console.log(this.props.id_periode )
    fetch("http://192.168.43.206:1337/vote/checkIfUserVotedForSession/" + this.props.id_user + "/" + this.props.id_periode)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          },
          console.log("Resultat"),
          console.log(result)
          );          
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }




  render() {
    const { navigate } = this.props.customProps;
    if(this.state.items == "nok") {
      return (
        <TouchableOpacity style={styles.container} onPress={this.VoteUser}>
          <Image source={{uri: this.props.photo_Pers_Session}} style={styles.photo}/>
          <View style={styles.otherContainer} >
            <Text>{this.props.nom_t_personne} {this.props.prenom_t_personne}</Text>
            <Text>Date Fin : {this.state.dateFormated}</Text>
          </View>                                 
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={styles.container} onPress={this.VoteUser}>
          <Image source={{uri: this.props.photo_Pers_Session}} style={styles.touchableGrey}/>
          <View style={styles.otherContainer} >
            <Text>DEJA VOTE</Text>
          </View>                                 
        </TouchableOpacity>
      );
    }
    
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
  touchableGrey: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    backgroundColor: 'grey',
    opacity: 0.3
  },
});

