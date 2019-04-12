import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView, Text } from 'react-native';

export default class Soft_Skill_Custom extends React.Component {
    render() {
      return (
        <View style = {styles.containerCustom}> 
            <Text>{this.props.nomSoftSkil}</Text>
            <TouchableOpacity style = {styles.customSkill}> 
                <Image source={{uri: this.props.picture}} style={styles.touchable}/>         
            </TouchableOpacity>
            <Text>NB vote : {this.props.count}</Text>
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
        height: 100,
        width: 100,
        marginTop: 5
    },
    customSkill : {
      width: '100%',

    },
    containerCustom : 
    {
      alignItems: 'center',
      justifyContent: 'center'
    }
  });