import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text  } from 'react-native';
import { TextInput } from 'react-native';




export default class Vote_User extends React.Component {
  static navigationOptions = { title: 'VoteUser', header: null }; 


  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Voter pour un mec</Text>
      </View>
      
    );
  }
}

