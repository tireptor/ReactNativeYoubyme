import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView, Text, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native';
import Vote_User from './Vote_User.js';




export default class Liste_User_Vote extends React.Component {
  static navigationOptions = { title: 'ListeUserVote', header: null }; 


  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
  }

  componentDidMount() {
    fetch("http://192.168.43.206:1337/promo/getAllStudentInPromo/RO2017RI")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          }
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
                return <View style={styles.boxStyle} key={item.id_t_personne}>{this.renderSquare(item.nom_t_personne, item.prenom_t_personne, item.photo, item.id_t_personne, this.props.navigation)}</View>;
                })}   
            </ScrollView>        
      </View>
      );
    }
  }

  renderSquare(nom, prenom, image, idPersonne, CustomNavigation) {
    return <Vote_User nom_t_personne={nom} prenom_t_personne={prenom} photo={image} id_personne={idPersonne} customProps={CustomNavigation} />;
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

