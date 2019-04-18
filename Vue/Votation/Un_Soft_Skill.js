import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text, AsyncStorage, ActivityIndicator  } from 'react-native';
import { TextInput } from 'react-native';




export default class Un_Soft_Skill extends React.Component {
  static navigationOptions = { title: 'UnSoftSkill', header: null }; 


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      voteEnCours: false,
      isLoaded: false,
      items: [],
      checked: false,
      idVoteEffectue: "",
      token: "",
    };   
  }

  //Besoin d'une route ou l'on specifie : Id User, IdPersonne vote, Id periode, Id softSkill afin de savoir si un vote a ete effectue ou non

  _retrieveData = async (result) => {
    try {
      const tryToken = await AsyncStorage.getItem('token');
      if (tryToken !== null) {
        this.setState({
          token : tryToken
        }
        ); 
      }
    } catch (error) {
      console.log("erreur pour recuperer le token")
    }
  }

  componentWillMount() {
    this._retrieveData() 
    this.checkIfVoted()
  }

  checkIfVoted = () => {
    fetch("http://51.255.162.109:1337/vote/getIfVoteDone/" + this.props.id_user + "/" + this.props.id_personne_vote + "/" + this.props.id_periode + "/" + this.props.id_soft_skill) 
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
          }         
          );
          if(result.length <= 0)
          {
            this.setState({
              checked: false,
            }         
            );
          }
          else {
            this.setState({
              checked: true,
              idVoteEffectue: result[0].id
            }         
            );
          }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  

  ajoutPoint = (idSoftSkill, idPersonneVote, idUser, idPeriode) => {
    fetch("http://51.255.162.109:1337/vote/voteUser" , {
      method: 'POST',
      headers: {
      "Authorization": "Bearer " + this.state.token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      idPeriode: idPeriode,
      idPersVotant: idUser,
      idPersVote: idPersonneVote,
      idSoftSkill: idSoftSkill,
      }),
    }) 
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            checked: true, 
            idVoteEffectue: result
          },
          this.props.VoteUserItems(),
          );
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    
    console.log("Ajout, id softSkill : " + idSoftSkill + " ID personne voté : " + idPersonneVote + " ID user: " + idUser + " ID periode: " + idPeriode);  
  }

  retirePoint = () => {
    console.log("retire point")
    fetch("http://51.255.162.109:1337/vote/" + this.state.idVoteEffectue , {
      method: 'DELETE',
      headers: {
      "Authorization": "Bearer " + this.state.token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      }),
    }) 
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            checked: false, 
          },
          this.props.VoteUserItems(),
          console.log(result)
          );
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
          console.log("Erreur : " + error)
        }
      )
      
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <View style={[styles.container, styles.horizontal]}>
                <Text>{error.message}</Text>
            </View>
    } else if (!isLoaded) {
      return <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#0000ff" />
             </View>
    } else if(this.state.checked){
      return (
        <View  style={styles.container}>
          <Text style={styles.text}>{this.props.nom_t_personne}</Text>
          <View  style={styles.otherContainer}>
            <TouchableOpacity style={styles.touchable} onPress={() => this.retirePoint(this.props.id_soft_skill, this.props.id_personne_vote, this.props.id_user, this.props.id_periode)}>            
              <Text style={styles.buttonChecked}>Annuler le point</Text>                    
            </TouchableOpacity> 
          </View>                    
        </View>
      );
    }
    else
    {
      return (
        <View  style={styles.container}>
          <Text style={styles.text}>{this.props.nom_t_personne}</Text>
          <View  style={styles.otherContainer}>
            <TouchableOpacity style={styles.touchable} onPress={() => this.ajoutPoint(this.props.id_soft_skill, this.props.id_personne_vote, this.props.id_user, this.props.id_periode)}>            
              <Text style={styles.button}>Ajouter un point</Text>                    
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    
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
    width: 100,
    height: 40,
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    lineHeight:35,
    fontSize:12,
  },
  buttonChecked: {
    width: 100,
    height: 40,
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    lineHeight:35,
    fontSize:12,
    backgroundColor: 'green',
    color: 'white'
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

