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
        <TouchableOpacity style={styles.container} onPress={this.ListeSoftskill}>
            <Image source={{uri: this.props.chemin_badge}} style={styles.touchable}/>       
            <Text style={styles.text}>{this.props.nom_badge}</Text>              
        </TouchableOpacity>        
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    touchable: {
        height: 150,
        width: 150,
        justifyContent: 'center'
    },  
    text : {
      textAlign: 'center',
      width: '100%',
      margin: 5,
    }
  });