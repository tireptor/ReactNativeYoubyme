import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView, Text } from 'react-native';

export default class Badge extends React.Component {

  ListeSoftskill = () => {
    this.props.customProps.navigate('Liste_Avancement_Categorie', {
      id_badge: this.props.id_badge,
      nom_badge: this.props.nom_badge,
    });
  }

  

    render() {
      const { navigate } = this.props.customProps;
      return (
        <View>
            <Image source={{uri: this.props.chemin_badge}} style={styles.touchable}/>       
            <TouchableOpacity onPress={this.ListeSoftskill}>
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