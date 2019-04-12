import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView, Text, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native';
import Un_Soft_Skill from './Un_Soft_Skill.js';
import Soft_Skill_Custom from './Soft_Skill_Custom.js';




export default class Liste_Top_Soft_Skill extends React.Component {
  static navigationOptions = { title: 'ListeTopSoftSkill', header: null }; 


  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: [],
        userId : 0,
        chemin : ''
      };
      this.params = this.props.navigation.state.params;
      this.initPage()
  }
  initPage = () => {
    fetch("http://192.168.43.206:1337/user/count/topSoftSkill/"+this.params.userId+"/5")
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
          console.log("catch erreur : "+error)
        }
      )
  }
  RenderCustomSoftSkill (nomSoftSkil, picture, count )
  {
    return <Soft_Skill_Custom nomSoftSkil={nomSoftSkil} count = {count} picture = {picture} />;
  }
  render() {
    const { error, isLoaded } = this.state;
    console.log("On est dans le render")
    if (error) {
      console.log("On est en erreur : " + error.message)
      return <Text>{error.message}</Text>;
    } else if (!isLoaded) {
      console.log("On est pas chargé")
      return <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#0000ff" />
             </View>
    } else {
      console.log("Dernier return")
      return (
        <View style={{flex: 1}}>
          <Text style={styles.text}>Mes 5 meilleurs softskill !</Text>
          <ScrollView contentContainerStyle={{flexGrow: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                {this.state.items.map(item => {
                return <View style={styles.boxStyle} key={item.id_t_soft_skill}>{this.RenderCustomSoftSkill(item.nom_soft_skill, item.chemin_badge, item.count)}</View>;
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
    alignItems : 'center', 
    justifyContent: 'center',
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

