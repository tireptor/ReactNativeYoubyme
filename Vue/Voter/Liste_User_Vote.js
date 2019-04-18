import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView, Text, ActivityIndicator, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native';
import Vote_User from './Vote_User.js';




export default class Liste_User_Vote extends React.Component {
  static navigationOptions = { title: 'ListeUserVote', header: null }; 


  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: [],
        promo: "",
        idUser: "",
      };
    this.params = this.props.navigation.state.params;
    this._retrieveData();
  }

  _retrieveData = async (result) => {
    value = ""
    valueId = ""
    try {
      value = await AsyncStorage.getItem('promo');
      if (value !== null) {
        this.setState({
          promo : value
        },
        ); 
      }
    } catch (error) {
      console.log('erreur lors de la récuperation de la promo (retrieveDate)' + error)
    }
    try {
      valueId = await AsyncStorage.getItem('id');
      if (valueId !== null) {
        this.setState({
          idUser : valueId
        },
        ); 
      }
    } catch (error) {
      console.log('erreur lors de la récuperation de la promo (retrieveDate)')
    }
    console.log(value +" "+ valueId)
    this.appelPromo(value,valueId)
  }



  UpdatePageTemp = () => {
    this.forceUpdate();
    this.setState({
      updated: true
    }
    ); 
  }

  appelPromo(promo,idUser) {
    fetch("http://51.255.162.109:1337/promo/getAllStudentInPromo/" + promo + '/'+idUser)
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
    const { navigate } = this.props.navigation;
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <Text>{error.message}</Text>;
    } else if (!isLoaded) {
      return <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#0000ff" />
             </View>
    } else {
      return (
        <View style={{flex: 1}}>
            <Text style={styles.text}>Eleves disponibles</Text>
            <ScrollView contentContainerStyle={{flexGrow: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                {this.state.items.map(item => {
                return <View style={styles.boxStyle} key={item.id_t_personne}>{this.renderSquare(item.nom_t_personne, item.prenom_t_personne, item.photo, item.id_t_personne, this.params.id_user, this.params.id_periode, this.props.navigation, this.props.RefreshSession)}</View>;
                })}   
            </ScrollView> 
      </View>
      );
    }
  }

  renderSquare(nom, prenom, image, idPersonne, idUser, idPeriode, CustomNavigation, funcRefreshSession) {
    return <Vote_User nom_t_personne={nom} prenom_t_personne={prenom} photo={image} id_personne={idPersonne} id_user={idUser} id_periode={idPeriode} customProps={CustomNavigation} refreshSession={funcRefreshSession}  />;
  } 
}


const styles = StyleSheet.create({
  scrollTest: {
    flexGrow: 1, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    borderColor: 'black',
    borderWidth: 1,
  },
  boxStyle: {
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
    marginTop: 40,
    marginBottom: 40,
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

