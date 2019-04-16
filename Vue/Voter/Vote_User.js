import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text, ActivityIndicator  } from 'react-native';
import { TextInput } from 'react-native';




export default class Vote_User extends React.Component {
  static navigationOptions = { title: 'VoteUser', header: null }; 


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  VoteSoftSkill = () => {
    this.props.customProps.navigate("Liste_Soft_Skill", {
      name: this.props.nom_t_personne + " " + this.props.prenom_t_personne,
      id_personne_vote: this.props.id_personne,
      id_user: this.props.id_user,
      id_periode: this.props.id_periode,
      VoteUserItems: this.testRefresh,
    });
  }

  testRefresh = () => {
    console.log("youhou")
    this.setState({
      items: 1
    });
  }

  componentDidMount()
  {
    fetch("http://192.168.43.206:1337/vote/checkIfUserVoted/" + this.props.id_user + "/" + this.props.id_personne + "/" + this.props.id_periode)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          }
          );          
        },
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <Text>{error.message}</Text>;
    } else if (!isLoaded) {
      return <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#0000ff" />
             </View>
    } else {  
      if(items == 0)
      {
        return (
          <View style={styles.container}> 
            <TouchableOpacity onPress={this.VoteSoftSkill}>
                <Image source={{uri: this.props.photo}} style={styles.touchable}/>                
                <Text style={styles.text}>{this.props.nom_t_personne} {this.props.prenom_t_personne}</Text>           
            </TouchableOpacity>       
          </View>
        );
      }
      else{
        return(
        <View style={styles.container}>
          <Image source={{uri: this.props.photo}} style={styles.touchable}/> 
          <Text>DEJA VOTE</Text>
          <View style={styles.overlay} />
        </View>
        )
      }
      
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
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
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

