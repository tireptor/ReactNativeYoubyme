import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView, Text, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native';
import Avancement_Categorie from './Avancement_Categorie.js';


export default class Liste_Avancement_Categorie extends React.Component {
  static navigationOptions = { title: 'Liste_Avancement_Categorie.js', header: null }; 

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    this.params = this.props.navigation.state.params;
  }


  componentDidMount() {
    fetch("http://192.168.43.206:1337/softskill/categorie/" + this.params.id_badge)
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

  renderSquare(id, nom, chemin) {
    return <Avancement_Categorie id_soft_skill={id} nom_soft_skill={nom} chemin_badge={chemin}/>;
  }      
  
  render() {
    return (
      <View>  
        <Text style={styles.text}>Avancement pour le badge : {this.params.nom_badge}</Text>
        <ScrollView contentContainerStyle={{flexGrow: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                {this.state.items.map(item => {
                return <View style={styles.boxStyle} key={item.id}>{this.renderSquare(item.id, item.nom, item.chemin_badge)}</View>;
                })}   
        </ScrollView>               
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
      height: 50, 
      width: '100%', 
      marginTop: 10
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
});