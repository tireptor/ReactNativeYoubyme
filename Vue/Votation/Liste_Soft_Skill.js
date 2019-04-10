import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView, Text, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native';
import Un_Soft_Skill from './Un_Soft_Skill.js';




export default class List_Soft_Skill extends React.Component {
  static navigationOptions = { title: 'ListeSoftSkill', header: null }; 


  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
  }

  componentDidMount() {
    fetch("http://192.168.43.206:1337/softskill")
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

  renderSquare(nom, idSoftSkill) {
    return <Un_Soft_Skill nom_t_personne={nom} id_soft_skill={idSoftSkill} />;
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
          <Text style={styles.text}>Vote pour : Hugo Leboucq</Text>
          <ScrollView contentContainerStyle={{flexGrow: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                {this.state.items.map(item => {
                return <View style={styles.boxStyle} key={item.id}>{this.renderSquare(item.nom, item.id)}</View>;
                })}   
          </ScrollView>        
        </View>
      );
    }
  }
}


const styles = StyleSheet.create({
  boxStyle: {
    height: 100, 
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

