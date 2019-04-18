import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView, Text, ActivityIndicator, ProgressBarAndroid, AsyncStorage } from 'react-native';

export default class Avancement_Categorie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            id: '',
        };
        this._retrieveData();
    }

    _retrieveData = async (result) => {
        try {
          const value = await AsyncStorage.getItem('id');
          if (value !== null) {
            this.setState({
              id : value,
            },
            this.loadedRetrieve(value),
            ); 
          }
        } catch (error) {
          console.log('erreur lors de la récuperation de données')
        }
    }


    loadedRetrieve(identifiant) {
        fetch("http://51.255.162.109:1337/user/count/softskillByIdUserIdSoftSkill/" + identifiant + "/" + this.props.id_soft_skill)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    }, () => {
                        console.log("Pomme : \n", this.state.items);
                        if(this.state.items.length > 0)
                        {
                            this.props.add_soft_skill();
                            this.props.soft_skill_obtenue()                           
                        }
                        else
                        {
                            this.props.add_soft_skill();
                        }
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



    render() {      
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <View style={[styles.container, styles.horizontal]}>
                <Text>{error.message}</Text>;
            </View>
        } else if (!isLoaded) {
            return <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        } else {
            if(items.length > 0)
            {
                return (
                    <View style={styles.container}>
                        <Text>{this.props.nom_soft_skill}</Text>
                        <Image source={{uri: this.props.chemin_badge}} style={styles.photo}/>
                        <Text>Vote obtenue : {items[0].count}</Text>
                    </View>
                );
            }
            else
            {
                return (
                    <View style={styles.container}>
                        <Text>{this.props.nom_soft_skill}</Text>
                        <Image source={{uri: this.props.chemin_badge}} style={styles.photo}/>
                        <Text>Aucun vote obtenue</Text>
                    </View>
                );
            }
        }
    }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    text: {
        textAlign: 'center',
        width: '100%',
    },
    photo: {
        height: 100,
        width: 100
      },
});