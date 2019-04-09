import {StyleSheet} from 'react-native'

import colors from './../styles/variables';
export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },  
    button: {
        height: 40, 
        width: 300, 
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    pictureContener: {

      }, 
      returnButton: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 40,
        height: 40,
      }, 
      title: {
        width: '100%',
      }, 
  });