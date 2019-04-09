import {StyleSheet} from 'react-native'

import colors from './../styles/variables';
export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.white,
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
      margin: 5,
      padding: 5,
    },  button: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 40,
        borderColor: 'black',
        margin: 5,
      },pictureContener: {
        marginTop: 40,
        width: '100%',
        justifyContent: 'center',
        height: 264,
      }, returnButton: {
        position: 'absolute',
        width: 40,
        height: 40,
      }, title: {
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 20
      }, 
  });