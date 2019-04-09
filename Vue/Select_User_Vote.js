import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text  } from 'react-native';
import { TextInput } from 'react-native';




export default class Select_User_Vote extends React.Component {
  static navigationOptions = { title: 'SelectUserVote', header: null }; 


  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Selectionner le mec a voter</Text>
      </View>
      
    );
  }
}

