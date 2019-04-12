import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView, Text, ActivityIndicator, ProgressBarAndroid } from 'react-native';

export default class Avancement_Categorie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }


    componentDidMount() {
        fetch("http://192.168.43.206:1337/user/count/softskillByIdUserIdSoftSkill/40/" + this.props.id_soft_skill)
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



    render() {
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
                <View>
                    <Text>{this.props.nom_soft_skill}</Text>
                    <Image source={{uri: this.props.chemin_badge}} style={styles.photo}/>
                    <Text>Vote obtenue : {items[0].count}</Text>
                </View>
            );
        }
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
    text: {
        textAlign: 'center',
        width: '100%',
    }
});