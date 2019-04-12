import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView, Text, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native';


export default class List_Soft_Skill_Categorie extends React.Component {
  static navigationOptions = { title: 'Liste_Soft_Skill_Categorie', header: null }; 
  constructor(props) {
    super(props);
    this.state = { Email: 'Email'};
    
  }
      render() {
        return (
          <View>
              <Image source={{uri: this.props.chemin_badge}} style={styles.touchable}/>       
              <TouchableOpacity onPress={this.ListeBadge}>
                  <Text style={styles.text}>{this.props.nom_badge}</Text>              
              </TouchableOpacity>        
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
          height: 40, 
          width: '100%', 
          marginTop: 10
      },
      text : {
        textAlign: 'center',
        width: '100%',
      }
    });