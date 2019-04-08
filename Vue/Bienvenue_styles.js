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
        margin: 5
      },pictureContener: {
        flex: 1,
        backgroundColor: colors.Blue,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        flexDirection: 'row',
        margin: 5
      }, returnButton: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: 40,
        height: 40,
        borderColor: 'black',
        margin: 5
      }, title: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        color: colors.darkblue,
        margin: 5,
        padding: 5,
      }, 
  });