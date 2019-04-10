import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView, Text, ActivityIndicator, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native';
import Session from './Session.js';




export default class List_Session extends React.Component {
  static navigationOptions = { title: 'ListeSession', header: null }; 


  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: [],
        promo: ''
      };
    this._retrieveData()
  }

  _retrieveData = async (result) => {
    try {
      console.log('On est passé dans retrieveData');
      const value = await AsyncStorage.getItem('promo');
      if (value !== null) {
        // We have data!!
        console.log(value);
        this.setState({
          promo : value
        }
        ); 
      }
      this.GatherDataFromBase();
    } catch (error) {
      console.log('erreur pour afficher le token')
      this.setState({
        promo : 'error'
      }
      );
    }
  };

  GatherDataFromBase() {
    fetch("http://192.168.43.206:1337/vote/getAllSessionVoteWithPilotWherePromo/" + this.state.promo)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          }, () => {
            console.log("Pomme : \n", this.state.items);
          });          
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

  renderSquare(nom, prenom, idPersSession, photoPersSession, dateDebut, dateFin, idPeriode, CustomNavigation) {
    return <Session nom_t_personne={nom} prenom_t_personne={prenom} id_Pers_Session={idPersSession} photo_Pers_Session={photoPersSession} date_Debut={dateDebut} date_Fin={dateFin} id_Periode={idPeriode} customProps={CustomNavigation}  />;
  } 


  render() {
    const { navigate } = this.props.navigation;
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <View style={[styles.container, styles.horizontal]}>
                <Text>Erreur : {error.message}</Text>;
            </View>
    } else if (!isLoaded) {
      return <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#0000ff" />
             </View>
    } else {
      return (
        <View style={{flex: 1}}>
          <Text style={styles.text}>Session en cours</Text>
          <ScrollView contentContainerStyle={{flexGrow: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                {this.state.items.map(item => {
                return <View style={styles.boxStyle} key={item.id_periode}>{this.renderSquare(item.nom_t_personne, item.prenom_t_personne, item.id_t_personne, item.photo, item.date_debut, item.date_fin, item.id_periode, this.props.navigation)}</View>;
                })}   
          </ScrollView>        
        </View>
      );
    }
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

