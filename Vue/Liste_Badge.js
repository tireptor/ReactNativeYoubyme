import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView  } from 'react-native';
import { TextInput } from 'react-native';




export default class Liste_Badge extends React.Component {
  static navigationOptions = { title: 'ListeBadge', header: null }; 


  constructor(props) {
    super(props);
  }
  

  


  onPress = () => {
    this.props.navigation.navigate('Bienvenue')
  }
  


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            <View style={styles.boxStyle}>
                <Image source={require('./../assets/Image/badge.jpg')} style={styles.touchable}/>
                <TouchableOpacity>
                    <Image source={require('./../assets/Image/btn_Vote.png')} style={styles.vote_button}/>
                </TouchableOpacity>
            </View>
            <View style={styles.boxStyle}>
                <Image source={require('./../assets/Image/badge.jpg')} style={styles.touchable}/>
                <TouchableOpacity>
                    <Image source={require('./../assets/Image/btn_Vote.png')} style={styles.vote_button}/>
                </TouchableOpacity>
            </View>
            <View style={styles.boxStyle}>
                <Image source={require('./../assets/Image/badge.jpg')} style={styles.touchable}/>
                <TouchableOpacity>
                    <Image source={require('./../assets/Image/btn_Vote.png')} style={styles.vote_button}/>
                </TouchableOpacity>
            </View>
            <View style={styles.boxStyle}>
                <Image source={require('./../assets/Image/badge.jpg')} style={styles.touchable}/>
                <TouchableOpacity>
                    <Image source={require('./../assets/Image/btn_Vote.png')} style={styles.vote_button}/>
                </TouchableOpacity>
            </View>
            <View style={styles.boxStyle}>
                <Image source={require('./../assets/Image/badge.jpg')} style={styles.touchable}/>
                <TouchableOpacity>
                    <Image source={require('./../assets/Image/btn_Vote.png')} style={styles.vote_button}/>
                </TouchableOpacity>
            </View>
            <View style={styles.boxStyle}>
                <Image source={require('./../assets/Image/badge.jpg')} style={styles.touchable}/>
                <TouchableOpacity>
                    <Image source={require('./../assets/Image/btn_Vote.png')} style={styles.vote_button}/>
                </TouchableOpacity>
            </View>
            <View style={styles.boxStyle}>
                <Image source={require('./../assets/Image/badge.jpg')} style={styles.touchable}/>
                <TouchableOpacity>
                    <Image source={require('./../assets/Image/btn_Vote.png')} style={styles.vote_button}/>
                </TouchableOpacity>
            </View>
            <View style={styles.boxStyle}>
                <Image source={require('./../assets/Image/badge.jpg')} style={styles.touchable}/>
                <TouchableOpacity>
                    <Image source={require('./../assets/Image/btn_Vote.png')} style={styles.vote_button}/>
                </TouchableOpacity>
            </View>
            <View style={styles.boxStyle}>
                <Image source={require('./../assets/Image/badge.jpg')} style={styles.touchable}/>
                <TouchableOpacity>
                    <Image source={require('./../assets/Image/btn_Vote.png')} style={styles.vote_button}/>
                </TouchableOpacity>
            </View>
            <View style={styles.boxStyle}>
                <Image source={require('./../assets/Image/badge.jpg')} style={styles.touchable}/>
                <TouchableOpacity>
                    <Image source={require('./../assets/Image/btn_Vote.png')} style={styles.vote_button}/>
                </TouchableOpacity>
            </View>
            <View style={styles.boxStyle}>
                <Image source={require('./../assets/Image/badge.jpg')} style={styles.touchable}/>
                <TouchableOpacity>
                    <Image source={require('./../assets/Image/btn_Vote.png')} style={styles.vote_button}/>
                </TouchableOpacity>
            </View>
            <View style={styles.boxStyle}>
                <Image source={require('./../assets/Image/badge.jpg')} style={styles.touchable}/>
                <TouchableOpacity>
                    <Image source={require('./../assets/Image/btn_Vote.png')} style={styles.vote_button}/>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
        height: 50, 
        width: '100%', 
        marginTop: 10
    },
  });